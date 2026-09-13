import { useGo } from '../../nav.jsx';


export default function AboutContent() {
  const go = useGo();
  return (
    <>
      <main style={{ "maxWidth": "880px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 0ms both", "position": "relative", "padding": "clamp(44px,7vw,80px) 0 44px", "overflow": "hidden" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "-41px", "left": "-83px", "width": "340px", "height": "340px", "opacity": "0.4", "backgroundImage": "url('/assets/eslimi-transparent.webp')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "animation": "spinSlow 120s linear infinite", "pointerEvents": "none" }}></div>
      <p style={{ "position": "relative", "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>درباره‌ی حاکمم</p>
      <h1 style={{ "position": "relative", "fontSize": "clamp(28px,6.2vw,48px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.3", "margin": "0 0 26px", "letterSpacing": "-0.015em" }}>یک میز برای بازی‌های ورق ایرانی</h1>
      
      <p style={{ "position": "relative", "fontSize": "19px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "maxWidth": "618px" }}>حاکمم جایی است که بازی‌های ورقی که با آن‌ها بزرگ شده‌ایم، آنلاین بازی می‌شوند — با همان حال‌وهوا، ولی این‌بار بدون اینکه لازم باشد همه یک‌جا جمع باشند.</p>
      <p style={{ "position": "relative", "fontSize": "clamp(16px,2.2vw,19px)", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اتاق بساز و لینکش را برای سه نفر بفرست، یا با حریفی بازی کن که کارت می‌شمارد. بدون نصب، بدون ثبت‌نام.</p>
    </section>

    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 90ms both", "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}>
        <span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span>
        <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی‌ها</h2>
        <span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span>
      </div>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(240px,100%),1fr))", "gap": "16px", "marginBottom": "18px" }}>
        <div style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 260ms both", "position": "relative", "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "4px", "padding": "26px 28px" }}>
          <span aria-hidden="true" style={{ "position": "absolute", "top": "10px", "right": "10px", "width": "18px", "height": "18px", "borderTop": "1px solid rgba(232,193,105,0.55)", "borderRight": "1px solid rgba(232,193,105,0.55)" }}></span>
          <span aria-hidden="true" style={{ "position": "absolute", "bottom": "10px", "left": "10px", "width": "18px", "height": "18px", "borderBottom": "1px solid rgba(232,193,105,0.55)", "borderLeft": "1px solid rgba(232,193,105,0.55)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}><strong style={{ "display": "block", "fontSize": "clamp(17px,2.4vw,20px)", "color": "#f3d391", "margin": "0 0 8px" }}>حکم</strong>بازی اصلی. چهارنفره، دو تیم، و همان خالِ برنده‌ای که سرش بحث می‌شود.</p>
        </div>
        <div style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 370ms both", "position": "relative", "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "4px", "padding": "26px 28px" }}>
          <span aria-hidden="true" style={{ "position": "absolute", "top": "10px", "right": "10px", "width": "18px", "height": "18px", "borderTop": "1px solid rgba(232,193,105,0.55)", "borderRight": "1px solid rgba(232,193,105,0.55)" }}></span>
          <span aria-hidden="true" style={{ "position": "absolute", "bottom": "10px", "left": "10px", "width": "18px", "height": "18px", "borderBottom": "1px solid rgba(232,193,105,0.55)", "borderLeft": "1px solid rgba(232,193,105,0.55)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}><strong style={{ "display": "block", "fontSize": "clamp(17px,2.4vw,20px)", "color": "#f3d391", "margin": "0 0 8px" }}>شلم</strong>سنگین‌تر و رقابتی‌تر، با اعلام امتیاز.</p>
        </div>
        <div style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 480ms both", "position": "relative", "background": "rgba(255,255,255,0.03)", "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "4px", "padding": "26px 28px" }}>
          <span aria-hidden="true" style={{ "position": "absolute", "top": "10px", "right": "10px", "width": "18px", "height": "18px", "borderTop": "1px solid rgba(232,193,105,0.55)", "borderRight": "1px solid rgba(232,193,105,0.55)" }}></span>
          <span aria-hidden="true" style={{ "position": "absolute", "bottom": "10px", "left": "10px", "width": "18px", "height": "18px", "borderBottom": "1px solid rgba(232,193,105,0.55)", "borderLeft": "1px solid rgba(232,193,105,0.55)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}><strong style={{ "display": "block", "fontSize": "clamp(17px,2.4vw,20px)", "color": "#f3d391", "margin": "0 0 8px" }}>بی‌بی‌سلام</strong>سبک‌تر، برای دورهمی‌های خانوادگی.</p>
        </div>
      </div>
      <p style={{ "fontSize": "15px", "color": "#b0907a", "margin": "0" }}>بازی‌های بیشتری در راه است.</p>
    </section>

    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 180ms both", "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}>
        <span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span>
        <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چه چیزی اینجا فرق دارد</h2>
        <span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span>
      </div>
      <div style={{ "display": "grid", "gap": "26px" }}>
        <div style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 260ms both", "display": "flex", "gap": "18px", "alignItems": "flex-start" }}><span aria-hidden="true" style={{ "flex": "0 0 40px", "width": "40px", "height": "40px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.45)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#e8c169", "fontSize": "17px", "fontWeight": "800" }}>۱</span><div><h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 10px" }}>رتبه‌ای که واقعاً معنا دارد</h3><p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>همه ادعا می‌کنند حکم‌باز خوبی هستند. اینجا معلوم می‌شود. بعد از هر بازی کیفیت تصمیم‌هایت سنجیده می‌شود — نه فقط برد و باخت، چون در حکم شانس هم نقش دارد.</p></div></div>
        <div style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 380ms both", "display": "flex", "gap": "18px", "alignItems": "flex-start" }}><span aria-hidden="true" style={{ "flex": "0 0 40px", "width": "40px", "height": "40px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.45)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#e8c169", "fontSize": "17px", "fontWeight": "800" }}>۲</span><div><h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 10px" }}>بدون مانع</h3><p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>در مرورگر باز می‌شود و بازی شروع می‌شود. کد اتاق را بفرست، رفقایت بی هیچ دردسری می‌آیند تو.</p></div></div>
        <div style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 500ms both", "display": "flex", "gap": "18px", "alignItems": "flex-start" }}><span aria-hidden="true" style={{ "flex": "0 0 40px", "width": "40px", "height": "40px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.45)", "display": "flex", "alignItems": "center", "justifyContent": "center", "color": "#e8c169", "fontSize": "17px", "fontWeight": "800" }}>۳</span><div><h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 10px" }}>چیزی بیشتر از یک میز</h3><p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بازی پر از چیزهایی است که می‌شود کشف و جمعشان کرد — کارت‌هایی با چهره‌های آشنای این سرزمین، و آنچه دور میز حال می‌دهد. نه به‌عنوان درس، به‌عنوان چیزی که پیدا می‌کنی.</p></div></div>
      </div>
    </section>

    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 270ms both", "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}>
        <span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span>
        <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چرا ساختیمش</h2>
        <span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span>
      </div>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 22px" }}>بازی‌های ورق ایرانی دهه‌هاست هر شب روی میزهای این کشور بازی می‌شوند. ولی نسخه‌ی دیجیتالشان معمولاً طوری ساخته شده که انگار کسی واقعاً به بازی و به آدم‌هایی که بازی‌اش می‌کنند اهمیت نداده.</p>
      <div style={{ "position": "relative", "display": "flex", "justifyContent": "center", "padding": "30px 24px", "margin": "0 0 22px", "borderTop": "1px solid rgba(232,193,105,0.22)", "borderBottom": "1px solid rgba(232,193,105,0.22)", "overflow": "hidden" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "top": "-40px", "right": "-30px", "width": "220px", "height": "220px", "opacity": "0.45", "backgroundImage": "url('/assets/eslimi-transparent.webp')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "animation": "spinSlow 120s linear infinite", "pointerEvents": "none" }}></div>
        <p style={{ "position": "relative", "fontSize": "clamp(20px,3.4vw,26px)", "fontWeight": "700", "color": "#f3d391", "lineHeight": "1.7", "margin": "0", "textAlign": "center" }}>به نظرمان حیف بود.</p>
      </div>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>چیزی که می‌خواهیم ساده است: جایی که ایرانی‌ها کنار هم بنشینند و خوش بگذرد. اول از همه این باید یک بازی خوب باشد — اگر سرگرم‌کننده نباشد، هیچ حرف دیگری شنیده نمی‌شود.</p>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>ولی وقتی داشتیم می‌ساختیمش، دیدیم می‌شود یک کار دیگر هم کرد.</p>
    </section>

    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 360ms both", "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}>
        <span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span>
        <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>میزی که یک موزه هم هست</h2>
        <span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span>
      </div>
      <div style={{ "display": "flex", "gap": "28px", "alignItems": "flex-start", "flexWrap": "wrap" }}>
        <div style={{ "flex": "0 1 240px", "minWidth": "200px", "position": "relative", "padding": "10px", "border": "1px solid rgba(232,193,105,0.3)", "borderRadius": "4px" }}>
          <div style={{ "position": "absolute", "inset": "4px", "border": "1px solid rgba(232,193,105,0.16)", "borderRadius": "3px", "pointerEvents": "none" }}></div>
          <img src="/assets/home-carpet-bg.webp" alt="قالی دست‌باف ایرانی" style={{ "width": "100%", "height": "auto", "display": "block", "borderRadius": "2px" }} />
        </div>
        <div style={{ "flex": "1 1 340px", "minWidth": "280px" }}>
          <p style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "700", "color": "#f3d391", "lineHeight": "1.8", "margin": "0 0 18px" }}>هر چیزی که در بازی به دست می‌آوری، یک چیز واقعی است.</p>
          <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>فرشی که در تبریز بافته شده و نقشه‌اش برای دربار سفارش داده شده بود. سماوری که یک نسل کنارش چای خورد. کارتی که چهره‌اش از شاهنامه آمده. برنامه‌ای که بچه‌های یک دهه پایش می‌نشستند.</p>
          <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>کنار هرکدام، داستانش هست — از کجا آمده، چه کسی ساختش، چرا مانده. با تصویر و ویدیو و متن.</p>
          <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>اینها را به‌عنوان درس نگذاشته‌ایم. آنها را می‌بری، جمع می‌کنی، در اتاقت می‌چینی، و اگر کنجکاو شدی داستانش همان‌جاست.</p>
          <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0", "textWrap": "pretty" }}>هدفمان این است که وقتی کسی بازی‌اش تمام می‌شود، یک چیز کوچک هم از این سرزمین با خودش برده باشد — بدون اینکه کسی چیزی به او درس داده باشد.</p>
        </div>
      </div>
    </section>

    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 450ms both", "padding": "0 0 44px" }}>
      <div style={{ "position": "relative", "backgroundImage": "linear-gradient(270deg,rgba(26,10,8,0.96) 0%,rgba(26,10,8,0.94) 58%,rgba(26,10,8,0.5) 100%),url('/assets/birad-banner.webp')", "backgroundSize": "cover", "backgroundPosition": "left bottom", "border": "1px solid rgba(232,193,105,0.3)", "borderRadius": "4px", "padding": "clamp(24px,4vw,38px) clamp(20px,3.5vw,34px)", "minHeight": "190px", "display": "flex", "gap": "22px", "alignItems": "flex-start", "flexWrap": "wrap" }}>
        <span aria-hidden="true" style={{ "position": "absolute", "top": "10px", "right": "10px", "width": "18px", "height": "18px", "borderTop": "1px solid rgba(232,193,105,0.55)", "borderRight": "1px solid rgba(232,193,105,0.55)" }}></span>
          <span aria-hidden="true" style={{ "position": "absolute", "bottom": "10px", "left": "10px", "width": "18px", "height": "18px", "borderBottom": "1px solid rgba(232,193,105,0.55)", "borderLeft": "1px solid rgba(232,193,105,0.55)" }}></span>
        <span aria-hidden="true" style={{ "flex": "0 0 30px", "width": "30px", "height": "30px", "border": "1px solid rgba(232,193,105,0.6)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "6px", "background": "rgba(232,193,105,0.4)" }}></span></span>
        <div style={{ "flex": "1", "minWidth": "260px" }}>
          <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 10px" }}>با استودیو بازی‌سازی بیراد آشنا شوید</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حاکمم اولین بازی ماست. تیمی پشتش هست که می‌خواهد بازی‌های بیشتری برای ایرانی‌ها بسازد.</p>
        </div>
        <span style={{ "border": "1px solid rgba(232,193,105,0.4)", "color": "#c9a469", "fontSize": "13px", "fontWeight": "700", "padding": "7px 16px", "borderRadius": "999px" }}>به‌زودی</span>
      </div>
    </section>

    <section style={{ "animation": "stepRise 0.7s cubic-bezier(0.22,1,0.36,1) 540ms both", "padding": "44px 0 56px", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}>
        <span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span>
        <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>سؤالات متداول</h2>
        <span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span>
      </div>
      <div style={{ "display": "grid", "gap": "0" }}>
        <div style={{ "padding": "0 0 20px" }}><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حاکمم رایگان است؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بازی کردن رایگان است و رایگان می‌ماند.</p></div>
        <div style={{ "padding": "20px 0", "borderTop": "1px solid rgba(232,193,105,0.11)" }}><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>باید ثبت‌نام کنم؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>برای بازی نه. برای گرفتن رتبه، ذخیره‌ی تاریخچه و شرکت در تورنمنت‌ها بله.</p></div>
        <div style={{ "padding": "20px 0", "borderTop": "1px solid rgba(232,193,105,0.11)" }}><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>روی گوشی هم هست؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله، هم در مرورگر و هم به‌صورت برنامه. <a href="#" onClick={go.download}>دریافت برنامه</a></p></div>
        <div style={{ "padding": "20px 0 0", "borderTop": "1px solid rgba(232,193,105,0.11)" }}><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>چطور با شما تماس بگیرم؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>از <a href="#" onClick={go.contact}>صفحه‌ی تماس با ما</a>.</p></div>
      </div>
    </section>
  </main>
    </>
  );
}
