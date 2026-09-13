import { useEffect, useRef, useState } from 'react';

const MASKS = ['/assets/goat-mask-0.png', '/assets/goat-mask-1.png', '/assets/goat-mask-2.png'];

/**
 * Scroll-summoned running-goat mascot used on all three rules pages.
 * Desktop: fixed near the right margin of the text column.
 * Mobile/tablet: small, fixed to the bottom-left corner.
 * Click opens a popover explaining the pattern tiled across the goat's body;
 * the first scroll after opening closes it again (matches the original).
 */
export default function GoatWidget({ ariaLabel, patternUrl, patternSize, patternPosition, heading, paragraphs }) {
  const [open, setOpen] = useState(false);
  const [frame, setFrame] = useState(0);
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    const id = setInterval(() => setFrame((f) => (f + 1) % 3), 120);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (openRef.current) setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggle = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setOpen((v) => !v);
  };

  const bodyStyle = (i) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('${patternUrl}')`,
    backgroundSize: patternSize,
    backgroundPosition: patternPosition || undefined,
    backgroundRepeat: 'repeat',
    WebkitMaskImage: `url('${MASKS[i]}')`,
    maskImage: `url('${MASKS[i]}')`,
    WebkitMaskSize: 'contain',
    maskSize: 'contain',
    WebkitMaskPosition: 'bottom center',
    maskPosition: 'bottom center',
    WebkitMaskRepeat: 'no-repeat',
    maskRepeat: 'no-repeat',
    opacity: frame === i ? 1 : 0,
  });

  const boxOpacity = open ? 1 : 0;
  const boxPE = open ? 'auto' : 'none';

  return (
    <>
      <div data-goat="desk" style={{ position: 'fixed', top: 'max(37vh, calc(150px + min(186px, 18vw)))', left: 0, right: 0, pointerEvents: 'none', zIndex: 4 }}>
        <div
          onClick={toggle}
          style={{
            position: 'absolute',
            bottom: 0,
            right: 'max(14px, calc(25% - 336px))',
            width: 'min(252px, 24vw)',
            height: 'min(186px, 18vw)',
            minWidth: '110px',
            minHeight: '82px',
            pointerEvents: 'auto',
            cursor: 'pointer',
            transform: 'scaleX(-1)',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))',
          }}
        >
          <div role="img" aria-label={ariaLabel} style={bodyStyle(0)} />
          <div style={bodyStyle(1)} />
          <div style={bodyStyle(2)} />
        </div>
        <div
          style={{
            position: 'fixed',
            top: 'calc(max(37vh, calc(150px + min(186px, 18vw))) + 18px)',
            right: 'max(14px, calc(25% - 336px))',
            width: '300px',
            maxWidth: 'calc(100vw - 48px)',
            maxHeight: 'calc(100vh - max(37vh, calc(150px + min(186px, 18vw))) - 42px)',
            overflow: 'auto',
            pointerEvents: boxPE,
            background: 'rgba(14,5,4,0.96)',
            border: '1px solid rgba(232,193,105,0.4)',
            borderRadius: '14px',
            padding: '20px 22px',
            boxShadow: '0 22px 48px rgba(0,0,0,0.55)',
            opacity: boxOpacity,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.94)',
            transformOrigin: 'top right',
            transition: 'opacity 0.26s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <PopoverBody heading={heading} paragraphs={paragraphs} onClose={toggle} />
        </div>
      </div>

      <div data-goat="mobile" style={{ position: 'fixed', left: '12px', bottom: '12px', pointerEvents: 'none', zIndex: 40 }}>
        <div
          onClick={toggle}
          style={{
            position: 'relative',
            width: '88px',
            height: '66px',
            pointerEvents: 'auto',
            cursor: 'pointer',
            transform: 'scaleX(1)',
            filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))',
          }}
        >
          <div aria-hidden="true" style={bodyStyle(0)} />
          <div style={bodyStyle(1)} />
          <div style={bodyStyle(2)} />
        </div>
        <div
          style={{
            position: 'fixed',
            left: '12px',
            bottom: '92px',
            width: 'calc(100vw - 24px)',
            maxWidth: '320px',
            maxHeight: '52vh',
            overflow: 'auto',
            pointerEvents: boxPE,
            background: 'rgba(14,5,4,0.97)',
            border: '1px solid rgba(232,193,105,0.4)',
            borderRadius: '14px',
            padding: '18px 20px',
            boxShadow: '0 22px 48px rgba(0,0,0,0.6)',
            opacity: boxOpacity,
            transform: open ? 'translateY(0) scale(1)' : 'translateY(-12px) scale(0.94)',
            transformOrigin: 'bottom left',
            transition: 'opacity 0.26s ease, transform 0.3s cubic-bezier(0.22,1,0.36,1)',
          }}
        >
          <PopoverBody heading={heading} paragraphs={paragraphs} onClose={toggle} />
        </div>
      </div>
    </>
  );
}

function PopoverBody({ heading, paragraphs, onClose }) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', margin: '0 0 12px' }}>
        <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#f3d391', margin: 0 }}>{heading}</h3>
        <button
          onClick={onClose}
          aria-label="بستن"
          style={{ background: 'transparent', border: 0, color: '#b8905a', fontSize: 'clamp(17px,2.4vw,20px)', lineHeight: 1, cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
        >
          ×
        </button>
      </div>
      {paragraphs.map((p, i) => (
        <p key={i} style={{ fontSize: '14px', color: '#cdb797', lineHeight: 2, margin: i === paragraphs.length - 1 ? 0 : '0 0 10px', textWrap: 'pretty' }}>
          {p}
        </p>
      ))}
    </>
  );
}
