import { useGo } from '../../nav.jsx';

const hoverCss = ".hv1:hover { transform:rotateY(180deg) }\n.hv2:hover { transform:translateY(-8px);border-color:rgba(232,193,105,0.55);background:rgba(255,255,255,0.06) }";

export default function HomeContent() {
  const go = useGo();
  return (
    <>
      <style>{hoverCss}</style>
      <main>
    <section style={{ "position": "relative", "overflow": "hidden" }}>
    <video src="/assets/home-hero-video.mp4" autoPlay loop muted playsInline style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "pointerEvents": "none" }}></video>
    <div style={{ "position": "relative", "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(48px,7vw,88px) clamp(16px,4vw,24px) clamp(36px,5vw,56px)" }}>
      <p style={{ "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 22px" }}>حکم · شلم · بی‌بی‌سلام</p>
      <h1 style={{ "fontSize": "clamp(30px,7.2vw,58px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.28", "margin": "0 0 22px", "maxWidth": "800px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>اینجا معلوم میشه کی بهتر بازی می‌کنه</h1>
      <p style={{ "fontSize": "clamp(17px,2.5vw,21px)", "color": "#d8c2a4", "lineHeight": "1.85", "margin": "0 0 38px", "maxWidth": "620px", "textWrap": "pretty" }}>حکم، شلم و بی‌بی‌سلام، با رتبه‌بندی واقعی. بدون نصب، بدون ثبت‌نام.</p>
      <div style={{ "display": "flex", "gap": "14px", "flexWrap": "wrap", "alignItems": "center" }}>
        <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "18px", "padding": "17px 38px", "borderRadius": "11px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "boxShadow": "0 6px 24px rgba(216,174,68,0.18)", "textDecoration": "none", "display": "inline-block" }}>شروع بازی</a>
        <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "16px", "padding": "16px 28px", "borderRadius": "11px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>اتاق بساز و رفقا رو دعوت کن</a>
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
      <p style={{ "fontSize": "15px", "color": "#b0907a", "margin": "28px 0 0" }}>آخرین دست: ۴ دقیقه پیش · امشب ساعت ۲۱ شلوغ‌ترین ساعته</p>
    </div>
    </section>

    <section style={{ "position": "relative", "background": "linear-gradient(180deg,rgba(255,238,214,0.062) 0%,rgba(255,238,214,0.028) 100%)", "borderTop": "1px solid rgba(232,193,105,0.2)", "borderBottom": "1px solid rgba(232,193,105,0.2)" }}>
      <div style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(44px,6vw,72px) clamp(16px,4vw,24px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>بازی‌ها</h2>
      <div style={{ "display": "flex", "flexWrap": "wrap", "gap": "20px", "perspective": "1400px" }}>

        <div style={{ "width": "244px", "height": "342px", "position": "relative", "transformStyle": "preserve-3d", "transition": "transform 0.65s cubic-bezier(0.2,0.7,0.25,1)", "cursor": "pointer" }} className="hv1">
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "borderRadius": "16px", "overflow": "hidden", "border": "1px solid rgba(232,193,105,0.28)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)" }}>
            <img src="/assets/card-hokm.webp" alt="حکم" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
            <div style={{ "position": "absolute", "inset": "auto 0 0 0", "padding": "16px", "background": "linear-gradient(to top,rgba(30,14,10,0.92),rgba(30,14,10,0))" }}>
              <h3 style={{ "fontSize": "22px", "fontWeight": "800", "color": "#f3d391", "margin": "0", "textAlign": "center" }}>حکم</h3>
            </div>
          </div>
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "transform": "rotateY(180deg)", "borderRadius": "16px", "background": "linear-gradient(160deg,#3a1a13,#25100c)", "border": "1px solid rgba(232,193,105,0.3)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px" }}>
            <h3 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>حکم</h3>
            <p style={{ "fontSize": "16px", "color": "#dcc6a6", "lineHeight": "1.95", "margin": "0" }}>بازی اصلی. چهارنفره، دو تیم، و همون خالِ برنده‌ای که سرش بحث میشه.</p>
            <div style={{ "display": "flex", "gap": "16px" }}><span style={{ "border": "1px solid rgba(232,193,105,0.4)", "color": "#c9a469", "fontSize": "13px", "fontWeight": "700", "padding": "6px 14px", "borderRadius": "999px" }}>به زودی</span></div>
          </div>
        </div>

        <div style={{ "width": "244px", "height": "342px", "position": "relative", "transformStyle": "preserve-3d", "transition": "transform 0.65s cubic-bezier(0.2,0.7,0.25,1)", "cursor": "pointer" }} className="hv1">
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "borderRadius": "16px", "overflow": "hidden", "border": "1px solid rgba(232,193,105,0.28)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)" }}>
            <img src="/assets/card-shelem.webp" alt="شلم" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
            <div style={{ "position": "absolute", "inset": "auto 0 0 0", "padding": "16px", "background": "linear-gradient(to top,rgba(30,14,10,0.92),rgba(30,14,10,0))" }}>
              <h3 style={{ "fontSize": "22px", "fontWeight": "800", "color": "#f3d391", "margin": "0", "textAlign": "center" }}>شلم</h3>
            </div>
          </div>
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "transform": "rotateY(180deg)", "borderRadius": "16px", "background": "linear-gradient(160deg,#3a1a13,#25100c)", "border": "1px solid rgba(232,193,105,0.3)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px" }}>
            <h3 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>شلم</h3>
            <p style={{ "fontSize": "16px", "color": "#dcc6a6", "lineHeight": "1.95", "margin": "0" }}>سنگین‌تر و رقابتی‌تر، با اعلام امتیاز. برای وقتی که حکم برات ساده شده.</p>
            <div style={{ "display": "flex", "gap": "16px" }}><span style={{ "border": "1px solid rgba(232,193,105,0.4)", "color": "#c9a469", "fontSize": "13px", "fontWeight": "700", "padding": "6px 14px", "borderRadius": "999px" }}>به زودی</span></div>
          </div>
        </div>

        <div style={{ "width": "244px", "height": "342px", "position": "relative", "transformStyle": "preserve-3d", "transition": "transform 0.65s cubic-bezier(0.2,0.7,0.25,1)", "cursor": "pointer" }} className="hv1">
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "borderRadius": "16px", "overflow": "hidden", "border": "1px solid rgba(232,193,105,0.28)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)" }}>
            <img src="/assets/card-bebe.webp" alt="بی‌بی‌سلام" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
            <div style={{ "position": "absolute", "inset": "auto 0 0 0", "padding": "16px", "background": "linear-gradient(to top,rgba(30,14,10,0.92),rgba(30,14,10,0))" }}>
              <h3 style={{ "fontSize": "22px", "fontWeight": "800", "color": "#f3d391", "margin": "0", "textAlign": "center" }}>بی‌بی‌سلام</h3>
            </div>
          </div>
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "transform": "rotateY(180deg)", "borderRadius": "16px", "background": "linear-gradient(160deg,#3a1a13,#25100c)", "border": "1px solid rgba(232,193,105,0.3)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px" }}>
            <h3 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>بی‌بی‌سلام</h3>
            <p style={{ "fontSize": "16px", "color": "#dcc6a6", "lineHeight": "1.95", "margin": "0" }}>سبک‌تر و سریع‌تر. مناسب دورهمی‌های خانوادگی و جمع‌های بزرگ‌تر.</p>
            <div style={{ "display": "flex", "gap": "16px" }}><span style={{ "border": "1px solid rgba(232,193,105,0.4)", "color": "#c9a469", "fontSize": "13px", "fontWeight": "700", "padding": "6px 14px", "borderRadius": "999px" }}>به زودی</span></div>
          </div>
        </div>

        <div style={{ "width": "244px", "height": "342px", "position": "relative", "transformStyle": "preserve-3d", "transition": "transform 0.65s cubic-bezier(0.2,0.7,0.25,1)", "cursor": "pointer" }} className="hv1">
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "borderRadius": "16px", "overflow": "hidden", "border": "1px solid rgba(232,193,105,0.28)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)" }}>
            <img src="/assets/shah-abbasi.webp" alt="گنجفه" style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }} />
            <div style={{ "position": "absolute", "inset": "auto 0 0 0", "padding": "16px", "background": "linear-gradient(to top,rgba(30,14,10,0.92),rgba(30,14,10,0))" }}>
              <h3 style={{ "fontSize": "22px", "fontWeight": "800", "color": "#f3d391", "margin": "0", "textAlign": "center" }}>گنجفه</h3>
            </div>
          </div>
          <div style={{ "position": "absolute", "inset": "0", "backfaceVisibility": "hidden", "transform": "rotateY(180deg)", "borderRadius": "16px", "background": "linear-gradient(160deg,#3a1a13,#25100c)", "border": "1px solid rgba(232,193,105,0.3)", "boxShadow": "0 14px 38px rgba(0,0,0,0.45)", "padding": "28px 24px", "display": "flex", "flexDirection": "column", "justifyContent": "center", "gap": "16px" }}>
            <h3 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>گنجفه</h3>
            <p style={{ "fontSize": "16px", "color": "#dcc6a6", "lineHeight": "1.95", "margin": "0" }}>کهن‌ترین بازی ورق ایرانی، با کارت‌های نگارگری‌شده و قواعدی که ریشه در دوران صفوی داره.</p>
            <div style={{ "display": "flex", "gap": "16px" }}><span style={{ "border": "1px solid rgba(232,193,105,0.4)", "color": "#c9a469", "fontSize": "13px", "fontWeight": "700", "padding": "6px 14px", "borderRadius": "999px" }}>به زودی</span></div>
          </div>
        </div>

      </div>
      <p style={{ "fontSize": "15px", "color": "#b0907a", "margin": "22px 0 0" }}>بازی‌های بیشتری در راهه.</p>
      </div>
    </section>

    <div style={{ "backgroundImage": "linear-gradient(rgba(24,6,5,0.72), rgba(24,6,5,0.72)), url('/assets/home-carpet-bg.webp')", "backgroundSize": "cover", "backgroundPosition": "center" }}>
    <section style={{ "position": "relative", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <div style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(36px,5vw,56px) clamp(16px,4vw,24px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>چرا اینجا</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(280px,100%),1fr))", "gap": "32px" }}>
        <div>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 12px" }}>رتبه‌ای که واقعاً معنا داره</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>همه ادعا می‌کنن خوب بازی می‌کنن. اینجا معلوم میشه. بعد از هر بازی کیفیت تصمیم‌هات سنجیده میشه، نه فقط برد و باخت — چون تو این بازی‌ها شانس هم نقش داره.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 12px" }}>بدون مانع</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>تو مرورگر باز میشه و بازی شروع میشه. کد اتاق رو بفرست، رفقات بدون هیچ دردسری میان تو.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 12px" }}>چیزی بیشتر از یک میز</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بازی پر از چیزهاییه که میشه کشف و جمعشون کرد — کارت‌هایی با چهره‌های آشنای این سرزمین، و اون چیزی که دور میز حال میده.</p>
        </div>
      </div>
      </div>
    </section>

    <section style={{ "position": "relative" }}>
      <div style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px) clamp(36px,5vw,56px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>چطور شروع کنی</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(240px,100%),1fr))", "gap": "18px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px", "opacity": "0", "animation": "stepRise 0.75s cubic-bezier(0.2,0.75,0.25,1) 0.08s both, stepGlow 4.5s ease-in-out 1.40s infinite", "transition": "transform 0.35s cubic-bezier(0.2,0.75,0.25,1),border-color 0.35s,background 0.35s" }} className="hv2">
          <p style={{ "fontSize": "15px", "fontWeight": "800", "color": "#d8ae44", "margin": "0 0 10px", "display": "inline-block", "animation": "stepNum 0.5s cubic-bezier(0.2,1.4,0.4,1) 0.32s both" }}>۱</p>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>اتاق بساز — یک کد چهار حرفی می‌گیری</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "24px", "opacity": "0", "animation": "stepRise 0.75s cubic-bezier(0.2,0.75,0.25,1) 0.16s both, stepGlow 4.5s ease-in-out 1.80s infinite", "transition": "transform 0.35s cubic-bezier(0.2,0.75,0.25,1),border-color 0.35s,background 0.35s" }} className="hv2">
          <p style={{ "fontSize": "15px", "fontWeight": "800", "color": "#d8ae44", "margin": "0 0 10px", "display": "inline-block", "animation": "stepNum 0.5s cubic-bezier(0.2,1.4,0.4,1) 0.40s both" }}>۲</p>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>لینک رو بفرست — در تلگرام یا واتساپ</p>
        </div>
        <div style={{ "background": "rgba(16,4,4,0.72)", "border": "1px solid rgba(232,193,105,0.32)", "borderRadius": "14px", "padding": "24px", "opacity": "0", "animation": "stepRise 0.75s cubic-bezier(0.2,0.75,0.25,1) 0.24s both, stepGlow 4.5s ease-in-out 2.20s infinite", "transition": "transform 0.35s cubic-bezier(0.2,0.75,0.25,1),border-color 0.35s,background 0.35s" }} className="hv2">
          <p style={{ "fontSize": "15px", "fontWeight": "800", "color": "#d8ae44", "margin": "0 0 10px", "display": "inline-block", "animation": "stepNum 0.5s cubic-bezier(0.2,1.4,0.4,1) 0.48s both" }}>۳</p>
          <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>بازی کن — به محض چهار نفر شدن، میز شروع میشه</p>
        </div>
      </div>
      <div style={{ "marginTop": "24px", "display": "flex", "gap": "14px", "alignItems": "center", "flexWrap": "wrap" }}>
        <span style={{ "fontSize": "16px", "color": "#cdb797" }}>سه نفر دم دست نیست؟</span>
        <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "16px", "padding": "14px 26px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>شروع فوری با حریف هوشمند</a>
      </div>
      </div>
    </section>
    </div>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(44px,6vw,72px) clamp(16px,4vw,24px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>پیش‌نمایش</h2>
      <div style={{ "aspectRatio": "16/8", "borderRadius": "16px", "border": "1px solid rgba(232,193,105,0.28)", "background": "#1c0605", "overflow": "hidden" }}>
        <video src="/assets/preview-video.mp4" autoPlay loop muted playsInline style={{ "width": "100%", "height": "100%", "objectFit": "cover", "display": "block" }}></video>
      </div>
      <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "18px 0 0" }}>همون میز همیشگی، با تمام حال و هوایش.</p>
    </section>

    <div style={{ "background": "linear-gradient(180deg,rgba(255,238,214,0.062) 0%,rgba(255,238,214,0.028) 100%)", "borderTop": "1px solid rgba(232,193,105,0.2)", "borderBottom": "1px solid rgba(232,193,105,0.2)" }}>
    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(44px,6vw,72px) clamp(16px,4vw,24px) clamp(28px,4vw,40px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 16px" }}>روی گوشی و کامپیوتر</h2>
      <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 18px", "maxWidth": "620px" }}>در مرورگر بازی کن، یا برنامه رو بگیر و همیشه دم دستت داشته باش. اندروید، ویندوز، مک و لینوکس.</p>
      <a href="#" onClick={go.download} style={{ "fontSize": "16px", "fontWeight": "700" }}>دریافت برنامه ←</a>
    </section>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px) clamp(36px,5vw,56px)" }}>
      <div style={{ "backgroundImage": "linear-gradient(270deg,rgba(30,12,10,0.86) 0%,rgba(30,12,10,0.7) 50%,rgba(30,12,10,0.35) 100%),url('/assets/birad-banner.webp')", "backgroundSize": "cover", "backgroundPosition": "left center", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "clamp(24px,4vw,38px) clamp(20px,3.5vw,34px)", "minHeight": "190px", "display": "flex", "gap": "22px", "alignItems": "flex-start", "flexWrap": "wrap" }}>
        <span style={{ "fontSize": "30px", "lineHeight": "1" }}>🎴</span>
        <div style={{ "flex": "1", "minWidth": "260px" }}>
          <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>با استودیو بازی‌سازی بیراد آشنا شین</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حاکمم اولین بازی ماست. تیمی پشتش هست که می‌خواد بازی‌های بیشتری برای ایرانی‌ها بسازه.</p>
        </div>
        <span style={{ "border": "1px solid rgba(232,193,105,0.4)", "color": "#c9a469", "fontSize": "13px", "fontWeight": "700", "padding": "7px 16px", "borderRadius": "999px" }}>به‌زودی</span>
      </div>
    </section>
    </div>

    <section style={{ "maxWidth": "1120px", "margin": "0 auto", "padding": "clamp(44px,6vw,72px) clamp(16px,4vw,24px)" }}>
      <h2 style={{ "fontSize": "clamp(23px,4.4vw,32px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 28px" }}>سؤالات متداول</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(320px,100%),1fr))", "gap": "26px" }}>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حاکمم چیه؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>جایی برای بازی آنلاین بازی‌های ورق ایرانی — حکم، شلم و بی‌بی‌سلام — با دوستاتون یا با حریف هوشمند.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>رایگانه؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. بازی کردن رایگانه و رایگان می‌مونه.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>باید ثبت‌نام کنم؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>برای بازی نه. برای گرفتن رتبه، ذخیره‌ی تاریخچه و شرکت در تورنمنت‌ها بله.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>باید نصب کنم؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>نه. مستقیم در مرورگر باز میشه. نسخه‌ی نصبی هم هست.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>می‌تونم فقط با دوستان خودم بازی کنم؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. اتاق خصوصی بسازین و کدش رو فقط برای همونا بفرستین.</p>
        </div>
        <div>
          <h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بازی‌های دیگری هم اضافه میشه؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله، روی بازی‌های ایرانی دیگری کار می‌کنیم.</p>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
