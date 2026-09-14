export default function RuleSuggestionModal({ open, onClose, title }) {
  if (!open) return null;

  const fieldStyle = { fontFamily: 'inherit', fontSize: '16px', padding: '13px 14px', borderRadius: '10px', border: '1px solid rgba(232,193,105,0.3)', background: 'rgba(0,0,0,0.22)', color: '#e6d5b8' };
  const labelSpanStyle = { fontSize: '15px', fontWeight: 700, color: '#f2ddb4' };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(10,4,3,0.72)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 100 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: '480px', maxHeight: '90vh', overflowY: 'auto', background: '#2a0f0d', border: '1px solid rgba(232,193,105,0.3)', borderRadius: '16px', padding: '28px', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}
      >
        <button
          onClick={onClose}
          aria-label="بستن"
          style={{ position: 'absolute', top: '18px', left: '18px', background: 'transparent', border: 0, color: '#b8905a', fontSize: '22px', lineHeight: 1, cursor: 'pointer', fontFamily: 'inherit', padding: 0 }}
        >
          ×
        </button>
        <h2 style={{ fontSize: 'clamp(19px,3vw,22px)', fontWeight: 800, color: '#e8c169', margin: '0 0 20px', paddingInlineEnd: '30px' }}>{title}</h2>
        <div style={{ display: 'grid', gap: '18px' }}>
          <label style={{ display: 'grid', gap: '8px' }}>
            <span style={labelSpanStyle}>نام <span style={{ fontWeight: 400, color: '#b0907a' }}>— اختیاری</span></span>
            <input style={fieldStyle} />
          </label>
          <label style={{ display: 'grid', gap: '8px' }}>
            <span style={labelSpanStyle}>شهر یا جمع شما <span style={{ fontWeight: 400, color: '#b0907a' }}>— اختیاری</span></span>
            <input style={fieldStyle} />
          </label>
          <label style={{ display: 'grid', gap: '8px' }}>
            <span style={labelSpanStyle}>راه تماس <span style={{ fontWeight: 400, color: '#b0907a' }}>— ایمیل یا شماره</span></span>
            <input style={fieldStyle} />
          </label>
          <label style={{ display: 'grid', gap: '8px' }}>
            <span style={labelSpanStyle}>قانون یا نکته‌ی شما</span>
            <textarea rows="5" style={{ ...fieldStyle, resize: 'vertical' }}></textarea>
          </label>
          <button
            onClick={onClose}
            style={{ background: '#d8ae44', color: '#33100d', fontWeight: 800, fontSize: '17px', padding: '15px 34px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontFamily: 'inherit', justifySelf: 'start' }}
          >
            ارسال
          </button>
        </div>
      </div>
    </div>
  );
}
