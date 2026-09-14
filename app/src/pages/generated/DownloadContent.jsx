import { useGo } from '../../nav.jsx';


export default function DownloadContent() {
  const go = useGo();
  return (
    <>
      <main style={{ "maxWidth": "1000px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "padding": "clamp(44px,7vw,80px) 0 40px" }}>
      <p style={{ "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>دریافت حاکمم</p>
      <h1 style={{ "fontSize": "clamp(28px,6.2vw,48px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.3", "margin": "0 0 22px", "letterSpacing": "-0.015em" }}>همین‌جا بازی کن، یا میز رو با خودت ببر</h1>
      <p style={{ "fontSize": "clamp(16px,2.2vw,19px)", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 32px", "maxWidth": "640px" }}>لازم نیست چیزی نصب کنی — بازی مستقیم توی مرورگر باز میشه. ولی اگه می‌خوای همیشه دم دستت باشه، نسخه‌ی نصبی هم هست.</p>
      <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "18px", "padding": "17px 38px", "borderRadius": "11px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "boxShadow": "0 6px 24px rgba(216,174,68,0.18)" }}>بازی توی مرورگر — بدون نصب</button>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px" }}>
        <p style={{ "fontSize": "17px", "color": "#e6d5b8", "margin": "0 0 18px" }}>به‌نظر می‌رسه از اندروید استفاده می‌کنین</p>
        <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "marginBottom": "16px" }}>دانلود مستقیم برای اندروید</button>
        <p style={{ "fontSize": "15px", "color": "#b0907a", "margin": "0" }}>نسخه‌ی ۱.x · حدود ۴۰ مگابایت · به‌روزرسانی از داخل برنامه</p>
      </div>
      <p style={{ "fontFamily": "ui-monospace, monospace", "fontSize": "13px", "color": "#9d7e69", "lineHeight": "1.9", "margin": "14px 0 0" }}>همین کادر برای ویندوز، مک و لینوکس با متن متناسب. اگه تشخیص ممکن نبود، فهرست کامل نمایش داده میشه.</p>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 24px" }}>همه‌ی نسخه‌ها</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(280px,100%),1fr))", "gap": "18px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>اندروید — دانلود مستقیم</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0 0 18px" }}>فایل نصبی رو بگیرین و نصب کنین. به‌روزرسانی‌های بعدی از داخل خود برنامه انجام میشه.</p>
          <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "700", "fontSize": "15px", "padding": "12px 24px", "borderRadius": "9px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>دانلود</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>نصب به‌عنوان وب‌اپ</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}>بدون دانلود هیچ فایلی، بازی رو روی صفحه‌ی اصلی گوشیتون بذارین. توی مرورگر، از منو «افزودن به صفحه‌ی اصلی» رو بزنین.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>ویندوز</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0 0 18px" }}>نسخه‌ی ۶۴ بیتی.</p>
          <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "700", "fontSize": "15px", "padding": "12px 24px", "borderRadius": "9px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>دانلود</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>مک</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0 0 18px" }}>سازگار با پردازنده‌های Apple و Intel.</p>
          <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "700", "fontSize": "15px", "padding": "12px 24px", "borderRadius": "9px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>دانلود</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>لینوکس</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0 0 18px" }}>نسخه‌ی قابل حمل ۶۴ بیتی.</p>
          <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "700", "fontSize": "15px", "padding": "12px 24px", "borderRadius": "9px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>دانلود</button>
        </div>
      </div>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>راهنمای نصب روی اندروید</h2>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 22px" }}>اگه اولین باره که فایل نصبی رو خارج از فروشگاه نصب می‌کنین، اندروید یه هشدار نشون میده. طبیعیه:</p>
      <ol style={{ "margin": "0 0 26px", "paddingInlineStart": "22px", "fontSize": "17px", "color": "#cdb797", "lineHeight": "2.2" }}>
        <li>فایل رو دانلود کنین.</li>
        <li>روی فایل دانلودشده بزنین.</li>
        <li>اگه پیام «نصب برنامه‌های ناشناس» اومد، اجازه رو برای مرورگرتون فعال کنین.</li>
        <li>«نصب» رو بزنین. تمام.</li>
      </ol>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(180px,1fr))", "gap": "14px" }}>
        <div style={{ "aspectRatio": "9/16", "borderRadius": "12px", "border": "1px dashed rgba(232,193,105,0.35)", "background": "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 12px, rgba(255,255,255,0.012) 12px 24px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "16px" }}><span style={{ "fontFamily": "ui-monospace, monospace", "fontSize": "12px", "color": "#b0907a", "textAlign": "center" }}>اسکرین‌شات مرحله ۱</span></div>
        <div style={{ "aspectRatio": "9/16", "borderRadius": "12px", "border": "1px dashed rgba(232,193,105,0.35)", "background": "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 12px, rgba(255,255,255,0.012) 12px 24px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "16px" }}><span style={{ "fontFamily": "ui-monospace, monospace", "fontSize": "12px", "color": "#b0907a", "textAlign": "center" }}>اسکرین‌شات مرحله ۲</span></div>
        <div style={{ "aspectRatio": "9/16", "borderRadius": "12px", "border": "1px dashed rgba(232,193,105,0.35)", "background": "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 12px, rgba(255,255,255,0.012) 12px 24px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "16px" }}><span style={{ "fontFamily": "ui-monospace, monospace", "fontSize": "12px", "color": "#b0907a", "textAlign": "center" }}>اسکرین‌شات مرحله ۳</span></div>
        <div style={{ "aspectRatio": "9/16", "borderRadius": "12px", "border": "1px dashed rgba(232,193,105,0.35)", "background": "repeating-linear-gradient(135deg, rgba(255,255,255,0.035) 0 12px, rgba(255,255,255,0.012) 12px 24px)", "display": "flex", "alignItems": "center", "justifyContent": "center", "padding": "16px" }}><span style={{ "fontFamily": "ui-monospace, monospace", "fontSize": "12px", "color": "#b0907a", "textAlign": "center" }}>اسکرین‌شات مرحله ۴</span></div>
      </div>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>به‌زودی توی فروشگاه‌ها</h2>
      <div style={{ "display": "flex", "gap": "10px", "flexWrap": "wrap" }}>
        <span style={{ "border": "1px solid rgba(232,193,105,0.3)", "color": "#c9a469", "fontSize": "14px", "fontWeight": "600", "padding": "9px 18px", "borderRadius": "999px" }}>کافه بازار</span>
        <span style={{ "border": "1px solid rgba(232,193,105,0.3)", "color": "#c9a469", "fontSize": "14px", "fontWeight": "600", "padding": "9px 18px", "borderRadius": "999px" }}>مایکت</span>
        <span style={{ "border": "1px solid rgba(232,193,105,0.3)", "color": "#c9a469", "fontSize": "14px", "fontWeight": "600", "padding": "9px 18px", "borderRadius": "999px" }}>سیب‌اپ</span>
        <span style={{ "border": "1px solid rgba(232,193,105,0.3)", "color": "#c9a469", "fontSize": "14px", "fontWeight": "600", "padding": "9px 18px", "borderRadius": "999px" }}>اناردونی</span>
        <span style={{ "border": "1px solid rgba(232,193,105,0.3)", "color": "#c9a469", "fontSize": "14px", "fontWeight": "600", "padding": "9px 18px", "borderRadius": "999px", "fontFamily": "Shabnam, system-ui, sans-serif" }}>Google Play</span>
        <span style={{ "border": "1px solid rgba(232,193,105,0.3)", "color": "#c9a469", "fontSize": "14px", "fontWeight": "600", "padding": "9px 18px", "borderRadius": "999px", "fontFamily": "Shabnam, system-ui, sans-serif" }}>App Store</span>
      </div>
    </section>

    <section style={{ "padding": "44px 0 56px", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 24px" }}>سؤالات متداول</h2>
      <div style={{ "display": "grid", "gap": "22px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>نسخه‌ی مرورگر با نسخه‌ی نصبی فرق داره؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>نه. همون بازیه، با همون حساب کاربری و همون رتبه. فقط نسخه‌ی نصبی سریع‌تر باز میشه و آفلاین هم کار می‌کنه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگه برنامه رو نصب کنم، حسابم منتقل میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. با همون حساب وارد شید، تاریخچه و رتبه‌تون سر جاشه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>به‌روزرسانی چطور انجام میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>نسخه‌ی دانلود مستقیم خودش خبر میده و از داخل برنامه به‌روز میشه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حجمش چقدره؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حدود ۴۰ مگابایت برای اندروید.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بازی رایگانه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله، و رایگان می‌مونه.</p></div>
      </div>
    </section>
  </main>
    </>
  );
}
