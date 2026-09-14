import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useGo, PATHS } from '../nav.jsx';

const NAV_ITEMS = [
  { id: 'home', label: 'خانه', path: PATHS.home },
  {
    id: 'games',
    label: 'بازی‌ها',
    activePaths: [PATHS.hokm, PATHS.shelemGame, PATHS.bebe],
    children: [
      { label: 'حکم', path: PATHS.hokm },
      { label: 'شلم', path: PATHS.shelemGame },
      { label: 'بی‌بی‌سلام', path: PATHS.bebe },
      { label: 'گنجفه', path: null },
    ],
  },
  {
    id: 'learn',
    label: 'آموزش',
    activePaths: [PATHS.hokmRules, PATHS.shelemRules, PATHS.bebeRules],
    children: [
      { label: 'حکم', path: PATHS.hokmRules },
      { label: 'شلم', path: PATHS.shelemRules },
      { label: 'بی‌بی‌سلام', path: PATHS.bebeRules },
      { label: 'گنجفه', path: null },
    ],
  },
  { id: 'about', label: 'درباره‌ی ما', path: PATHS.about },
  { id: 'support', label: 'حمایت', path: PATHS.support },
  { id: 'download', label: 'دریافت برنامه', path: PATHS.download },
  { id: 'contact', label: 'تماس با ما', path: PATHS.contact },
];

export default function Header() {
  const go = useGo();
  const location = useLocation();
  const page = location.pathname;
  const [openMenu, setOpenMenu] = useState(null);
  const [narrow, setNarrow] = useState(typeof window !== 'undefined' ? window.innerWidth < 900 : false);
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    const onResize = () => setNarrow(window.innerWidth < 900);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setBurger(false);
  }, [page]);

  const toggle = (key) => (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setOpenMenu((s) => (s === key ? null : key));
  };

  const isWide = !narrow;
  const isNarrow = narrow;
  const burgerOpen = narrow && burger;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'linear-gradient(rgba(32,8,7,0.42),rgba(32,8,7,0.12))',
        backdropFilter: 'blur(6px)',
        borderBottom: '1px solid rgba(232,193,105,0.16)',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '14px clamp(14px,3.5vw,24px)',
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={go.home}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            fontFamily: 'Vazirmatn, system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '23px',
            color: '#f0cf84',
            letterSpacing: '0.01em',
          }}
        >
          Hakem.am
        </button>

        {isWide && (
          <nav style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', flex: 1 }}>
            {NAV_ITEMS.map((item) => {
              const active = item.children
                ? item.activePaths.includes(page)
                : page === item.path;
              const open = !!item.children && openMenu === item.id;
              const bg = active || open ? 'rgba(232,193,105,0.14)' : 'transparent';
              const color = active || open ? '#f3d391' : '#c2a58c';
              return (
                <div key={item.id} style={{ position: 'relative' }}>
                  <button
                    onClick={item.children ? toggle(item.id) : go[pathToGoKey(item.path)]}
                    style={{
                      background: bg,
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                      fontSize: '15px',
                      fontWeight: active ? 700 : 500,
                      color,
                      padding: '9px 14px',
                      borderRadius: '9px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                    }}
                  >
                    {item.label}
                    {item.children && <span style={{ fontSize: '9px', opacity: 0.75 }}>▾</span>}
                  </button>
                  {open && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 7px)',
                        insetInlineStart: 0,
                        minWidth: '172px',
                        background: '#2a0a09',
                        border: '1px solid rgba(232,193,105,0.24)',
                        borderRadius: '12px',
                        padding: '7px',
                        display: 'grid',
                        gap: '2px',
                        boxShadow: '0 14px 34px rgba(15,3,3,0.55)',
                        zIndex: 60,
                      }}
                    >
                      {item.children.map((sub) => (
                        <button
                          key={sub.label}
                          onClick={sub.path ? go[pathToGoKey(sub.path)] : (e) => e.preventDefault()}
                          className={sub.path ? 'nav-sub' : undefined}
                          style={{
                            background: 'none',
                            border: 'none',
                            cursor: sub.path ? 'pointer' : 'not-allowed',
                            fontFamily: 'inherit',
                            textAlign: 'start',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: sub.path ? '#e6d5b8' : 'rgba(205,183,151,0.4)',
                            padding: '10px 13px',
                            borderRadius: '8px',
                          }}
                        >
                          {sub.path ? sub.label : sub.label + ' — به‌زودی'}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {isNarrow && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setBurger((v) => !v);
            }}
            aria-label="منو"
            style={{
              marginInlineStart: 'auto',
              background: 'transparent',
              border: '1px solid rgba(232,193,105,0.35)',
              borderRadius: '10px',
              width: '46px',
              height: '46px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#f0cf84' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#f0cf84' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', background: '#f0cf84' }} />
          </button>
        )}

        {isWide && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span
              style={{
                background: '#d8ae44',
                color: '#33100d',
                fontWeight: 700,
                fontSize: '13px',
                padding: '6px 14px',
                borderRadius: '999px',
              }}
            >
              فارسی
            </span>
            <span
              style={{
                border: '1px solid rgba(232,193,105,0.4)',
                color: '#e0c48a',
                fontWeight: 600,
                fontSize: '13px',
                padding: '5px 14px',
                borderRadius: '999px',
                fontFamily: 'Vazirmatn, system-ui, sans-serif',
              }}
            >
              English
            </span>
          </div>
        )}
      </div>

      {burgerOpen && (
        <div
          style={{
            borderTop: '1px solid rgba(232,193,105,0.16)',
            background: '#2a0a09',
            padding: '10px clamp(14px,3.5vw,24px) 18px',
            display: 'grid',
            gap: '2px',
            maxHeight: 'calc(100vh - 76px)',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {NAV_ITEMS.flatMap((item) => {
            if (!item.children) {
              return [
                <button
                  key={item.id}
                  onClick={go[pathToGoKey(item.path)]}
                  style={mobileRowStyle(page === item.path ? 800 : 500, page === item.path ? '#f3d391' : '#d8c2a4', page === item.path ? 'rgba(232,193,105,0.14)' : 'transparent', '14px')}
                >
                  {item.label}
                  <span style={{ fontSize: '11px', opacity: 0.75 }} />
                </button>,
              ];
            }
            const expanded = openMenu === item.id;
            const active = item.activePaths.includes(page);
            const rows = [
              <button
                key={item.id}
                onClick={toggle(item.id)}
                style={mobileRowStyle(active || expanded ? 800 : 500, active || expanded ? '#f3d391' : '#d8c2a4', expanded ? 'rgba(232,193,105,0.1)' : 'transparent', '14px')}
              >
                {item.label}
                <span style={{ fontSize: '11px', opacity: 0.75 }}>{expanded ? '▴' : '▾'}</span>
              </button>,
            ];
            if (expanded) {
              for (const sub of item.children) {
                rows.push(
                  <button
                    key={item.id + sub.label}
                    onClick={sub.path ? go[pathToGoKey(sub.path)] : (e) => e.preventDefault()}
                    style={mobileRowStyle(
                      sub.path && page === sub.path ? 800 : 500,
                      sub.path ? (page === sub.path ? '#f3d391' : '#e6d5b8') : 'rgba(205,183,151,0.4)',
                      sub.path && page === sub.path ? 'rgba(232,193,105,0.14)' : 'transparent',
                      '30px',
                      sub.path ? 'pointer' : 'not-allowed',
                    )}
                  >
                    {sub.path ? sub.label : sub.label + ' — به‌زودی'}
                    <span style={{ fontSize: '11px', opacity: 0.75 }} />
                  </button>,
                );
              }
            }
            return rows;
          })}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', padding: '12px 4px 0' }}>
            <span
              style={{
                background: '#d8ae44',
                color: '#33100d',
                fontWeight: 700,
                fontSize: '13px',
                padding: '7px 15px',
                borderRadius: '999px',
              }}
            >
              فارسی
            </span>
            <span
              style={{
                border: '1px solid rgba(232,193,105,0.4)',
                color: '#e0c48a',
                fontWeight: 600,
                fontSize: '13px',
                padding: '6px 15px',
                borderRadius: '999px',
                fontFamily: 'Vazirmatn, system-ui, sans-serif',
              }}
            >
              English
            </span>
          </div>
        </div>
      )}
    </header>
  );
}

function mobileRowStyle(weight, color, bg, pad, cursor = 'pointer') {
  return {
    background: bg,
    border: 'none',
    cursor,
    fontFamily: 'inherit',
    textAlign: 'start',
    fontSize: '17px',
    fontWeight: weight,
    color,
    padding: `14px ${pad}`,
    borderRadius: '9px',
    minHeight: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    width: '100%',
  };
}

// Reverse-lookup a PATHS value back to its key so buttons can call go[key]().
const PATH_TO_KEY = Object.fromEntries(Object.entries(PATHS).map(([k, v]) => [v, k]));
function pathToGoKey(path) {
  return PATH_TO_KEY[path];
}
