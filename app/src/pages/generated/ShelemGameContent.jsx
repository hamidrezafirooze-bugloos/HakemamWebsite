import { useGo } from '../../nav.jsx';

const hoverCss = ".hv1:hover { transform:translateY(-8px);border-color:rgba(232,193,105,0.55);background:rgba(16,4,4,0.85) }";

export default function ShelemGameContent() {
  const go = useGo();
  return (
    <>
      <style>{hoverCss}</style>
      <main>
    <section style={{ "position": "relative", "overflow": "hidden" }}>
    <div style={{ "position": "absolute", "inset": "0", "backgroundImage": "linear-gradient(270deg,rgba(24,6,5,0.86) 0%,rgba(24,6,5,0.66) 42%,rgba(24,6,5,0.3) 100%),url('/assets/shelem-hero-bg.jpg')", "backgroundSize": "cover", "backgroundPosition": "center" }}></div>
    <div style={{ "position": "relative", "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(48px,7vw,88px) clamp(16px,4vw,24px) clamp(36px,5vw,56px)" }}>
      <p style={{ "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 22px" }}>بازی شلم آنلاین</p>
      <h1 style={{ "fontSize": "clamp(30px,7vw,56px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.28", "margin": "0 0 22px", "maxWidth": "800px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>شلم، با امتیازشماری خودکار</h1>
      <p style={{ "fontSize": "clamp(17px,2.5vw,21px)", "color": "#d8c2a4", "lineHeight": "1.85", "margin": "0 0 38px", "maxWidth": "640px", "textWrap": "pretty" }}>اعلام کن، حکم را انتخاب کن، و ببین به عددت می‌رسی یا می‌سوزی. حساب امتیازها با ماست.</p>
      <div style={{ "display": "flex", "gap": "14px", "flexWrap": "wrap", "alignItems": "center" }}>
        <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "18px", "padding": "17px 38px", "borderRadius": "11px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "boxShadow": "0 6px 24px rgba(216,174,68,0.18)", "textDecoration": "none", "display": "inline-block" }}>شروع بازی</a>
        <button style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "16px", "padding": "16px 28px", "borderRadius": "11px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>اتاق بساز و رفقا را دعوت کن</button>
      </div>
      <div style={{ "marginTop": "36px", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap", "background": "rgba(14,3,3,0.4)", "border": "1px solid rgba(232,193,105,0.42)", "borderRadius": "14px", "padding": "18px 22px", "width": "fit-content", "boxShadow": "0 18px 40px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,238,214,0.07)", "backdropFilter": "blur(6px)" }}>
        <span style={{ "fontSize": "16px", "color": "#d8c2a4" }}>کد اتاق داری؟</span>
        <div style={{ "display": "flex", "gap": "8px" }} dir="ltr">
          <span style={{ "width": "44px", "height": "52px", "border": "1px solid rgba(232,193,105,0.45)", "borderRadius": "9px", "background": "rgba(0,0,0,0.55)", "boxShadow": "inset 0 2px 6px rgba(0,0,0,0.55)" }}></span>
          <span style={{ "width": "44px", "height": "52px", "border": "1px solid rgba(232,193,105,0.45)", "borderRadius": "9px", "background": "rgba(0,0,0,0.55)", "boxShadow": "inset 0 2px 6px rgba(0,0,0,0.55)" }}></span>
          <span style={{ "width": "44px", "height": "52px", "border": "1px solid rgba(232,193,105,0.45)", "borderRadius": "9px", "background": "rgba(0,0,0,0.55)", "boxShadow": "inset 0 2px 6px rgba(0,0,0,0.55)" }}></span>
          <span style={{ "width": "44px", "height": "52px", "border": "1px solid rgba(232,193,105,0.45)", "borderRadius": "9px", "background": "rgba(0,0,0,0.55)", "boxShadow": "inset 0 2px 6px rgba(0,0,0,0.55)" }}></span>
        </div>
        <button style={{ "background": "rgba(232,193,105,0.14)", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "13px 22px", "borderRadius": "9px", "border": "1px solid rgba(232,193,105,0.35)", "cursor": "pointer", "fontFamily": "inherit" }}>برو تو</button>
      </div>
      </div>
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px)", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>دو دلیل که اینجا بازی کنی</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(320px,100%),1fr))", "gap": "18px" }}>
        <div style={{ "backgroundImage": "linear-gradient(rgba(20,6,5,0.44),rgba(20,6,5,0.45)),url('/assets/shelem-reason-1.jpg')", "backgroundSize": "cover", "backgroundPosition": "center", "border": "1px solid rgba(232,193,105,0.32)", "borderRadius": "16px", "padding": "28px" }}>
          <h3 style={{ "fontSize": "clamp(17px,2.5vw,21px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>امتیاز را ما می‌شماریم</h3>
          <p style={{ "fontSize": "16px", "color": "#FFF3E2", "lineHeight": "1.95", "margin": "0", "textShadow": "0 1px 3px rgba(0,0,0,0.75)" }}>در شلم آخر هر دست باید امتیاز کارت‌های برده‌شده را جمع بزنید — و همین‌جاست که بحث شروع می‌شود. اینجا شمارش خودکار است: امتیاز کارت‌ها، امتیاز دست‌ها، آخری، و سوختن، همه بی‌خطا حساب می‌شوند.</p>
        </div>
        <div style={{ "backgroundImage": "linear-gradient(rgba(20,6,5,0.44),rgba(20,6,5,0.45)),url('/assets/shelem-reason-2.jpg')", "backgroundSize": "cover", "backgroundPosition": "center", "border": "1px solid rgba(232,193,105,0.32)", "borderRadius": "16px", "padding": "28px" }}>
          <h3 style={{ "fontSize": "clamp(17px,2.5vw,21px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>قاعده‌های میز خودتان</h3>
          <p style={{ "fontSize": "16px", "color": "#FFF3E2", "lineHeight": "1.95", "margin": "0", "textShadow": "0 1px 3px rgba(0,0,0,0.75)" }}>آس ۱۰ یا ۱۵؟ جوکر دارید یا نه؟ امتیاز پایان بازی ۱۱۰۰ یا ۱۶۵۰؟ پیش از شروع میز، قاعده‌ها را همان‌طور که در جمع خودتان بازی می‌کنید تنظیم کنید.</p>
        </div>
      </div>
    </section>

    <section style={{ "position": "relative", "backgroundImage": "linear-gradient(rgba(20,6,5,0.36),rgba(20,6,5,0.38)),url('/assets/shelem-howto-bg.jpg')", "backgroundSize": "cover", "backgroundPosition": "center", "borderTop": "1px solid rgba(232,193,105,0.24)", "borderBottom": "1px solid rgba(232,193,105,0.24)" }}>
      <div style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(40px,5.5vw,64px) clamp(16px,4vw,24px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>چطور شروع کنی</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(240px,100%),1fr))", "gap": "18px" }}>
        <div style={{ "background": "rgba(16,4,4,0.72)", "border": "1px solid rgba(232,193,105,0.32)", "borderRadius": "14px", "padding": "24px", "opacity": "0", "animation": "stepRise 0.75s cubic-bezier(0.2,0.75,0.25,1) 0.08s both, stepGlow 4.5s ease-in-out 1.40s infinite", "transition": "transform 0.35s cubic-bezier(0.2,0.75,0.25,1),border-color 0.35s,background 0.35s" }} className="hv1">
          <p style={{ "fontSize": "15px", "fontWeight": "800", "color": "#d8ae44", "margin": "0 0 10px", "display": "inline-block", "animation": "stepNum 0.5s cubic-bezier(0.2,1.4,0.4,1) 0.32s both" }}>۱</p>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>اتاق بساز — یک کد چهار حرفی می‌گیری.</p>
        </div>
        <div style={{ "background": "rgba(16,4,4,0.72)", "border": "1px solid rgba(232,193,105,0.32)", "borderRadius": "14px", "padding": "24px", "opacity": "0", "animation": "stepRise 0.75s cubic-bezier(0.2,0.75,0.25,1) 0.16s both, stepGlow 4.5s ease-in-out 1.80s infinite", "transition": "transform 0.35s cubic-bezier(0.2,0.75,0.25,1),border-color 0.35s,background 0.35s" }} className="hv1">
          <p style={{ "fontSize": "15px", "fontWeight": "800", "color": "#d8ae44", "margin": "0 0 10px", "display": "inline-block", "animation": "stepNum 0.5s cubic-bezier(0.2,1.4,0.4,1) 0.40s both" }}>۲</p>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>قاعده‌ها را تنظیم کن — حداقل اعلام، جوکر، امتیاز پایان.</p>
        </div>
        <div style={{ "background": "rgba(16,4,4,0.72)", "border": "1px solid rgba(232,193,105,0.32)", "borderRadius": "14px", "padding": "24px", "opacity": "0", "animation": "stepRise 0.75s cubic-bezier(0.2,0.75,0.25,1) 0.24s both, stepGlow 4.5s ease-in-out 2.20s infinite", "transition": "transform 0.35s cubic-bezier(0.2,0.75,0.25,1),border-color 0.35s,background 0.35s" }} className="hv1">
          <p style={{ "fontSize": "15px", "fontWeight": "800", "color": "#d8ae44", "margin": "0 0 10px", "display": "inline-block", "animation": "stepNum 0.5s cubic-bezier(0.2,1.4,0.4,1) 0.48s both" }}>۳</p>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>لینک را بفرست — به محض چهار نفر شدن، حراج شروع می‌شود.</p>
        </div>
      </div>
      <div style={{ "marginTop": "24px", "display": "flex", "gap": "14px", "alignItems": "center", "flexWrap": "wrap" }}>
        <span style={{ "fontSize": "16px", "color": "#cdb797" }}>عجله داری و سه نفر دم دست نیست؟</span>
        <button style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "16px", "padding": "14px 26px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>شروع فوری با حریف هوشمند</button>
      </div>
      </div>
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px)", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>پیش‌نمایش میز</h2>
      <div style={{ "aspectRatio": "16/8", "borderRadius": "16px", "border": "1px solid rgba(232,193,105,0.28)", "background": "#1c0605", "overflow": "hidden" }}>
        <video src="/assets/preview-video.mp4" autoPlay loop muted playsInline style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }}></video>
      </div>
      <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "18px 0 0" }}>میز شلم با تخته‌ی اعلام و امتیاز، بالای دست هر تیم.</p>
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px)", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 16px" }}>شلم بلد نیستی؟</h2>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 20px", "maxWidth": "680px" }}>قوانین کامل شلم را نوشته‌ایم — از حراج و زمین تا امتیاز کارت‌ها، سوختن، شلم کامل و همه‌ی واریانت‌ها از جمله شلم با جوکر.</p>
      <a href="#" onClick={go.shelemRules} style={{ "fontSize": "17px", "fontWeight": "700" }}>قوانین کامل شلم →</a>
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px)", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>بازی‌های دیگر</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "18px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "22px" }}>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>حکم</strong> — شناخته‌شده‌ترین بازی ورق ایران؛ ساده‌تر شروع می‌شود</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "22px" }}>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>بی‌بی‌سلام</strong> — سبک‌تر، مناسب دورهمی خانوادگی</p>
        </div>
      </div>
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px) 0", "borderTop": "1px solid rgba(232,193,105,0.13)", "display": "flex", "gap": "32px", "alignItems": "flex-end", "flexWrap": "wrap" }}>
      <div style={{ "flex": "0 1 520px", "minWidth": "300px", "paddingBottom": "56px" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 16px" }}>روی موبایل هم هست</h2>
      <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 18px", "maxWidth": "620px" }}>در مرورگر بازی کن، یا اپ را بگیر و روی گوشی‌ات داشته باش.</p>
      <a href="#" onClick={go.download} style={{ "fontSize": "16px", "fontWeight": "700" }}>دریافت برنامه →</a>
      </div>
      <img src="/assets/shelem-mobile.png" alt="مردی تکیه‌داده به پیکان با گوشی در دست" style={{ "width": "min(420px,100%)", "height": "auto", "display": "block", "marginBottom": "0", "filter": "drop-shadow(0 -10px 30px rgba(0,0,0,0.45))" }} />
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px)", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>سؤالات متداول</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(320px,100%),1fr))", "gap": "26px" }}>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بازی رایگان است؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. بازی کردن رایگان است و همیشه رایگان می‌ماند.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>باید ثبت‌نام کنم؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>برای بازی کردن نه. برای گرفتن رتبه و ذخیره‌ی تاریخچه باید حساب بسازی.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>چند نفر لازم است؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>شلم دقیقاً چهار نفره است. اگر چهار نفر نشدید، جای خالی با حریف هوشمند پر می‌شود.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>می‌شود با جوکر بازی کرد؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. پیش از شروع میز می‌توانید حالت جوکر را روشن کنید.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگر تیم ما بسوزد چه می‌شود؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>عدد اعلام‌شده از امتیاز تیم کم می‌شود. تخته‌ی امتیاز این را خودش اعمال می‌کند.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>می‌توانم فقط با دوستان خودم بازی کنم؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. اتاق خصوصی بساز و کدش را فقط برای همان‌ها بفرست.</p>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
