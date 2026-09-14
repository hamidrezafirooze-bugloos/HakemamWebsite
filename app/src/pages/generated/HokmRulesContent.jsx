import { useGo } from '../../nav.jsx';

export default function HokmRulesContent() {
  const go = useGo();
  return (
    <>
      <main style={{ "maxWidth": "840px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "position": "relative", "padding": "clamp(44px,7vw,80px) 0 40px", "overflow": "hidden" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "-46px", "left": "-88px", "width": "320px", "height": "320px", "opacity": "0.35", "backgroundImage": "url('/assets/eslimi-transparent.webp')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "animation": "spinSlow 120s linear infinite", "pointerEvents": "none" }}></div>
      <p style={{ "position": "relative", "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>قوانین حکم</p>
      <h1 style={{ "fontSize": "clamp(27px,5.8vw,46px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.32", "margin": "0 0 26px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>قوانین کامل بازی حکم — از حاکم شدن تا کوت</h1>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>حکم شناخته‌شده‌ترین بازی ورق ایران است. چهار نفر، دو تیم دو نفره‌ی روبه‌رو، یک دست پاسور و یک خالِ برنده که یکی از بازیکن‌ها انتخابش می‌کند. قاعده‌هایش را تقریباً همه بلدند — ولی تقریباً هیچ دو خانواده‌ای دقیقاً یک‌جور بازی نمی‌کنند، و بیشتر بحث‌های سر میز هم دقیقاً از همین‌جا شروع می‌شود.</p>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>این صفحه قوانین پایه را کامل توضیح می‌دهد و بعد سراغ همان تفاوت‌ها می‌رود.</p>
    </section>

    <div style={{ "position": "relative", "overflow": "hidden", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px", "marginBottom": "44px" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div aria-hidden="true" style={{ "position": "absolute", "bottom": "-70px", "right": "-70px", "width": "220px", "height": "220px", "opacity": "0.22", "backgroundImage": "url('/assets/eslimi-transparent.webp')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "animation": "spinSlow 140s linear infinite reverse", "pointerEvents": "none" }}></div>
      <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "10px", "margin": "0 0 20px" }}>
        <span aria-hidden="true" style={{ "width": "14px", "height": "14px", "flex": "0 0 14px", "border": "1px solid rgba(232,193,105,0.6)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "3px", "background": "rgba(232,193,105,0.45)" }}></span></span>
        <h2 style={{ "fontSize": "15px", "fontWeight": "800", "letterSpacing": "0.1em", "color": "#d8ae44", "margin": "0" }}>خلاصه‌ی سریع</h2>
      </div>
      <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "18px 26px", "marginBottom": "24px" }}>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>بازیکن:</span> ۴ نفر، دو تیم دو نفره</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>کارت:</span> ۵۲ برگ، بدون جوکر</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>هدف هر دست:</span> بردن ۷ دست از ۱۳ دست</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>هدف بازی:</span> رسیدن به ۷ امتیاز</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>مدت:</span> حدود ۱۰ تا ۱۵ دقیقه برای هر دست</p>
      </div>
      <button style={{ "position": "relative", "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>همین حالا یک دست بازی کن — بدون نصب</button>
    </div>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چه چیزی لازم داری</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 20px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>یک دست کارت پاسور ۵۲ برگی (جوکرها کنار گذاشته می‌شوند)</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>چهار بازیکن</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>بازیکن‌ها دو به دو تیم می‌شوند و هر تیم روبه‌روی هم می‌نشینند، طوری که یارِ هرکس دقیقاً مقابلش باشد. یعنی نفرات سمت راست و چپ شما همیشه حریف‌اند.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>برای یارکشی معمولاً هر کس یک کارت برمی‌دارد و دو نفری که بالاترین کارت‌ها را دارند یار می‌شوند — ولی در بیشتر جمع‌ها یارها از قبل معلوم‌اند و کسی زحمت این کار را نمی‌کشد.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>انتخاب حاکم</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>حاکم کسی است که خالِ حکم را انتخاب می‌کند و دست اول را شروع می‌کند. برای پیدا کردنش:</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>کارت‌ها را بُر می‌زنند و یکی‌یکی رو می‌کنند و به بازیکن‌ها می‌دهند. هر کس اولین آس را بیاورد، حاکم می‌شود.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>یارِ حاکم همان کسی است که مقابلش نشسته. پخش‌کننده‌ی کارت هم بازیکن سمت حاکم از تیم مقابل است.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>پخش کارت و انتخاب حکم</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 20px" }}>پخش در سه مرحله انجام می‌شود:</p>
      <div style={{ "display": "grid", "gap": "14px", "marginBottom": "20px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>مرحله‌ی اول:</strong> به هر بازیکن ۵ کارت داده می‌شود.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>انتخاب حکم:</strong> حاکم به همان ۵ کارت اولش نگاه می‌کند و فقط بر اساس همان‌ها خالِ حکم را اعلام می‌کند — دل، خشت، گشنیز یا پیک. این تصمیم برگشت‌پذیر نیست.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>مرحله‌ی دوم و سوم:</strong> بعد از اعلام حکم، بقیه‌ی کارت‌ها در دو نوبت چهارتایی پخش می‌شود تا دست هر بازیکن به ۱۳ کارت برسد.</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نکته‌ی مهم:</strong> پخش باید در مرحله‌ی اول متوقف بماند و تا وقتی حاکم حکم را اعلام نکرده، به یارش کارتی داده نمی‌شود.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی کردن یک دست</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>حاکم اولین کارت را روی میز می‌گذارد. بعد به ترتیب، هر بازیکن یک کارت بازی می‌کند. چهار کارت روی میز یک «دست» را می‌سازند.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}><strong style={{ "color": "#f3d391" }}>قاعده‌ی اصلی — خال را دنبال کن:</strong> اگر از خالی که شروع شده کارت داری، موظفی از همان خال بازی کنی.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}><strong style={{ "color": "#f3d391" }}>اگر نداری:</strong> آزادی. می‌توانی حکم بیندازی و دست را ببری، یا هر کارت دیگری بریزی.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 10px" }}><strong style={{ "color": "#f3d391" }}>چه کسی دست را می‌برد:</strong></p>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 16px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر حکمی در دست بازی شده باشد، بالاترین حکم برنده است</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر حکمی بازی نشده باشد، بالاترین کارت از خالِ شروع‌شده برنده است</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>برنده‌ی هر دست، دست بعدی را شروع می‌کند.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>امتیازدهی و کوت</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 24px" }}>هر بازی ۱۳ دست دارد. تیمی که زودتر ۷ دست ببرد، برنده‌ی آن بازی است — و به محض رسیدن به ۷، بازی همان‌جا تمام می‌شود.</p>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "24px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 120px", "background": "rgba(216,174,68,0.1)", "padding": "14px 20px" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>نتیجه</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>امتیاز</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 120px", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>بردن عادی (۷ دست)</span>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>۱ امتیاز</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 120px", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کوت — بردن هر ۷ دست پشت سر هم بدون اینکه حریف حتی یک دست ببرد</span>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>۲ امتیاز</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 120px", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>حاکم‌کوت — وقتی تیم مقابل، تیم حاکم را کوت کند</span>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>۳ امتیاز</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>حاکم‌کوت سنگین‌ترین نتیجه‌ی بازی است، چون تیم حاکم با مزیت شروع کرده و انتخاب خال هم دستش بوده — و با این حال یک دست هم نبرده.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>تیمی که زودتر به ۷ امتیاز برسد، برنده‌ی کل بازی است.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>حاکم بعدی کیست</h3>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 16px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر تیم حاکم آن دست را برده باشد، حاکم حاکم می‌ماند و همان نفر دوباره پخش می‌کند.</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر تیم مقابل برده باشد، حاکمی به تیم مقابل منتقل می‌شود.</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>یعنی حاکم بودن یک امتیاز است که با بردن حفظ می‌شود.</p>
      <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>بازی کن و ببین چقدر خوب بلدی</button>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>حالت‌های بدون حکم: سرس، نرس و آس نرس</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>گاهی پنج کارت اول حاکم آن‌قدر بد است که هیچ خالی ارزش حکم شدن ندارد — نه کارت بالایی هست، نه یک خال به‌اندازه‌ی کافی بلند. در بسیاری از جمع‌ها، حاکم در این حالت می‌تواند به‌جای انتخاب خال، یکی از سه حالت بدون حکم را اعلام کند.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px" }}>در هر سه حالت، هیچ خالی حکم نیست و برش وجود ندارد. یعنی اگر از خالِ شروع‌شده کارت نداشته باشی، هر چه بریزی آن دست را نمی‌بری — فقط از دستت خارج می‌شود. تنها چیزی که میان این سه فرق می‌کند، ترتیب قدرت کارت‌هاست.</p>

      <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "32px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "14px 20px", "background": "rgba(232,193,105,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>حالت</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>ترتیب قدرت کارت‌ها</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>قوی‌ترین</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>ضعیف‌ترین</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>سرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>مثل بازی عادی</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>آس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>۲</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>نرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>کاملاً برعکس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>۲</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>آس</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>آس نرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>برعکس، ولی آس بالای همه</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>آس، بعد ۲</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8" }}>شاه</span>
        </div>
      </div>

      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "0 0 14px" }}>
        <span aria-hidden="true" style={{ "flex": "0 0 30px", "width": "30px", "height": "30px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
        <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>سرس</h3>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>قدرت کارت‌ها همان چیزی است که همیشه می‌شناسی — آس بالاترین، بعد شاه و بی‌بی و سرباز، تا برسد به ۲. تنها تفاوتش با بازی معمولی این است که هیچ خالی حکم نیست، پس نمی‌شود دستی را برید.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>حاکم معمولاً وقتی سرس اعلام می‌کند که کارت‌های بالا دارد ولی در چند خال پخش شده‌اند و هیچ خالِ بلندی ندارد که ارزش حکم کردن داشته باشد.</p>

      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "0 0 14px" }}>
        <span aria-hidden="true" style={{ "flex": "0 0 30px", "width": "30px", "height": "30px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
        <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>نرس</h3>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>همه‌چیز وارونه می‌شود. ۲ قوی‌ترین کارت است و آس ضعیف‌ترین. ترتیب کامل از بالا به پایین:</p>
      <p style={{ "fontSize": "18px", "color": "#f3d391", "lineHeight": "2", "letterSpacing": "0.04em", "background": "rgba(232,193,105,0.08)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "16px 20px", "margin": "0 0 18px" }}>۲ · ۳ · ۴ · ۵ · ۶ · ۷ · ۸ · ۹ · ۱۰ · سرباز · بی‌بی · شاه · آس</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>این همان حالتی است که دست‌های به‌ظاهر بی‌ارزش را به دست برنده تبدیل می‌کند. حاکمی که دستش پر از کارت‌های پایین است، نرس اعلام می‌کند و همان کارت‌ها ناگهان قوی‌ترین‌های میز می‌شوند.</p>

      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "0 0 14px" }}>
        <span aria-hidden="true" style={{ "flex": "0 0 30px", "width": "30px", "height": "30px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
        <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>آس نرس</h3>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>مثل نرس است، با یک استثنا: آس دوباره به بالای جدول برمی‌گردد. ترتیب کامل:</p>
      <p style={{ "fontSize": "18px", "color": "#f3d391", "lineHeight": "2", "letterSpacing": "0.04em", "background": "rgba(232,193,105,0.08)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "16px 20px", "margin": "0 0 18px" }}>آس · ۲ · ۳ · ۴ · ۵ · ۶ · ۷ · ۸ · ۹ · ۱۰ · سرباز · بی‌بی · شاه</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 32px" }}>این حالت برای دستی است که هم کارت‌های پایین دارد و هم چند آس — در نرس ساده، آن آس‌ها ضعیف‌ترین کارت‌های دست بودند و هدر می‌رفتند؛ در آس نرس هر کدامشان یک دست تضمینی است.</p>

      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 16px" }}>چند نکته‌ی مهم</h3>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>زمان اعلام</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حاکم باید حالت را پیش از بازی کردن اولین کارت اعلام کند. بعد از شروع، قابل تغییر نیست — مثل خودِ حکم.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>دنبال کردن خال</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>قاعده عوض نمی‌شود: اگر از خالِ شروع‌شده کارت داری، موظفی از همان بازی کنی.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>امتیازدهی</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>در رایج‌ترین شکل، امتیازها همان امتیازهای حکم عادی است — ۷ دست برای برد، کوت و حاکم‌کوت سر جای خودشان. ولی بعضی جمع‌ها برای این حالت‌ها امتیاز متفاوتی قائل‌اند.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>چرا نام‌ها گیج‌کننده‌اند</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>«سرس» و «نرس» در بسیاری از جمع‌ها با هم اشتباه گرفته می‌شوند و در بعضی شهرها معنایشان دقیقاً برعکس چیزی است که اینجا نوشته شده. آنچه بالا آمده رایج‌ترین تعریف است — ولی سر میز، قبل از شروع یک بار سرِ تعریف‌ها توافق کنید.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واریانت‌های منطقه‌ای و خانگی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 24px" }}>اینجا همان جایی است که بحث‌ها شروع می‌شود. قوانین بالا رایج‌ترین شکل بازی‌اند، ولی هر شهر و هر خانواده نسخه‌ی خودش را دارد.</p>
      <div style={{ "display": "grid", "gap": "14px", "marginBottom": "26px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>امتیاز لازم برای برد کل بازی</strong> — بیشتر جمع‌ها تا ۷ امتیاز بازی می‌کنند، بعضی تا ۱۱ و بعضی تا ۵.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>ارزش کوت</strong> — جایی ۲ امتیاز، جایی همان ۱ امتیاز با یک اسم بزرگ‌تر. حاکم‌کوت هم در بعضی جمع‌ها ۳ و در بعضی ۲ حساب می‌شود.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>شکل پخش کارت</strong> — ۵ تا، بعد دو نوبت ۴ تایی، شکل رایج است. بعضی‌ها بعد از ۵ کارت اول، بقیه را یک‌جا هشت‌تایی می‌دهند.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>تعداد کارت‌های حاکم برای انتخاب حکم</strong> — استاندارد ۵ کارت است، ولی جاهایی حاکم فقط با ۳ کارت اول تصمیم می‌گیرد.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نحوه‌ی مشخص شدن حاکم اول</strong> — رایج‌ترینش رو کردن کارت تا آمدن اولین آس است. بعضی جمع‌ها به‌جایش کارت می‌کشند.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>بازی بدون حکم</strong> — در بعضی حلقه‌ها حاکم می‌تواند اعلام کند که این دست حکمی ندارد.</p>
        </div>
      </div>
      <div style={{ "position": "relative", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "14px", "padding": "24px", "display": "flex", "gap": "18px", "alignItems": "center", "flexWrap": "wrap" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "top": "10px", "right": "10px", "width": "20px", "height": "20px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "bottom": "10px", "left": "10px", "width": "20px", "height": "20px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
        <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0", "flex": "1", "minWidth": "240px" }}><strong style={{ "color": "#f3d391" }}>حکمِ شما کدام است؟</strong> اگر در شهر یا خانواده‌ی شما قاعده‌ای هست که اینجا نیامده، برایمان بفرستید.</p>
        <button style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "13px 24px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>قاعده‌ی ما را اضافه کن</button>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واژه‌نامه</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <dl style={{ "margin": "0", "display": "grid", "gap": "16px" }}>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>حاکم</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>بازیکنی که خال حکم را انتخاب می‌کند و بازی را شروع می‌کند.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>حکم</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>خالِ برنده. هر کارت از این خال، از هر کارت خال دیگری بالاتر است.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>دست</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>یک دور کامل که در آن هر چهار بازیکن یک کارت بازی می‌کنند.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>کوت</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>بردن هفت دست پشت سر هم بدون اینکه حریف حتی یک دست بگیرد.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>حاکم‌کوت</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>کوت کردنِ تیمی که حاکم در آن است.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>یار</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>بازیکن روبه‌رویی شما؛ هم‌تیمی.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>بُر زدن</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>مخلوط کردن کارت‌ها قبل از پخش.</dd></div>
      </dl>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>اشتباه‌های رایج تازه‌کارها</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "18px" }}>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حکم را زود خرج کردن.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>کارت‌های حکم ابزار بردن دست‌های مهم‌اند. اگر همه را در دست‌های اول بسوزانی، اواخر بازی بی‌دفاع می‌مانی.</p></div>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>فراموش کردن اینکه چه کارت‌هایی رفته.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بازیکن خوب حکم، کارت می‌شمارد.</p></div>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بازی کردن علیه یار.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>اگر یارت دست را برده، لازم نیست کارت خوبت را خرج کنی.</p></div>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>انتخاب عجولانه‌ی حکم.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>خالی را انتخاب کن که هم تعدادش بیشتر است هم کارت‌های بالاتری داری — نه صرفاً خالی که آسش دستت است.</p></div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>سؤالات متداول</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "22px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حکم چند نفره بازی می‌شود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>شکل استاندارد چهار نفره است، در دو تیم دو نفره‌ی روبه‌رو.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>کوت یعنی چه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>یعنی یک تیم هر هفت دست لازم برای برد را پشت سر هم ببرد، بدون اینکه حریف حتی یک دست بگیرد. کوت ۲ امتیاز دارد.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حاکم‌کوت چه فرقی با کوت دارد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حاکم‌کوت وقتی است که تیم مقابل، تیمِ حاکم را کوت کند. این نتیجه ۳ امتیاز دارد.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>آیا حکم بعد از هر دست عوض می‌شود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>نه. اگر تیم حاکم آن دست را ببرد، حاکم حاکم می‌ماند.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگر از خال شروع‌شده کارت نداشته باشم چه کنم؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>هر کارتی می‌توانی بازی کنی — از جمله حکم.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>می‌شود حکم را آنلاین بازی کرد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. در حاکمم بدون نصب و بدون ثبت‌نام می‌توانی بازی کنی.</p></div>
      </div>
    </section>

    <section style={{ "padding": "0 0 56px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 18px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی‌های دیگر</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "10px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>شلم</strong> — بازی چهارنفره با اعلام امتیاز</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>بی‌بی‌سلام</strong> — سبک‌تر و مناسب دورهمی خانوادگی</p>
        </div>
      </div>
    </section>
  </main>
    </>
  );
}
