import { useGo } from '../../nav.jsx';
import VideoWatermark from '../../components/VideoWatermark.jsx';

export default function BebeRulesContent() {
  const go = useGo();
  return (
    <>
      <main style={{ "maxWidth": "840px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "position": "relative", "padding": "clamp(44px,7vw,80px) 0 40px", "overflow": "hidden" }}>
      <VideoWatermark src="/assets/bebe-lady-watermark" style={{ top: '-46px', left: '-88px', width: '320px', height: '320px', opacity: 0.35, WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 100%)', maskImage: 'radial-gradient(circle, black 55%, transparent 100%)' }} />
      <p style={{ "position": "relative", "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>قوانین بی‌بی سلام</p>
      <h1 style={{ "fontSize": "clamp(27px,5.8vw,46px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.32", "margin": "0 0 26px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>آموزش بازی بی‌بی سلام</h1>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>بی‌بی سلام هیچ شباهتی به حکم و شلم ندارد — و همین جذابش می‌کند.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>اینجا خبری از حکم، تیم، امتیاز و فکر کردن نیست. کارت‌ها یکی‌یکی وسط می‌آیند و شما فقط باید زودتر از بقیه واکنش نشان بدهید. آس آمد؟ دست روی کارت. بی‌بی آمد؟ بگویید «بی‌بی سلام». دیر بجنبید، همه‌ی کارت‌های وسط مال شماست.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>بازی‌ای که سه دقیقه یاد می‌گیرید و یک شب کامل با آن می‌خندید.</p>
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
      <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>همین حالا بی‌بی سلام بازی کن</button>
    </div>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چه چیزی لازم دارید</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>دست‌کم سه نفر.</strong> با دو نفر بازی سرعتش را از دست می‌دهد. با چهار تا شش نفر بهترین حالت است. برخلاف حکم و شلم، تعداد فرد و زوج فرقی نمی‌کند.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>یک دست ورق کامل.</strong> جوکرها را کنار بگذارید.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>همین. نه کاغذ، نه قلم، نه امتیازنویسی. هیچ چیز نوشته نمی‌شود.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>شروع بازی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>پخش کارت</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>همه‌ی ۵۲ برگ بین بازیکن‌ها به‌طور مساوی پخش می‌شود. با چهار نفر، هر کس ۱۳ برگ می‌گیرد. اگر تعداد بازیکن‌ها طوری باشد که تقسیم مساوی نشود، اختلاف یکی دو کارت اشکالی ندارد.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>کارت‌ها را نگاه نکنید.</strong> هر کس دسته‌ی کارت‌هایش را رو به پایین جلوی خودش می‌گذارد. کسی نمی‌داند چه دارد — و این عمدی است. اگر کارت‌هایتان را ببینید، بازی معنایش را از دست می‌دهد.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>هدف</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>زودتر از همه دستتان خالی شود. همین. کسی که آخر از همه کارت دارد، بازنده است.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>روند بازی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>بازی ساده است و تا وقتی کسی خطا نکند، هیچ اتفاقی نمی‌افتد.</p>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>بازیکن‌ها به نوبت (ساعت‌گرد) از بالای دسته‌ی خودشان یک کارت برمی‌دارند و رو به بالا وسط میز می‌گذارند.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>کارت‌های عددی — از ۲ تا ۱۰ — هیچ واکنشی لازم ندارند. فقط گذاشته می‌شوند و نوبت به نفر بعد می‌رسد.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>اما اگر کارتِ گذاشته‌شده آس، شاه، بی‌بی یا سرباز باشد، همه‌ی بازیکن‌ها باید بلافاصله واکنش مربوط به آن را انجام دهند.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۴</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>آخرین نفری که واکنش را انجام می‌دهد — یا کسی که واکنش اشتباه انجام می‌دهد — همه‌ی کارت‌های وسط میز را برمی‌دارد و به ته دسته‌ی خودش اضافه می‌کند.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۵</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}>بازی ادامه پیدا می‌کند تا وقتی که یکی دستش خالی شود.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چهار واکنش</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>این جدول کل بازی است. اگر این را حفظ کنید، بی‌بی سلام را بلدید.</p>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>کارت</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>واکنش</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>آس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه دستشان را روی کارت وسط می‌گذارند</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>شاه</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه تعظیم می‌کنند</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>بی‌بی</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه بلند می‌گویند: «بی‌بی سلام!»</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.4fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>سرباز</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>همه سلام نظامی می‌دهند</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>چرا اسم بازی «بی‌بی سلام» است؟</strong> چون از این چهار واکنش، آن که بلندترین و خنده‌دارترین است، همین یکی است. اسم بازی از صدایی آمده که بیشتر از همه در اتاق می‌پیچد.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>نکته‌ی مهم</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>همه واکنش نشان می‌دهند، نه فقط کسی که کارت را گذاشته. این نکته‌ای است که تازه‌واردها اشتباه می‌گیرند. کسی که کارت را می‌گذارد هم باید مثل بقیه واکنش بدهد — و چون خودش کارت را دیده، معمولاً از همه سریع‌تر است. این یک مزیت طبیعی است، نه تقلب.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>در بازی آنلاین چه فرقی دارد؟</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>روی میز واقعی شما دست می‌زنید و صدا در می‌آورید. در بازی آنلاین همین کار با زدن دکمه‌ی واکنش انجام می‌شود.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واریانت‌ها</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>بی‌بی سلام بازی خانگی است و تقریباً هر جمعی قاعده‌های خودش را دارد.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>واکنش‌های متفاوت</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>رایج‌ترین اختلاف، واکنشِ سرباز است. بعضی جمع‌ها به‌جای سلام نظامی بلند می‌خندند، بعضی بشکن می‌زنند. برای شاه هم به‌جای تعظیم، بعضی دست روی پیشانی می‌گذارند. هیچ‌کدام غلط نیست — فقط باید همه‌ی سر میز از اول یکی را انتخاب کنند.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>واکنش‌های اضافه</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>جمع‌های حرفه‌ای‌تر کارت‌های بیشتری را واکنش‌دار می‌کنند. مثلاً:</p>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 18px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>۷ خشت — همه باید ساکت شوند تا نفر بعد کارت بگذارد</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>دو کارت هم‌ارزش پشت سر هم — همه دست روی کارت می‌گذارند، مثل آس</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>کارت با خال دل — همه دست روی قلبشان می‌گذارند</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>هرچه واکنش بیشتر، بازی سخت‌تر و پرخنده‌تر.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>جریمه‌ی سبک‌تر</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>در روایت پایه، خطاکار همه‌ی کارت‌های وسط را برمی‌دارد که می‌تواند خیلی سنگین باشد. بعضی جمع‌ها فقط نصف یا فقط پنج کارت می‌دهند تا بازی زودتر تمام شود.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>بازی تا آخرین نفر</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>در روایت پایه، بازی وقتی تمام می‌شود که نفر اول دستش خالی شود. بعضی جمع‌ها ادامه می‌دهند تا فقط یک نفر کارت داشته باشد — یعنی بازنده‌ی نهایی مشخص شود.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "position": "relative", "overflow": "hidden", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
        <VideoWatermark src="/assets/bebe-lady-watermark" style={{ bottom: '-10px', right: '10px', width: '220px', height: '220px', opacity: 0.22, transform: 'scaleX(-1)', WebkitMaskImage: 'radial-gradient(circle, black 55%, transparent 100%)', maskImage: 'radial-gradient(circle, black 55%, transparent 100%)' }} />
        <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 16px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>در جمع شما چطور بازی می‌شود؟</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
        <p style={{ "position": "relative", "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 22px", "textWrap": "pretty" }}>واکنش‌های بی‌بی سلام تقریباً در هر خانواده فرق دارد. اگر جمع شما واکنشی دارد که اینجا نیامده، برایمان بنویسید — قاعده‌های تأییدشده را با نام شهر یا جمعی که فرستاده اضافه می‌کنیم.</p>
      <button style={{ "position": "relative", "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>قاعده‌ی ما را بفرست</button>
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
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>حرکت یا صدایی که با دیدن کارت تصویری باید انجام شود</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>دسته</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کارت‌های رو به پایین جلوی هر بازیکن</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>وسط</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کارت‌های رو به بالای روی میز که جایزه‌ی خطای بعدی‌اند</span>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>اشتباه‌های رایج</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نگاه کردن به کارت‌های خودتان.</strong> کارت‌ها رو به پایین می‌مانند. هیچ‌کس نباید بداند چه دارد.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>فکر کردن اینکه فقط کسی که کارت گذاشته باید واکنش بدهد.</strong> همه باید. این پرتکرارترین اشتباه شب اول است.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>واکنش دادن به کارت اشتباه.</strong> واکنش زودهنگام هم خطاست. اگر روی یک ۹ دست بگذارید، کارت‌ها مال شماست.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۴</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>کند گذاشتن کارت.</strong> بعضی‌ها برای اینکه آماده‌تر باشند، کارتشان را آهسته می‌گذارند. این بازی را کسل‌کننده می‌کند. کارت باید سریع و در یک حرکت گذاشته شود.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۵</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>توافق نکردن روی واکنش‌ها پیش از شروع.</strong> اگر نیمی از میز برای سرباز می‌خندند و نیمی سلام نظامی می‌دهند، دعوا حتمی است. سی ثانیه اول را صرف توافق کنید.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>سؤال‌های پرتکرار</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "20px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>بی‌بی سلام را چند نفر بازی می‌کنند؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>دست‌کم سه نفر. با چهار تا شش نفر بهترین حالت را دارد و سقف مشخصی ندارد.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>امتیاز چطور حساب می‌شود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حساب نمی‌شود. بی‌بی سلام امتیاز ندارد. برنده کسی است که زودتر از همه دستش خالی شود.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>فرق بی‌بی سلام با حکم و شلم چیست؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>حکم و شلم بازی فکر و حافظه‌اند و تیمی بازی می‌شوند. بی‌بی سلام بازی سرعت واکنش است، تیم ندارد، حکم ندارد و امتیاز ندارد.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>برای بچه‌ها مناسب است؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. از حدود هشت سالگی. در واقع یکی از معدود بازی‌های ورقی است که بچه‌ها می‌توانند بزرگ‌ترها را در آن ببرند، چون تنها مهارت لازم سرعت واکنش است.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگر دو نفر هم‌زمان واکنش دادند چه می‌شود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>سر میز واقعی، هرکس دستش زیر بود برنده است. در بازی آنلاین این را سیستم تشخیص می‌دهد.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>چقدر طول می‌کشد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>یک دست معمولاً بین پنج تا ده دقیقه.</p></div>
      </div>
    </section>

    <section style={{ "padding": "0 0 56px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 18px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی‌های دیگر</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 26px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>حکم</strong> — شناخته‌شده‌ترین بازی ورق ایران. اگر بی‌بی سلام برایتان سبک بود، اینجا شروع کنید.</p>
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
