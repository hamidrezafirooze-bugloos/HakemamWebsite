// Converts the static page-content fragments inside the Claude-Design export
// (project/Hakemam Website.dc.html) into real JSX files for the Vite/React port.
//
// The source markup is plain HTML with a handful of custom bits layered on top
// (sc-if page switches, {{ }} bindings for nav/onClick, style-hover pseudo
// attributes). Because none of the 12 page bodies use control-flow tags
// internally, we do a pure *attribute-level* rewrite and leave the tag tree
// completely untouched -- this keeps the conversion mechanical and safe for
// long stretches of hand-authored Persian copy.
import fs from 'node:fs';
import path from 'node:path';
import { ASSET_MAP } from './asset-map.mjs';

const SRC_PATH = path.resolve('project/Hakemam Website.dc.html');
const SRC = fs.readFileSync(SRC_PATH, 'utf8');
const OUT_DIR = path.resolve('app/src/pages/generated');
fs.mkdirSync(OUT_DIR, { recursive: true });

const PAGES = [
  { key: 'isHome', file: 'HomeContent.jsx', trimToMain: false },
  { key: 'isHokm', file: 'HokmContent.jsx', trimToMain: false },
  { key: 'isShelemGame', file: 'ShelemGameContent.jsx', trimToMain: false },
  { key: 'isBebe', file: 'BebeContent.jsx', trimToMain: false },
  { key: 'isRules', file: 'HokmRulesContent.jsx', trimToMain: true },
  { key: 'isShelem', file: 'ShelemRulesContent.jsx', trimToMain: true },
  { key: 'isBebeRules', file: 'BebeRulesContent.jsx', trimToMain: true },
  { key: 'isAbout', file: 'AboutContent.jsx', trimToMain: false },
  { key: 'isSupport', file: 'SupportContent.jsx', trimToMain: false },
  { key: 'isDownload', file: 'DownloadContent.jsx', trimToMain: false },
  { key: 'isTerms', file: 'TermsContent.jsx', trimToMain: false },
  { key: 'isContact', file: 'ContactContent.jsx', trimToMain: false },
];

const NAV_FN = new Set([
  'goHome', 'goHokm', 'goRules', 'goShelemGame', 'goShelem', 'goBebe',
  'goBebeRules', 'goAbout', 'goSupport', 'goDownload', 'goTerms', 'goContact',
]);
// goXxx identifier -> go.method name used by the shared useGo() hook
const NAV_METHOD = {
  goHome: 'home', goHokm: 'hokm', goRules: 'hokmRules', goShelemGame: 'shelemGame',
  goShelem: 'shelemRules', goBebe: 'bebe', goBebeRules: 'bebeRules', goAbout: 'about',
  goSupport: 'support', goDownload: 'download', goTerms: 'terms', goContact: 'contact',
};

const SVG_ATTR_MAP = {
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
};

const BOOL_VIDEO_ATTRS = new Set(['autoPlay', 'loop', 'muted', 'playsInline', 'controls']);

function extractBlock(key) {
  const openRe = new RegExp(`<sc-if value="\\{\\{ ${key} \\}\\}"[^>]*>`);
  const m = openRe.exec(SRC);
  if (!m) throw new Error('missing sc-if for ' + key);
  const start = m.index + m[0].length;
  const end = SRC.indexOf('</sc-if>', start);
  if (end === -1) throw new Error('missing closing sc-if for ' + key);
  return SRC.slice(start, end);
}

function kebabToCamel(s) {
  return s.split('-').filter(Boolean).map((p, i) => (i === 0 ? p : p[0].toUpperCase() + p.slice(1))).join('');
}

function cssPropToJs(prop) {
  if (prop.startsWith('--')) return prop;
  if (prop.startsWith('-webkit-')) return 'Webkit' + kebabToCamel(prop.slice(8));
  if (prop.startsWith('-moz-')) return 'Moz' + kebabToCamel(prop.slice(5));
  if (prop.startsWith('-ms-')) return 'ms' + kebabToCamel(prop.slice(4));
  return kebabToCamel(prop);
}

function rewriteAssetUrls(str) {
  return str.replace(/uploads\/([^"']+)/g, (m, file) => {
    const slug = ASSET_MAP[file];
    if (!slug) {
      console.warn('UNMAPPED ASSET:', JSON.stringify(file));
      return m;
    }
    return '/assets/' + slug;
  });
}

function cssStringToObjLiteral(css) {
  const parts = css.split(';').map((s) => s.trim()).filter(Boolean);
  const entries = parts.map((decl) => {
    const i = decl.indexOf(':');
    const prop = cssPropToJs(decl.slice(0, i).trim());
    const val = decl.slice(i + 1).trim();
    return `${JSON.stringify(prop)}: ${JSON.stringify(val)}`;
  });
  return '{ ' + entries.join(', ') + ' }';
}

// Dedup'd hover-style classes collected while walking a page's markup.
let hoverRules;
let hoverSeen;

function hoverClassFor(css) {
  if (hoverSeen.has(css)) return hoverSeen.get(css);
  const cls = 'hv' + (hoverRules.length + 1);
  hoverSeen.set(css, cls);
  hoverRules.push({ cls, css });
  return cls;
}

const ATTR_RE = /([a-zA-Z_][a-zA-Z0-9_-]*)="([^"]*)"/g;

function convertOpenTag(tagName, attrsStr, selfClosing) {
  let className = null;
  let hoverCls = null;
  const out = [];
  let m;
  ATTR_RE.lastIndex = 0;
  while ((m = ATTR_RE.exec(attrsStr))) {
    let [, name, value] = m;
    if (name === 'style') {
      out.push(`style={${cssStringToObjLiteral(rewriteAssetUrls(value))}}`);
      continue;
    }
    if (name === 'style-hover') {
      const bound = /^\{\{\s*([\w.]+)\s*\}\}$/.exec(value.trim());
      if (bound) {
        // Only literal css strings are expected inside page bodies (header/footer
        // handle their own {{ }}-bound hover styles separately).
        console.warn('BOUND style-hover left unhandled:', value);
        continue;
      }
      hoverCls = hoverClassFor(rewriteAssetUrls(value));
      continue;
    }
    if (name === 'onClick') {
      const bound = /^\{\{\s*([\w.]+)\s*\}\}$/.exec(value.trim());
      if (bound) {
        const ident = bound[1];
        if (NAV_FN.has(ident)) out.push(`onClick={go.${NAV_METHOD[ident]}}`);
        else if (ident === 'toggleGoat') out.push('onClick={toggleGoat}');
        else out.push(`/* TODO onClick ${ident} */`);
      }
      continue;
    }
    if (BOOL_VIDEO_ATTRS.has(name) && /^\{\{\s*true\s*\}\}$/.test(value.trim())) {
      out.push(name);
      continue;
    }
    if (name === 'class') {
      className = value;
      continue;
    }
    if (SVG_ATTR_MAP[name]) {
      out.push(`${SVG_ATTR_MAP[name]}=${JSON.stringify(value)}`);
      continue;
    }
    out.push(`${name}=${JSON.stringify(rewriteAssetUrls(value))}`);
  }
  if (hoverCls || className) {
    const cls = [className, hoverCls].filter(Boolean).join(' ');
    out.push(`className=${JSON.stringify(cls)}`);
  }
  const attrsOut = out.length ? ' ' + out.join(' ') : '';
  return `<${tagName}${attrsOut}${selfClosing ? ' /' : ''}>`;
}

const VOID_TAGS = new Set(['img', 'input', 'br', 'hr', 'meta', 'source']);
// Matches an opening or self-closing tag: <name attr="v" ... > or <name .../>
const TAG_RE = /<([a-zA-Z][a-zA-Z0-9]*)((?:\s+[a-zA-Z_][a-zA-Z0-9_-]*="[^"]*")*)\s*(\/?)>/g;

function convertMarkup(html) {
  return html.replace(TAG_RE, (whole, tag, attrs, slash) => {
    const selfClose = !!slash || VOID_TAGS.has(tag);
    return convertOpenTag(tag, attrs, selfClose);
  });
}

for (const page of PAGES) {
  hoverRules = [];
  hoverSeen = new Map();
  let block = extractBlock(page.key);
  if (page.trimToMain) {
    const idx = block.indexOf('<main');
    if (idx === -1) throw new Error('no <main> in ' + page.key);
    block = block.slice(idx);
  }
  const jsx = convertMarkup(block).trim();
  const compName = page.file.replace('.jsx', '');
  const hoverCss = hoverRules.map((r) => `.${r.cls}:hover { ${r.css} }`).join('\n');
  const out = `import { useGo } from '../../nav.jsx';\n${page.trimToMain ? "import GoatWidget from '../../components/GoatWidget.jsx';\nimport { useState } from 'react';\n" : ''}
${hoverCss ? `const hoverCss = ${JSON.stringify(hoverCss)};\n` : ''}
export default function ${compName}() {
  const go = useGo();
${page.trimToMain ? '  const [goatOpen, setGoatOpen] = useState(false);\n  const toggleGoat = () => setGoatOpen((v) => !v);\n' : ''}  return (
    <>
${hoverCss ? '      <style>{hoverCss}</style>\n' : ''}${page.trimToMain ? '      {/* GOAT_WIDGET */}\n' : ''}      ${jsx}
    </>
  );
}
`;
  fs.writeFileSync(path.join(OUT_DIR, page.file), out, 'utf8');
  console.log('wrote', page.file, `(${hoverRules.length} hover rule(s))`);
}
