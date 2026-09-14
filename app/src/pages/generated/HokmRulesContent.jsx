import { useState } from 'react';
import { useGo } from '../../nav.jsx';
import RuleSuggestionModal from '../../components/RuleSuggestionModal.jsx';

export default function HokmRulesContent() {
  const go = useGo();
  const [ruleFormOpen, setRuleFormOpen] = useState(false);
  return (
    <>
      <RuleSuggestionModal open={ruleFormOpen} onClose={() => setRuleFormOpen(false)} title="پیشنهاد قانون حکم" />
      <main style={{ "maxWidth": "840px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "position": "relative", "padding": "clamp(44px,7vw,80px) 0 40px", "overflow": "hidden" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "-46px", "left": "-88px", "width": "320px", "height": "320px", "opacity": "0.35", "backgroundImage": "url('/assets/hokm-tile-rosette.webp')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "animation": "spinSlow 120s linear infinite", "pointerEvents": "none" }}></div>
      <p style={{ "position": "relative", "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>قوانین حکم</p>
      <h1 style={{ "fontSize": "clamp(27px,5.8vw,46px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.32", "margin": "0 0 26px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>قوانین کامل بازی حکم — از حاکم شدن تا کوت</h1>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>حکم شناخته‌شده‌ترین بازی ورق ایرانه. چهار نفر، دو تیم دو نفره‌ی روبه‌رو، یک دست پاسور و یک خالِ برنده که یکی از بازیکن‌ها انتخابش می‌کنه. قاعده‌هاش رو تقریباً همه بلدن — ولی تقریباً هیچ دو خانواده‌ای دقیقاً یک‌جور بازی نمی‌کنن، و بیشتر بحث‌های سر میز هم دقیقاً از همین‌جا شروع میشه.</p>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>این صفحه قوانین پایه رو کامل توضیح میده و بعد سراغ همون تفاوت‌ها میره.</p>
    </section>

    <div style={{ "position": "relative", "overflow": "hidden", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px", "marginBottom": "44px" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div aria-hidden="true" style={{ "position": "absolute", "bottom": "-70px", "right": "-70px", "width": "220px", "height": "220px", "opacity": "0.22", "backgroundImage": "url('/assets/hokm-tile-rosette.webp')", "backgroundSize": "contain", "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "animation": "spinSlow 140s linear infinite reverse", "pointerEvents": "none" }}></div>
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
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "position": "relative", "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>همین حالا یک دست بازی کن — بدون نصب</a>
    </div>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چه چیزی لازم داری</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 20px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>یک دست کارت پاسور ۵۲ برگی (جوکرها کنار گذاشته میشن)</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>چهار بازیکن</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>بازیکن‌ها دو به دو تیم میشن و هر تیم روبه‌روی هم میشینن، طوری که یارِ هرکس دقیقاً مقابلش باشه. یعنی نفرات سمت راست و چپ شما همیشه حریفن.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>برای یارکشی معمولاً هر کس یک کارت برمی‌داره و دو نفری که بالاترین کارت‌ها رو دارن یار میشن — ولی در بیشتر جمع‌ها یارها از قبل معلومن و کسی زحمت این کار رو نمی‌کشه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>انتخاب حاکم</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>حاکم کسیه که خالِ حکم رو انتخاب می‌کنه و دست اول رو شروع می‌کنه. برای پیدا کردنش:</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>کارت‌ها رو بُر می‌زنن و یکی‌یکی رو می‌کنن و به بازیکن‌ها میدن. هر کس اولین آس رو بیاره، حاکم میشه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>یارِ حاکم همون کسیه که مقابلش نشسته. پخش‌کننده‌ی کارت هم بازیکن سمت حاکم از تیم مقابله.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>پخش کارت و انتخاب حکم</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 20px" }}>پخش در سه مرحله انجام میشه:</p>
      <div style={{ "display": "grid", "gap": "14px", "marginBottom": "20px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>مرحله‌ی اول:</strong> به هر بازیکن ۵ کارت داده میشه.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>انتخاب حکم:</strong> حاکم به همون ۵ کارت اولش نگاه می‌کنه و فقط بر اساس همون‌ها خالِ حکم رو اعلام می‌کنه — دل، خشت، گشنیز یا پیک. این تصمیم برگشت‌پذیر نیست.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>مرحله‌ی دوم و سوم:</strong> بعد از اعلام حکم، بقیه‌ی کارت‌ها در دو نوبت چهارتایی پخش میشه تا دست هر بازیکن به ۱۳ کارت برسه.</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نکته‌ی مهم:</strong> پخش باید در مرحله‌ی اول متوقف بمونه و تا وقتی حاکم حکم رو اعلام نکرده، به یارش کارتی داده نمیشه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی کردن یک دست</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>حاکم اولین کارت رو روی میز می‌ذاره. بعد به ترتیب، هر بازیکن یک کارت بازی می‌کنه. چهار کارت روی میز یک «دست» رو می‌سازن.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}><strong style={{ "color": "#f3d391" }}>قاعده‌ی اصلی — خال رو دنبال کن:</strong> اگر از خالی که شروع شده کارت داری، موظفی از همون خال بازی کنی.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}><strong style={{ "color": "#f3d391" }}>اگر نداری:</strong> آزادی. می‌تونی حکم بیندازی و دست رو ببری، یا هر کارت دیگری بریزی.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 10px" }}><strong style={{ "color": "#f3d391" }}>چه کسی دست رو می‌بره:</strong></p>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 16px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر حکمی در دست بازی شده باشه، بالاترین حکم برنده‌ست</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر حکمی بازی نشده باشه، بالاترین کارت از خالِ شروع‌شده برنده‌ست</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>برنده‌ی هر دست، دست بعدی رو شروع می‌کنه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>امتیازدهی و کوت</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 24px" }}>هر بازی ۱۳ دست داره. تیمی که زودتر ۷ دست ببره، برنده‌ی اون بازیه — و به محض رسیدن به ۷، بازی همونجا تموم میشه.</p>
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
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کوت — بردن هر ۷ دست پشت سر هم بدون اینکه حریف حتی یک دست ببره</span>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>۲ امتیاز</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 120px", "padding": "16px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>حاکم‌کوت — وقتی تیم مقابل، تیم حاکم رو کوت کنه</span>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700" }}>۳ امتیاز</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>حاکم‌کوت سنگین‌ترین نتیجه‌ی بازیه، چون تیم حاکم با مزیت شروع کرده و انتخاب خال هم دستش بوده — و با این حال یک دست هم نبرده.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>تیمی که زودتر به ۷ امتیاز برسه، برنده‌ی کل بازیه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>حاکم بعدی کیه</h3>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 16px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر تیم حاکم اون دست رو برده باشه، حاکم حاکم می‌مونه و همون نفر دوباره پخش می‌کنه.</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اگر تیم مقابل برده باشه، حاکمی به تیم مقابل منتقل میشه.</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>یعنی حاکم بودن یک امتیازه که با بردن حفظ میشه.</p>
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>بازی کن و ببین چقدر خوب بلدی</a>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>حالت‌های بدون حکم: سرس، نرس و آس نرس</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>گاهی پنج کارت اول حاکم اونقدر بده که هیچ خالی ارزش حکم شدن نداره — نه کارت بالایی هست، نه یک خال به‌اندازه‌ی کافی بلند. در بسیاری از جمع‌ها، حاکم در این حالت می‌تونه به‌جای انتخاب خال، یکی از سه حالت بدون حکم رو اعلام کنه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px" }}>در هر سه حالت، هیچ خالی حکم نیست و برش وجود نداره. یعنی اگر از خالِ شروع‌شده کارت نداشته باشی، هر چه بریزی اون دست رو نمی‌بری — فقط از دستت خارج میشه. تنها چیزی که میان این سه فرق می‌کنه، ترتیب قدرت کارت‌هاست.</p>

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
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px" }}>قدرت کارت‌ها همون چیزیه که همیشه می‌شناسی — آس بالاترین، بعد شاه و بی‌بی و سرباز، تا برسه به ۲. تنها تفاوتش با بازی معمولی اینه که هیچ خالی حکم نیست، پس نمیشه دستی رو برید.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>حاکم معمولاً وقتی سرس اعلام می‌کنه که کارت‌های بالا داره ولی در چند خال پخش شدن و هیچ خالِ بلندی نداره که ارزش حکم کردن داشته باشه.</p>

      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "0 0 14px" }}>
        <span aria-hidden="true" style={{ "flex": "0 0 30px", "width": "30px", "height": "30px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
        <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>نرس</h3>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>همه‌چیز وارونه میشه. ۲ قوی‌ترین کارته و آس ضعیف‌ترین. ترتیب کامل از بالا به پایین:</p>
      <p style={{ "fontSize": "18px", "color": "#f3d391", "lineHeight": "2", "letterSpacing": "0.04em", "background": "rgba(232,193,105,0.08)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "16px 20px", "margin": "0 0 18px" }}>۲ · ۳ · ۴ · ۵ · ۶ · ۷ · ۸ · ۹ · ۱۰ · سرباز · بی‌بی · شاه · آس</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 28px" }}>این همون حالتیه که دست‌های به‌ظاهر بی‌ارزش رو به دست برنده تبدیل می‌کنه. حاکمی که دستش پر از کارت‌های پایینه، نرس اعلام می‌کنه و همون کارت‌ها ناگهان قوی‌ترین‌های میز میشن.</p>

      <div style={{ "display": "flex", "alignItems": "center", "gap": "12px", "margin": "0 0 14px" }}>
        <span aria-hidden="true" style={{ "flex": "0 0 30px", "width": "30px", "height": "30px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "14px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
        <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>آس نرس</h3>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px" }}>مثل نرسه، با یک استثنا: آس دوباره به بالای جدول برمی‌گرده. ترتیب کامل:</p>
      <p style={{ "fontSize": "18px", "color": "#f3d391", "lineHeight": "2", "letterSpacing": "0.04em", "background": "rgba(232,193,105,0.08)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "16px 20px", "margin": "0 0 18px" }}>آس · ۲ · ۳ · ۴ · ۵ · ۶ · ۷ · ۸ · ۹ · ۱۰ · سرباز · بی‌بی · شاه</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 32px" }}>این حالت برای دستیه که هم کارت‌های پایین داره و هم چند آس — در نرس ساده، اون آس‌ها ضعیف‌ترین کارت‌های دست بودن و هدر می‌رفتن؛ در آس نرس هر کدومشون یک دست تضمینیه.</p>

      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 16px" }}>چند نکته‌ی مهم</h3>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>زمان اعلام</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حاکم باید حالت رو پیش از بازی کردن اولین کارت اعلام کنه. بعد از شروع، قابل تغییر نیست — مثل خودِ حکم.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>دنبال کردن خال</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>قاعده عوض نمیشه: اگر از خالِ شروع‌شده کارت داری، موظفی از همون بازی کنی.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>امتیازدهی</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>در رایج‌ترین شکل، امتیازها همون امتیازهای حکم عادیه — ۷ دست برای برد، کوت و حاکم‌کوت سر جای خودشون. ولی بعضی جمع‌ها برای این حالت‌ها امتیاز متفاوتی قائلن.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <div style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "8px" }}>چرا اسم‌ها گیج‌کننده‌ان</div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>«سرس» و «نرس» در بسیاری از جمع‌ها با هم اشتباه گرفته میشن و در بعضی شهرها معناشون دقیقاً برعکس چیزیه که اینجا نوشته شده. چیزی که بالا اومده رایج‌ترین تعریفه — ولی سر میز، قبل از شروع یک بار سرِ تعریف‌ها توافق کنین.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واریانت‌های منطقه‌ای و خانگی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 24px" }}>اینجا همون جاییه که بحث‌ها شروع میشه. قوانین بالا رایج‌ترین شکل بازی هستن، ولی هر شهر و هر خانواده نسخه‌ی خودش رو داره.</p>
      <div style={{ "display": "grid", "gap": "14px", "marginBottom": "26px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>امتیاز لازم برای برد کل بازی</strong> — بیشتر جمع‌ها تا ۷ امتیاز بازی می‌کنن، بعضی تا ۱۱ و بعضی تا ۵.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>ارزش کوت</strong> — جایی ۲ امتیاز، جایی همون ۱ امتیاز با یک اسم بزرگ‌تر. حاکم‌کوت هم در بعضی جمع‌ها ۳ و در بعضی ۲ حساب میشه.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>شکل پخش کارت</strong> — ۵ تا، بعد دو نوبت ۴ تایی، شکل رایجه. بعضی‌ها بعد از ۵ کارت اول، بقیه رو یک‌جا هشت‌تایی میدن.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>تعداد کارت‌های حاکم برای انتخاب حکم</strong> — استاندارد ۵ کارته، ولی جاهایی حاکم فقط با ۳ کارت اول تصمیم می‌گیره.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نحوه‌ی مشخص شدن حاکم اول</strong> — رایج‌ترینش رو کردن کارت تا اومدن اولین آسه. بعضی جمع‌ها به‌جایش کارت می‌کشن.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>بازی بدون حکم</strong> — در بعضی حلقه‌ها حاکم می‌تونه اعلام کنه که این دست حکمی نداره.</p>
        </div>
      </div>
      <div style={{ "position": "relative", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "14px", "padding": "24px", "display": "flex", "gap": "18px", "alignItems": "center", "flexWrap": "wrap" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "top": "10px", "right": "10px", "width": "20px", "height": "20px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "bottom": "10px", "left": "10px", "width": "20px", "height": "20px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
        <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0", "flex": "1", "minWidth": "240px" }}><strong style={{ "color": "#f3d391" }}>حکمِ شما کدومه؟</strong> اگر در شهر یا خانواده‌ی شما قاعده‌ای هست که اینجا نیومده، برامون بفرستین.</p>
        <button onClick={() => setRuleFormOpen(true)} style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "13px 24px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>قاعده‌ی ما رو بفرست</button>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واژه‌نامه</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <dl style={{ "margin": "0", "display": "grid", "gap": "16px" }}>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>حاکم</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>بازیکنی که خال حکم رو انتخاب می‌کنه و بازی رو شروع می‌کنه.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>حکم</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>خالِ برنده. هر کارت از این خال، از هر کارت خال دیگری بالاتره.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>دست</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>یک دور کامل که در اون هر چهار بازیکن یک کارت بازی می‌کنن.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>کوت</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>بردن هفت دست پشت سر هم بدون اینکه حریف حتی یک دست بگیره.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>حاکم‌کوت</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>کوت کردنِ تیمی که حاکم در اونه.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>یار</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>بازیکن روبه‌رویی شما؛ هم‌تیمی.</dd></div>
        <div><dt style={{ "fontSize": "17px", "fontWeight": "800", "color": "#f3d391", "marginBottom": "5px" }}>بُر زدن</dt><dd style={{ "margin": "0", "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.9" }}>مخلوط کردن کارت‌ها قبل از پخش.</dd></div>
      </dl>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>اشتباه‌های رایج تازه‌کارها</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "18px" }}>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حکم رو زود خرج کردن.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>کارت‌های حکم ابزار بردن دست‌های مهمن. اگر همه رو در دست‌های اول بسوزونی، اواخر بازی بی‌دفاع می‌مونی.</p></div>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>فراموش کردن اینکه چه کارت‌هایی رفته.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بازیکن خوب حکم، کارت می‌شمره.</p></div>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بازی کردن علیه یار.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>اگر یارت دست رو برده، لازم نیست کارت خوبت رو خرج کنی.</p></div>
        <div><h3 style={{ "fontSize": "18px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>انتخاب عجولانه‌ی حکم.</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>خالی رو انتخاب کن که هم تعدادش بیشتره هم کارت‌های بالاتری داری — نه صرفاً خالی که آسش دستته.</p></div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 24px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>سؤالات متداول</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "22px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حکم چند نفره بازی میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>شکل استاندارد چهار نفره‌ست، در دو تیم دو نفره‌ی روبه‌رو.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>کوت یعنی چه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>یعنی یک تیم هر هفت دست لازم برای برد رو پشت سر هم ببره، بدون اینکه حریف حتی یک دست بگیره. کوت ۲ امتیاز داره.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>حاکم‌کوت چه فرقی با کوت داره؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حاکم‌کوت وقتیه که تیم مقابل، تیمِ حاکم رو کوت کنه. این نتیجه ۳ امتیاز داره.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>آیا حکم بعد از هر دست عوض میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>نه. اگر تیم حاکم اون دست رو ببره، حاکم حاکم می‌مونه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگر از خال شروع‌شده کارت نداشته باشم چه کنم؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>هر کارتی می‌تونی بازی کنی — از جمله حکم.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>میشه حکم رو آنلاین بازی کرد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. در حاکمم بدون نصب و بدون ثبت‌نام می‌تونی بازی کنی.</p></div>
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
