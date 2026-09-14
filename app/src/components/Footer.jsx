import { useGo } from '../nav.jsx';

const linkStyle = { fontSize: '15px' };

export default function Footer() {
  const go = useGo();
  return (
    <footer style={{ borderTop: '1px solid rgba(232,193,105,0.16)', background: 'rgba(0,0,0,0.2)', marginTop: '40px' }}>
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '52px 24px 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
          gap: '34px',
        }}
      >
        <div>
          <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', color: '#b8905a', margin: '0 0 14px' }}>بازی‌ها</p>
          <div style={{ display: 'grid', gap: '9px' }}>
            <a href="#" onClick={go.hokm} style={linkStyle}>حکم</a>
            <a href="#" onClick={go.shelemGame} style={linkStyle}>شلم</a>
            <a href="#" onClick={go.bebe} style={linkStyle}>بی‌بی‌سلام</a>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', color: '#b8905a', margin: '0 0 14px' }}>راهنما</p>
          <div style={{ display: 'grid', gap: '9px' }}>
            <a href="#" onClick={go.hokmRules} style={linkStyle}>قوانین حکم</a>
            <a href="#" onClick={go.shelemRules} style={linkStyle}>قوانین شلم</a>
            <a href="#" onClick={go.bebeRules} style={linkStyle}>قوانین بی‌بی‌سلام</a>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', color: '#b8905a', margin: '0 0 14px' }}>درباره</p>
          <div style={{ display: 'grid', gap: '9px' }}>
            <a href="#" onClick={go.about} style={linkStyle}>درباره‌ی ما</a>
            <a href="#" onClick={go.support} style={linkStyle}>حمایت</a>
            <a href="#" onClick={go.contact} style={linkStyle}>تماس با ما</a>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', color: '#b8905a', margin: '0 0 14px' }}>حقوقی</p>
          <div style={{ display: 'grid', gap: '9px' }}>
            <a href="#" onClick={go.terms} style={linkStyle}>شرایط استفاده</a>
            <a href="#" style={linkStyle}>حریم خصوصی</a>
          </div>
        </div>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 800, letterSpacing: '0.1em', color: '#b8905a', margin: '0 0 14px' }}>دریافت</p>
          <div style={{ display: 'grid', gap: '9px' }}>
            <a href="#" onClick={go.download} style={linkStyle}>اندروید</a>
            <a href="#" onClick={go.download} style={linkStyle}>ویندوز</a>
            <a href="#" onClick={go.download} style={linkStyle}>مک</a>
            <a href="#" onClick={go.download} style={linkStyle}>لینوکس</a>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          padding: '0 clamp(16px,4vw,24px) 44px',
          display: 'flex',
          gap: '16px',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          borderTop: '1px solid rgba(232,193,105,0.1)',
          paddingTop: '24px',
        }}
      >
        <span style={{ fontFamily: 'Vazirmatn, system-ui, sans-serif', fontSize: '16px', color: '#c9a469' }}>hakem.am</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener"
            aria-label="اینستاگرام"
            title="اینستاگرام"
            className="social-icon"
            style={socialIconStyle}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener"
            aria-label="تلگرام"
            title="تلگرام"
            className="social-icon"
            style={socialIconStyle}
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 4.5 2.8 11.3l5.4 1.8L21 4.5Z" />
              <path d="M21 4.5 8.2 13.1l.5 5.9 3-3.4" />
              <path d="M11.7 15.6 17 19l4-14.5" />
            </svg>
          </a>
          <a
            href="https://aparat.com/"
            target="_blank"
            rel="noopener"
            aria-label="آپارات"
            title="آپارات"
            className="social-icon"
            style={{ ...socialIconStyle, fontSize: '13px', fontWeight: 800 }}
          >
            <span
              role="img"
              aria-label="آپارات"
              style={{
                width: '22px',
                height: '22px',
                background: 'currentColor',
                WebkitMask: "url('/assets/aparat-logo.png') center/contain no-repeat",
                mask: "url('/assets/aparat-logo.png') center/contain no-repeat",
              }}
            />
          </a>
        </div>
        <a href="#" onClick={go.terms} style={{ fontSize: '14px' }}>شرایط استفاده</a>
      </div>
    </footer>
  );
}

const socialIconStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '10px',
  border: '1px solid rgba(232,193,105,0.24)',
  background: 'rgba(255,255,255,0.035)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#c9a469',
};
