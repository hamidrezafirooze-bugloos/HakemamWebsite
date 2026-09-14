import { useState } from 'react';
import { useGo } from '../../nav.jsx';
import VideoWatermark from '../../components/VideoWatermark.jsx';
import RuleSuggestionModal from '../../components/RuleSuggestionModal.jsx';

export default function BebeRulesContent() {
  const go = useGo();
  const [ruleFormOpen, setRuleFormOpen] = useState(false);
  return (
    <>
      <RuleSuggestionModal open={ruleFormOpen} onClose={() => setRuleFormOpen(false)} title="پیشنهاد قانون بی‌بی‌سلام" />
      <main style={{ "maxWidth": "840px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "position": "relative", "padding": "clamp(44px,7vw,80px) 0 40px", "overflow": "hidden" }}>
      <VideoWatermark src="/assets/bebe-lady-watermark" style={{ top: '-46px', left: '-48px', width: '320px', height: '320px', opacity: 0.35, WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 100%)', maskImage: 'radial-gradient(circle, black 55%, transparent 100%)' }} />
      <p style={{ "position": "relative", "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>قوانین بی‌بی سلام</p>
      <h1 style={{ "fontSize": "clamp(27px,5.8vw,46px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.32", "margin": "0 0 26px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>آموزش بازی بی‌بی سلام</h1>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>بی‌بی سلام هیچ شباهتی به حکم و شلم نداره — و همین جذابش می‌کنه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>اینجا خبری از حکم، تیم، امتیاز و فکر کردن نیست. کارت‌ها یکی‌یکی وسط میان و شما فقط باید زودتر از بقیه واکنش نشون بدین. آس اومد؟ دست روی کارت. بی‌بی اومد؟ بگید «بی‌بی سلام». دیر بجنبید، همه‌ی کارت‌های وسط مال شماست.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>بازی‌ای که سه دقیقه یاد می‌گیرین و یک شب کامل باهاش می‌خندین.</p>
    </section>

    <div style={{ "position": "relative", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px", "marginBottom": "44px" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "10px", "margin": "0 0 20px" }}>
        <span aria-hidden="true" style={{ "width": "14px", "height": "14px", "flex": "0 0 14px", "border": "1px solid rgba(232,193,105,0.6)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "3px", "background": "rgba(232,193,105,0.45)" }}></span></span>
        <h2 style={{ "fontSize": "15px", "fontWeight": "800", "letterSpacing": "0.1em", "color": "#d8ae44", "margin": "0" }}>در یک نگاه</h2>
      </div>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "18px 26px", "marginBottom": "24px" }}>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>بازیکن‌ها:</span> ۳ نفر به بالا · با ۴ نفر بهترین حالت</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>کارت‌ها:</span> یک دست ورق کامل، ۵۲ برگ (بدون جوکر)</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>تیم‌بندی:</span> ندارد — هر کس برای خودش</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>مدت یک دست:</span> ۵ تا ۱۰ دقیقه</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>سختی یادگیری:</span> خیلی آسان — واقعاً سه دقیقه</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>مناسب برای:</span> جمع خانوادگی، بچه‌های بالای ۸ سال، کسی که تا حالا ورق بازی نکرده</p>
      </div>
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>همین حالا بی‌بی سلام بازی کن</a>
    </div>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چه چیزی لازم دارید</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>دست‌کم سه نفر.</strong> با دو نفر بازی سرعتش رو از دست میده. با چهار تا شش نفر بهترین حالته. برخلاف حکم و شلم، تعداد فرد و زوج فرقی نمی‌کنه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>یک دست ورق کامل.</strong> جوکرها رو کنار بذارین.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>همین. نه کاغذ، نه قلم، نه امتیازنویسی. هیچ چیز نوشته نمیشه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>شروع بازی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>پخش کارت</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>همه‌ی ۵۲ برگ بین بازیکن‌ها به‌طور مساوی پخش میشه. با چهار نفر، هر کس ۱۳ برگ میگیره. اگه تعداد بازیکن‌ها طوری باشه که تقسیم مساوی نشه، اختلاف یکی دو کارت اشکالی نداره.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>کارت‌ها رو نگاه نکنین.</strong> هر کس دسته‌ی کارت‌هاش رو رو به پایین جلوی خودش میذاره. کسی نمی‌دونه چی داره — و این عمدیه. اگه کارت‌هاتون رو ببینین، بازی معنیش رو از دست میده.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>هدف</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>زودتر از همه دستتون خالی شه. همین. کسی که آخر از همه کارت داره، بازنده‌س.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>روند بازی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>بازی ساده‌س و تا وقتی کسی خطا نکنه، هیچ اتفاقی نمی‌افته.</p>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>بازیکن‌ها به نوبت (ساعت‌گرد) از بالای دسته‌ی خودشون یک کارت برمی‌دارن و رو به بالا وسط میز میذارن.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>کارت‌های عددی — از ۲ تا ۱۰ — هیچ واکنشی لازم ندارن. فقط گذاشته میشن و نوبت به نفر بعد میرسه.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>اما اگه کارتِ گذاشته‌شده آس، شاه، بی‌بی یا سرباز باشه، همه‌ی بازیکن‌ها باید بلافاصله واکنش مربوط به اون رو انجام بدن.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۴</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>آخرین نفری که واکنش رو انجام میده — یا کسی که واکنش اشتباه انجام میده — همه‌ی کارت‌های وسط میز رو برمیداره و به ته دسته‌ی خودش اضافه می‌کنه.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۵</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>بازی ادامه پیدا می‌کنه تا وقتی که یکی دستش خالی شه.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چهار واکنش</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>این جدول کل بازیه. اگه این رو حفظ کنین، بی‌بی سلام رو بلدین.</p>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>کارت</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>واکنش</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>آس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه دستشون رو روی کارت وسط میذارن</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>شاه</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه تعظیم می‌کنن</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>بی‌بی</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه بلند میگن: «بی‌بی سلام!»</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>سرباز</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه سلام نظامی میدن</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>چرا اسم بازی «بی‌بی سلام»ه؟</strong> چون از این چهار واکنش، اون که بلندترین و خنده‌دارترینه، همین یکیه. اسم بازی از صدایی اومده که بیشتر از همه تو اتاق می‌پیچه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>نکته‌ی مهم</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>همه واکنش نشون میدن، نه فقط کسی که کارت رو گذاشته. این نکته‌ایه که تازه‌واردها اشتباه می‌گیرن. کسی که کارت رو میذاره هم باید مثل بقیه واکنش بده — و چون خودش کارت رو دیده، معمولاً از همه سریع‌تره. این یک مزیت طبیعیه، نه تقلب.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>در بازی آنلاین چه فرقی داره؟</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>روی میز واقعی شما دست می‌زنین و صدا درمیارین. در بازی آنلاین همین کار با زدن دکمه‌ی واکنش انجام میشه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واریانت‌ها</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>بی‌بی سلام بازی خانگیه و تقریباً هر جمعی قاعده‌های خودش رو داره.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>واکنش‌های متفاوت</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>رایج‌ترین اختلاف، واکنشِ سربازه. بعضی جمع‌ها به‌جای سلام نظامی بلند می‌خندن، بعضی بشکن می‌زنن. برای شاه هم به‌جای تعظیم، بعضی دست روی پیشانی میذارن. هیچ‌کدوم غلط نیست — فقط باید همه‌ی سر میز از اول یکی رو انتخاب کنن.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>واکنش‌های اضافه</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>جمع‌های حرفه‌ای‌تر کارت‌های بیشتری رو واکنش‌دار می‌کنن. مثلاً:</p>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 18px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>۷ خشت — همه باید ساکت بشن تا نفر بعد کارت بذاره</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>دو کارت هم‌ارزش پشت سر هم — همه دست روی کارت میذارن، مثل آس</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>کارت با خال دل — همه دست روی قلبشون میذارن</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>هرچه واکنش بیشتر، بازی سخت‌تر و پرخنده‌تر.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>جریمه‌ی سبک‌تر</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>در روایت پایه، خطاکار همه‌ی کارت‌های وسط رو برمیداره که می‌تونه خیلی سنگین باشه. بعضی جمع‌ها فقط نصف یا فقط پنج کارت میدن تا بازی زودتر تموم شه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>بازی تا آخرین نفر</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>در روایت پایه، بازی وقتی تموم میشه که نفر اول دستش خالی شه. بعضی جمع‌ها ادامه میدن تا فقط یک نفر کارت داشته باشه — یعنی بازنده‌ی نهایی مشخص شه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "position": "relative", "overflow": "hidden", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
        <VideoWatermark src="/assets/bebe-lady-watermark" style={{ bottom: '-10px', left: '10px', width: '220px', height: '220px', opacity: 0.22, transform: 'scaleX(-1)', WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 100%)', maskImage: 'radial-gradient(circle, black 55%, transparent 100%)' }} />
        <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 16px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>در جمع شما چطور بازی میشه؟</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
        <p style={{ "position": "relative", "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 22px", "textWrap": "pretty" }}>واکنش‌های بی‌بی سلام تقریباً در هر خانواده فرق داره. اگه جمع شما واکنشی داره که اینجا نیومده، برامون بنویسین — قاعده‌های تأییدشده رو با نام شهر یا جمعی که فرستاده اضافه می‌کنیم.</p>
      <button onClick={() => setRuleFormOpen(true)} style={{ "position": "relative", "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>قاعده‌ی ما رو بفرست</button>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واژه‌نامه</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>اصطلاح</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>معنی</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>بی‌بی</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کارت ملکه (Queen)</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>سرباز</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کارت جک (Jack)</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>واکنش</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>حرکت یا صدایی که با دیدن کارت تصویری باید انجام بشه</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>دسته</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کارت‌های رو به پایین جلوی هر بازیکن</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>وسط</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کارت‌های رو به بالای روی میز که جایزه‌ی خطای بعدی هستن</span>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>اشتباه‌های رایج</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نگاه کردن به کارت‌های خودتون.</strong> کارت‌ها رو به پایین می‌مونن. هیچ‌کس نباید بدونه چی داره.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>فکر کردن اینکه فقط کسی که کارت گذاشته باید واکنش بده.</strong> همه باید. این پرتکرارترین اشتباه شب اوله.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>واکنش دادن به کارت اشتباه.</strong> واکنش زودهنگام هم خطاست. اگه روی یک ۹ دست بذارین، کارت‌ها مال شماست.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۴</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>کند گذاشتن کارت.</strong> بعضی‌ها برای اینکه آماده‌تر باشن، کارتشون رو آهسته میذارن. این بازی رو کسل‌کننده می‌کنه. کارت باید سریع و در یک حرکت گذاشته بشه.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۵</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>توافق نکردن روی واکنش‌ها پیش از شروع.</strong> اگه نیمی از میز برای سرباز می‌خندن و نیمی سلام نظامی میدن، دعوا حتمیه. سی ثانیه اول رو صرف توافق کنین.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>سؤال‌های پرتکرار</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "20px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بی‌بی سلام رو چند نفر بازی می‌کنن؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>دست‌کم سه نفر. با چهار تا شش نفر بهترین حالت رو داره و سقف مشخصی نداره.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>امتیاز چطور حساب میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حساب نمیشه. بی‌بی سلام امتیاز نداره. برنده کسیه که زودتر از همه دستش خالی شه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>فرق بی‌بی سلام با حکم و شلم چیه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حکم و شلم بازی فکر و حافظه هستن و تیمی بازی میشن. بی‌بی سلام بازی سرعت واکنشه، تیم نداره، حکم نداره و امتیاز نداره.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>برای بچه‌ها مناسبه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. از حدود هشت سالگی. در واقع یکی از معدود بازی‌های ورقیه که بچه‌ها می‌تونن بزرگ‌ترها رو توش ببرن، چون تنها مهارت لازم سرعت واکنشه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگه دو نفر هم‌زمان واکنش دادن چی میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>سر میز واقعی، هرکس دستش زیر بود برنده‌س. در بازی آنلاین این رو سیستم تشخیص میده.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>چقدر طول می‌کشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>یک دست معمولاً بین پنج تا ده دقیقه.</p></div>
      </div>
    </section>

    <section style={{ "padding": "0 0 56px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 18px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی‌های دیگر</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 26px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>حکم</strong> — شناخته‌شده‌ترین بازی ورق ایران. اگه بی‌بی سلام براتون سبک بود، اینجا شروع کنین.</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>شلم</strong> — سنگین‌ترین بازی مجموعه‌ی ما. حراج، ریسک و امتیاز.</p>
        </div>
      </div>
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>شروع بازی</a>
    </section>
  </main>
    </>
  );
}
