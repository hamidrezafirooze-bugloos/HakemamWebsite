import { useState } from 'react';
import { useGo } from '../../nav.jsx';
import GoatRunWatermark from '../../components/GoatRunWatermark.jsx';
import RuleSuggestionModal from '../../components/RuleSuggestionModal.jsx';

export default function ShelemRulesContent() {
  const go = useGo();
  const [ruleFormOpen, setRuleFormOpen] = useState(false);
  return (
    <>
      <RuleSuggestionModal open={ruleFormOpen} onClose={() => setRuleFormOpen(false)} title="پیشنهاد قانون شلم" />
      <main style={{ "maxWidth": "840px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "position": "relative", "padding": "clamp(44px,7vw,80px) 0 40px", "overflow": "hidden" }}>
      <GoatRunWatermark style={{ top: '-46px', left: '-88px', width: '320px', height: '320px', opacity: 0.35 }} />
      <p style={{ "position": "relative", "fontSize": "14px", "fontWeight": "700", "letterSpacing": "0.14em", "color": "#b8905a", "margin": "0 0 20px" }}>قوانین شلم</p>
      <h1 style={{ "fontSize": "clamp(27px,5.8vw,46px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.32", "margin": "0 0 26px", "letterSpacing": "-0.015em", "textWrap": "pretty" }}>آموزش بازی شلم</h1>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>شلم یه بازی ورقِ چهارنفره‌ی دو به دویی‌ه که توش، برخلاف حکم، فقط تعداد دست‌ها مهم نیست — مهم ارزش کارت‌هایی‌ه که جمع می‌کنین. باید قبل از شروع بگین چند امتیاز میارید. اگه بیارید، برنده‌این. اگه نیارید، همون عدد از امتیازتون کم میشه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>همین یه قاعده، شلم رو از یه بازی مهارتی به یه بازی مهارت و شهامت تبدیل می‌کنه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>اگه حکم بلدین، شلم رو در ده دقیقه یاد می‌گیرین. اگه نه، این صفحه از صفر شروع می‌کنه.</p>
    </section>

    <div style={{ "position": "relative", "overflow": "hidden", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px", "marginBottom": "44px" }}>
      <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
      <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "10px", "margin": "0 0 20px" }}>
        <span aria-hidden="true" style={{ "width": "14px", "height": "14px", "flex": "0 0 14px", "border": "1px solid rgba(232,193,105,0.6)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "3px", "background": "rgba(232,193,105,0.45)" }}></span></span>
        <h2 style={{ "fontSize": "15px", "fontWeight": "800", "letterSpacing": "0.1em", "color": "#d8ae44", "margin": "0" }}>در یک نگاه</h2>
      </div>
      <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "18px 26px", "marginBottom": "24px" }}>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>بازیکن‌ها:</span> ۴ نفر، دو تیم دو نفره‌ی روبه‌رو</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>کارت‌ها:</span> یک دست ورق کامل، ۵۲ برگ</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>کارت هر نفر:</span> ۱۲ برگ · ۴ برگ باقی‌مونده «زمین» میشه</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>امتیاز کل هر دست:</span> ۱۶۵</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>حداقل اعلام:</span> ۱۰۰</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>مدت یک دست:</span> حدود ۵ دقیقه</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>مدت یک بازی کامل:</span> حدود ۳۰ تا ۴۵ دقیقه</p>
        <p style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8", "margin": "0" }}><span style={{ "color": "#b0907a" }}>سختی یادگیری:</span> متوسط — قوانین ساده، تصمیم‌ها سخت</p>
      </div>
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "position": "relative", "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>همین حالا شلم بازی کن</a>
    </div>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>چی لازم دارین</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>چهار نفر.</strong> شلم دقیقاً چهار نفره‌ست. حالت سه‌نفره و پنج‌نفره‌ی جاافتاده نداره.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>دو تیم.</strong> هر کس با نفر روبه‌روش هم‌تیمی‌ه. تیم‌ها روی میز یکی‌درمیون می‌نشینن تا دو هم‌تیمی کنار هم نباشن.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>یه دست ورق کامل.</strong> هر ۵۲ برگ. کارت‌ها رو کنار نگذارین.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>کاغذ و قلم — یا فقط گوشیتون.</strong> برخلاف حکم، توی شلم واقعاً باید امتیاز نوشت. اگه با ما بازی کنین، این کار خودکار انجام میشه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>شروع بازی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>نشستن و تیم‌بندی</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>چهار نفر دور میز. هر کس هم‌تیمیِ نفر روبه‌روشه. جهت بازی توی شلم معمولاً پادساعت‌گرده (سمت راست دست‌دهنده اول بازی می‌کنه)، ولی این توی جمع‌های مختلف فرق داره و تأثیری روی قواعد نداره — فقط از اول توافق کنین.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>پخش کارت</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>کارت‌ها بُر می‌خورن و دست‌دهنده به هر نفر ۱۲ برگ میده — معمولاً چهارتا چهارتا، نه یکی‌یکی.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>۴ برگ باقی می‌مونه. این چهار برگ رو به پایین وسط میز می‌مونه و بهش «زمین» یا «طاق» میگن. هیچ‌کس فعلاً نمی‌بینه‌شون.</p>
      <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "18px 20px", "marginBottom": "26px" }}><p style={{ "fontSize": "17px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.9", "margin": "0", "textAlign": "center" }}>۴ نفر × ۱۲ برگ = ۴۸ برگ + ۴ برگ زمین = ۵۲ برگ</p></div>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>حراج — قلب شلم</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>حالا هر کس کارت‌هاش رو نگاه می‌کنه و تخمین می‌زنه تیمش چند امتیاز از ۱۶۵ امتیازِ این دست می‌تونه جمع کنه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>بعد نوبتی، هر کس یا یه عدد اعلام می‌کنه یا پاس میده:</p>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 18px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>کمترین عدد قابل اعلام: ۱۰۰</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>اعلام‌ها باید مضرب ۵ باشن: ۱۰۰، ۱۰۵، ۱۱۰، …</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>هر اعلام باید از اعلام قبلی بالاتر باشه</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}>هرکس یه‌بار پاس بده، تا آخر اون دست از حراج بیرونه و دیگه نمی‌تونه برگرده</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>حراج وقتی تموم میشه که سه نفر پاس داده باشن. نفر باقی‌مونده حاکم اون دسته و تیمش قرارداد رو قبول کرده: باید حداقل همون عددی که گفته امتیاز جمع کنه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>اگه همه پاس بدن چی میشه؟</strong> در بیشتر جمع‌ها کارت‌ها جمع میشه و همون دست‌دهنده دوباره پخش می‌کنه. در بعضی جمع‌ها نفر آخر مجبوره ۱۰۰ اعلام کنه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>زمین و دور انداختن</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>حاکم اون چهار برگ زمین رو برمی‌داره و به کارت‌هاش اضافه می‌کنه. حالا ۱۶ برگ داره.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>بعد چهار برگ دلخواه رو رو به پایین کنار می‌گذاره تا دوباره ۱۲ برگ داشته باشه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>نکته‌ی مهم:</strong> کارت‌هایی که حاکم کنار می‌گذاره، امتیازشون مال تیم خودشه. پس اگه یه آس توی زمین بود که به دردش نمی‌خورد، دور انداختنش امتیازش رو از دست نمیده. این یه قاعده‌ی کلیدی‌ه که خیلیا نمی‌دونن.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>انتخاب حکم</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>حاکم تصمیم می‌گیره کدوم خال حکم باشه. توی روایت سنتی، اولین کارتی که حاکم زمین می‌زنه خالش رو حکم می‌کنه — یعنی تا اولین حرکت، هیچ‌کس حکم رو نمی‌دونه. توی نسخه‌های امروزی‌تر (و توی بازی ما) حاکم حکم رو صریح اعلام می‌کنه تا همه از اول بدونن.</p>
    </section>

    <section style={{ "position": "relative", "overflow": "hidden", "padding": "0 0 44px" }}>
      <GoatRunWatermark style={{ bottom: '-10px', right: '10px', width: '220px', height: '220px', opacity: 0.22, transform: 'scaleX(-1)' }} />
      <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>روند بازی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "position": "relative", "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>از اینجا به بعد دقیقاً مثل حکمه. حاکم اولین کارت رو می‌زنه. بعد بقیه به نوبت یه کارت می‌گذارن.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>قانون اصلی:</strong> باید از همون خال بازی کنین. اگه از خالی که شروع شده کارت دارین، حتماً باید از همون بگذارین. اگه ندارین، آزادین هر کارتی بگذارین — از جمله حکم.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>دست رو کی می‌بره؟</strong> اگه کسی حکم گذاشته باشه، بزرگ‌ترین حکم می‌بره. اگه هیچ حکمی گذاشته نشده، بزرگ‌ترین کارتِ خالِ شروع می‌بره.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>ترتیب قدرت کارت‌ها:</strong> آس › شاه › بی‌بی › سرباز › ۱۰ › ۹ › … › ۲</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>برنده‌ی هر دست، دست بعد رو شروع می‌کنه. مجموعاً ۱۲ دست بازی میشه تا کارت‌ها تموم شه.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>کارت‌های برده‌شده رو دور نریزین.</strong> برخلاف حکم، توی شلم آخر کار باید امتیاز کارت‌های داخل دست‌های برده‌شده رو بشمارین. هر تیم دست‌هاش رو یه‌جا جلوی خودش نگه می‌داره.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>امتیازدهی</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>اینجا فرق اصلی شلم با حکمه. دو چیز امتیاز داره: بعضی کارت‌ها، و خودِ دست‌ها.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>امتیاز کارت‌ها</h3>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.4fr 1fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>کارت</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>امتیاز</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>تعداد در دست ورق</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>جمع</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.4fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>آس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۱۰</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۴</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۴۰</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.4fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>۱۰</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۱۰</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۴</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۴۰</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.4fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>۵</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۵</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۴</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۲۰</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.4fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>بقیه‌ی کارت‌ها</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۰</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>—</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۰</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>جمع امتیاز کارت‌ها: ۱۰۰</strong></p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>امتیاز دست‌ها</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>هر کدوم از ۱۲ دست، پنج امتیاز داره — مهم نیست چه کارت‌هایی توش باشه. جمع امتیاز دست‌ها: ۱۲ × ۵ = ۶۰</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}><strong style={{ "color": "#f3d391" }}>۱۰۰ + ۶۰ = ۱۶۰؟ پس ۱۶۵ از کجا میاد؟</strong> این پرتکرارترین سؤال شلمه. توی بیشتر روایت‌ها، پنج امتیاز اضافه به تیمی می‌رسه که آخرین دست رو می‌بره — بهش «آخری» یا «دست آخر» میگن. با اون، جمع دقیقاً ۱۶۵ میشه. توی بعضی جمع‌ها به‌جاش، امتیاز دست‌ها رو ۱۳ در ۵ حساب می‌کنن (چون کارت‌های دورانداخته‌ی حاکم هم یه دست به حساب میاد). نتیجه یکیه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>حساب کردن نتیجه</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>آخر دست، هر تیم امتیاز کارت‌های داخل دست‌هاش رو جمع می‌کنه، به‌علاوه‌ی ۵ امتیاز به ازای هر دست. جمع دو تیم همیشه ۱۶۵ میشه. بعد:</p>
      <div style={{ "display": "grid", "gap": "14px", "marginBottom": "20px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>اگه تیم حاکم به عدد اعلامش رسید یا از اون گذشت</strong> — همون امتیازی که واقعاً جمع کرده به حسابش اضافه میشه.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>اگه نرسید</strong> — عدد اعلام‌شده از حسابش کم میشه. نه امتیازی که آورده — عددی که گفته بود. این «سوختن» ه و تنبیهش سنگینه.</p>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>تیم مقابل توی هر دو حالت همون امتیازی رو که واقعاً جمع کرده برمی‌داره.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>مثال</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>تیم الف ۱۲۰ اعلام می‌کنه.</p>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1.6fr 1fr 1fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>نتیجه</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>امتیاز تیم الف</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>امتیاز تیم ب</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1.6fr 1fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>تیم الف ۱۳۵ جمع کرد</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}><span dir="ltr">+۱۳۵</span></span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}><span dir="ltr">+۳۰</span></span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1.6fr 1fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>تیم الف ۱۲۰ جمع کرد (دقیقاً)</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}><span dir="ltr">+۱۲۰</span></span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}><span dir="ltr">+۴۵</span></span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1.6fr 1fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>تیم الف ۱۱۵ جمع کرد</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}><span dir="ltr">−۱۲۰</span></span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}><span dir="ltr">+۵۰</span></span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>دقت کنین: توی سطر آخر، تیم الف با اینکه ۱۱۵ امتیاز واقعی جمع کرده، ۱۲۰ امتیاز از دست میده. پنج امتیاز کم آوردن، ۲۳۵ امتیاز اختلاف می‌سازه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>شلم</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>اگه تیم حاکم هر ۱۲ دست رو ببره، بهش «شلم» میگن — همون کلمه‌ای که اسم بازی از اون اومده (از «chelem» فرانسوی، به معنی قبضه‌کردن کامل). شلم امتیاز ویژه داره.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>بعضی جمع‌ها «اعلام شلم» هم دارن: حاکم قبل از شروع میگه قصد داره همه‌ی دست‌ها رو ببره. اگه موفق شه امتیاز بیشتری می‌گیره، اگه حتی یه دست ببازه، جریمه‌ی سنگین‌تری میشه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>پایان بازی</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 24px", "textWrap": "pretty" }}>بازی تا رسیدن یه تیم به امتیاز هدف ادامه داره. رایج‌ترین عدد ۱۱۰۰ه، ولی جمع‌های مختلف ۱۱۶۵، ۱۴۰۰ یا ۱۶۵۰ هم بازی می‌کنن.</p>
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>یک دست شلم بازی کن</a>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>واریانت‌ها</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>شلم بازی‌ایه که تقریباً هیچ دو جمعی دقیقاً مثل هم بازیش نمی‌کنن. این‌ها رایج‌ترین‌هاشن.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>شلم با جوکر</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>پرطرفدارترین واریانت. دو جوکر وارد بازی میشن و بازی رو تندتر و پرریسک‌تر می‌کنن.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>جوکرها هم امتیاز دارن و هم قدرت. هر دو جوکر بالاتر از هر کارت دیگه‌ای هستن — حتی بالاتر از آس حکم. جوکر بزرگ (رنگی) از جوکر کوچک (سیاه‌وسفید) بالاتره.</p>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.6fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>کارت</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>امتیاز</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>قدرت</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.6fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>جوکر بزرگ</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۲۰</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>بالاترین کارت بازی</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1fr 1.6fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>جوکر کوچک</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۱۵</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>دوم</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "textWrap": "pretty" }}>با اضافه شدن ۳۵ امتیاز، جمع امتیاز هر دست از ۱۶۵ به ۲۰۰ می‌رسه و حداقل اعلام معمولاً بالاتر میره.</p>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>دو مسئله‌ی فنی که باید حل شه:</p>
      <div style={{ "display": "grid", "gap": "14px", "marginBottom": "26px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>تعداد کارت.</strong> با ۵۴ برگ، تقسیم ۱۲تایی جواب نمیده. دو راه رایج: یا دو کارت کم‌ارزش (معمولاً دو تا ۲) کنار گذاشته میشه تا باز ۵۲ برگ بمونه، یا زمین شش‌برگی میشه.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>جوکر از چه خالیه؟</strong> چون جوکر خال نداره، وقتی کسی جوکر می‌زنه باید مشخص باشه بقیه چیکار می‌تونن بکنن. رایج‌ترین قاعده: جوکر رو میشه هر وقت خواستین بازی کنین، حتی اگه از خال شروع‌شده کارت داشته باشین — و اگه جوکر خودش دست رو شروع کنه، نفر بعدی هر کارتی که بخواد می‌گذاره.</p>
        </div>
      </div>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>حالت‌های بدون حکم: سرس، نرس و آس نرس</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "textWrap": "pretty" }}>همون سه حالتی که توی حکم هم وجود داره. حاکم به‌جای انتخاب خال حکم، می‌تونه اعلام کنه که دست بدون حکم بازی شه:</p>
      <div style={{ "border": "1px solid rgba(232,193,105,0.22)", "borderRadius": "14px", "overflow": "hidden", "marginBottom": "26px" }}>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "14px 20px", "background": "rgba(216,174,68,0.1)" }}>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>حالت</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>ترتیب قدرت کارت‌ها</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>قوی‌ترین</span>
          <span style={{ "fontSize": "14px", "fontWeight": "800", "color": "#d8ae44" }}>ضعیف‌ترین</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>سرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>مثل بازی عادی</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>آس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۲</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>نرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کاملاً برعکس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>۲</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>آس</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 1.4fr 1fr 1fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>آس نرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>برعکس، ولی آس بالای همه</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>آس، بعد ۲</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>شاه</span>
        </div>
      </div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>توی هیچ‌کدوم حکم وجود نداره و همیشه بزرگ‌ترین کارتِ خالِ شروع دست رو می‌بره. چون این حالت‌ها سخت‌ترن، معمولاً امتیازشون ضریب بیشتری داره.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>آسِ ۱۵ امتیازی</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>توی بعضی جمع‌ها آس ۱۵ امتیاز حساب میشه نه ۱۰. با این حساب امتیاز کارت‌ها ۱۲۰ میشه و جمع کل دست به ۱۸۵ می‌رسه. حداقل اعلام هم متناسب باهاش بالاتر میره.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>حراج بدون سقف</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>توی روایت پایه، سقف اعلام ۱۶۵ه (همه‌ی امتیاز موجود). بعضی جمع‌ها اجازه میدن بالاتر از ۱۶۵ هم اعلام شه — یعنی حاکم قول شلم کامل میده و اعلامش عملاً یه شرط‌بندی روی همه‌ی دست‌هاست.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>دیدن زمین پیش از حراج</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 26px", "textWrap": "pretty" }}>واریانتی که بازی رو خیلی آسون‌تر می‌کنه: یکی از چهار برگ زمین رو گذاشته میشه تا همه قبل از اعلام ببینتش. ریسک حراج پایین میاد و بازی محافظه‌کارانه‌تر میشه.</p>
      <h3 style={{ "fontSize": "clamp(17px,2.4vw,20px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 14px" }}>تک‌خالی اجباری</h3>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 0px", "textWrap": "pretty" }}>قاعده‌ی خانگی رایج: اگه تیم حاکم بسوزه، دست بعد حق اعلام نداره. هدفش اینه که یه تیم پشت‌سرهم ریسک‌های بزرگ نکنه.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "position": "relative", "background": "rgba(216,174,68,0.07)", "border": "1px solid rgba(232,193,105,0.25)", "borderRadius": "16px", "padding": "28px" }}>
        <div aria-hidden="true" style={{ "position": "absolute", "top": "14px", "right": "14px", "width": "26px", "height": "26px", "borderTop": "2px solid rgba(232,193,105,0.5)", "borderRight": "2px solid rgba(232,193,105,0.5)" }}></div>
        <div aria-hidden="true" style={{ "position": "absolute", "bottom": "14px", "left": "14px", "width": "26px", "height": "26px", "borderBottom": "2px solid rgba(232,193,105,0.5)", "borderLeft": "2px solid rgba(232,193,105,0.5)" }}></div>
        <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 16px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>شما چطور بازی می‌کنین؟</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
        <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 22px", "textWrap": "pretty" }}>شلم توی هر شهر و هر خانواده یه قاعده‌ی کوچیک متفاوت داره. اگه توی جمع شما قاعده‌ای هست که اینجا نیومده، برامون بنویسین. قاعده‌های تأییدشده رو با اسم شهر یا جمعی که فرستاده به همین صفحه اضافه می‌کنیم.</p>
      <button onClick={() => setRuleFormOpen(true)} style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit" }}>قاعده‌ی ما رو بفرست</button>
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
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>حاکم</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>کسی که بالاترین عدد رو اعلام کرده و قرارداد دست با اونه</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>زمین / طاق</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>چهار برگ باقی‌مونده که حاکم برمی‌داره</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>اعلام / خوانش</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>عددی که تیم قول میده جمع کنه</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>دست</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>یه دور چهار کارتی</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>حکم</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>خالی که بر همه‌ی خال‌ها برتری داره</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>سوختن</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>نرسیدن به عدد اعلام‌شده و کم شدن اون از امتیاز تیم</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>شلم</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>بردن هر ۱۲ دست</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>آخری</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>پنج امتیاز اضافه‌ی دست آخر</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>سرس / نرس / آس نرس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>حالت‌های بدون حکم</span>
        </div>
        <div style={{ "display": "grid", "gridTemplateColumns": "1fr 2.2fr", "padding": "15px 20px", "borderTop": "1px solid rgba(232,193,105,0.14)" }}>
          <span style={{ "fontSize": "16px", "color": "#f3d391", "fontWeight": "700", "lineHeight": "1.8" }}>پاس</span>
          <span style={{ "fontSize": "16px", "color": "#e6d5b8", "lineHeight": "1.8" }}>انصراف از حراج — بازگشت‌ناپذیر تا پایان اون دست</span>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>اشتباه‌های رایج</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "14px" }}>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۱</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>فکر کردن اینکه تعداد دست‌ها مهمه.</strong> بزرگ‌ترین اشتباه کسی که از حکم میاد. توی شلم میشه ۸ دست از ۱۲ دست رو برد و باز هم باخت، اگه آس‌ها و ده‌ها توی چهار دست دیگه بوده باشن.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۲</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>اعلام بلندپروازانه با کارت خوب ولی بی‌هم‌تیمی.</strong> کارت‌های شما نصف ماجراست. اگه هم‌تیمیتون پاس داده، یعنی دستش خالیه — اعلامتون رو پایین بیارین.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۳</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>دور انداختن کارت‌های امتیازدار توی مرحله‌ی زمین.</strong> یادتون باشه امتیاز کارت‌های دورانداخته مال شماست، ولی خودِ کارت دیگه برای بردن دست به کارتون نمیاد. آسِ خالی که حکم نیست رو دور بیندازین؛ آسِ حکم رو هرگز.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۴</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>نگه داشتن حکم تا آخر بازی.</strong> حکم‌های نگه‌داشته‌شده توی دست شما امتیاز نمی‌سازن. حکم برای گرفتن دست‌های امتیازداره، نه برای نمایش.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۵</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>فراموش کردن اینکه پاس بازگشت‌ناپذیره.</strong> خیلیا برای «دیدن اینکه بقیه چی میگن» پاس میدن و بعد می‌خوان برگردن. نمیشه.</p>
        </div>
        <div style={{ "display": "flex", "gap": "16px", "alignItems": "flex-start", "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "12px", "padding": "20px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 34px", "width": "34px", "height": "34px", "borderRadius": "50%", "border": "1px solid rgba(232,193,105,0.5)", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontSize": "16px", "fontWeight": "800", "color": "#e8c169" }}>۶</span>
          <p style={{ "fontSize": "17px", "color": "#e6d5b8", "lineHeight": "1.9", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>جمع نکردن دست‌های برده‌شده جدا.</strong> آخر دست باید بشمارین. اگه کارت‌ها قاطی شده باشن، شمارش غیرممکنه.</p>
        </div>
      </div>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 20px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>سؤال‌های پرتکرار</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <div style={{ "display": "grid", "gap": "20px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>شلم رو چند نفر بازی می‌کنن؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>دقیقاً چهار نفر، در دو تیم دو نفره‌ی روبه‌رو.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>فرق شلم و حکم چیه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>توی حکم فقط تعداد دست‌ها مهمه و حکم رو برنده‌ی قرعه انتخاب می‌کنه. توی شلم امتیاز کارت‌ها شمرده میشه و حق انتخاب حکم رو کسی می‌گیره که بالاترین عدد رو توی حراج اعلام کنه — و اگه به اون عدد نرسه، جریمه میشه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>چرا امتیاز کل ۱۶۵ه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>۱۰۰ امتیاز از کارت‌ها (آس‌ها و ده‌ها ۱۰تایی، پنج‌ها ۵تایی) به‌علاوه‌ی ۵ امتیاز برای هر دست و ۵ امتیاز اضافه برای دست آخر.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگه همه پاس بدن چی میشه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>توی بیشتر جمع‌ها کارت‌ها دوباره پخش میشه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>میشه بالاتر از ۱۶۵ اعلام کرد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>توی قاعده‌ی پایه نه. بعضی جمع‌ها اجازه میدن، که در عمل یعنی قول شلم کامل.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>شلم با جوکر چه فرقی داره؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>دو جوکر با امتیاز ۱۵ و ۲۰ اضافه میشن که از همه‌ی کارت‌ها قوی‌ترن و جمع امتیاز دست رو به ۲۰۰ می‌رسونن.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>شلم بازی شانسیه؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>پخش کارت شانسیه، ولی تصمیم‌های حراج، انتخاب چهار کارت دورانداختنی، و مدیریت حکم کاملاً مهارتی‌ان. توی بلندمدت بازیکن بهتر برنده میشه.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>توی حاکمم میشه شلم بازی کرد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. می‌تونین با دوستاتون توی یه میز خصوصی بازی کنین یا با بازیکن‌های دیگه هم‌میز شین.</p></div>
      </div>
    </section>

    <section style={{ "padding": "0 0 56px" }}>
      <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "margin": "0 0 18px" }}><span aria-hidden="true" style={{ "width": "26px", "height": "26px", "flex": "0 0 26px", "border": "1px solid rgba(232,193,105,0.55)", "transform": "rotate(45deg)", "position": "relative" }}><span style={{ "position": "absolute", "inset": "5px", "background": "rgba(232,193,105,0.35)" }}></span></span><h2 style={{ "fontSize": "clamp(19px,3vw,24px)", "fontWeight": "800", "color": "#e8c169", "margin": "0" }}>بازی‌های دیگر</h2><span aria-hidden="true" style={{ "flex": "1", "height": "1px", "background": "linear-gradient(90deg,rgba(232,193,105,0.35),transparent)" }}></span></div>
      <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 12px" }}>اگه شلم رو یاد گرفتین، این‌ها رو هم امتحان کنین:</p>
      <div style={{ "display": "grid", "gap": "10px", "margin": "0 0 26px" }}>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>حکم</strong> — شناخته‌شده‌ترین بازی ورق ایران. ساده‌تر شروع میشه، عمیق ادامه پیدا می‌کنه.</p>
        </div>
        <div style={{ "display": "flex", "alignItems": "flex-start", "gap": "12px" }}>
          <span aria-hidden="true" style={{ "flex": "0 0 8px", "width": "8px", "height": "8px", "marginTop": "9px", "background": "rgba(232,193,105,0.55)", "transform": "rotate(45deg)" }}></span>
          <p style={{ "fontSize": "17px", "color": "#cdb797", "lineHeight": "2", "margin": "0" }}><strong style={{ "color": "#f3d391" }}>بی‌بی‌سلام</strong> — سبک‌تر، سریع‌تر، مناسب جمع‌های بزرگ‌تر.</p>
        </div>
      </div>
      <a href="https://hakem.am/" target="_blank" rel="noopener noreferrer" style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "16px", "padding": "15px 30px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "textDecoration": "none", "display": "inline-block" }}>شروع بازی</a>
    </section>
  </main>
    </>
  );
}
