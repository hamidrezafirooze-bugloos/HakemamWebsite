import { useRef, useState } from 'react';
import { useGo } from '../../nav.jsx';

const SUBJECTS = ['مشکل فنی', 'گزارش تخلف', 'همکاری', 'تجاری', 'رسانه', 'سایر'];

export default function ContactContent() {
  const go = useGo();
  const [subject, setSubject] = useState(SUBJECTS[0]);
  const formRef = useRef(null);

  const goToForm = (chosenSubject) => (e) => {
    e.preventDefault();
    setSubject(chosenSubject);
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <main style={{ "maxWidth": "920px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "padding": "clamp(44px,7vw,80px) 0 40px" }}>
      <h1 style={{ "fontSize": "clamp(28px,6.2vw,48px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.3", "margin": "0 0 22px", "letterSpacing": "-0.015em" }}>تماس با ما</h1>
      <p style={{ "fontSize": "clamp(16px,2.2vw,19px)", "color": "#cdb797", "lineHeight": "2", "margin": "0", "maxWidth": "620px" }}>خوشحال می‌شویم بشنویم. برای اینکه سریع‌تر جواب بگیرید، از مسیر مناسب اقدام کنید.</p>
    </section>

    <section style={{ "padding": "0 0 44px" }}>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "18px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>مشکلی در بازی دارید؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 12px" }}>اگر بازی درست کار نمی‌کند، امتیازتان اشتباه ثبت شده، یا در پرداخت مشکلی پیش آمده، از فرم پایین همین صفحه استفاده کنید و موضوع را «مشکل فنی» انتخاب کنید.</p>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>در پیامتان نام کاربری، دستگاه و توضیح کوتاهی از آنچه اتفاق افتاده بنویسید — پیگیری را خیلی سریع‌تر می‌کند.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>رفتار نامناسبی دیده‌اید؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 12px" }}>اگر بازیکنی مزاحمت ایجاد کرده یا رفتاری خلاف قواعد بازی داشته، به ما بگویید. در پیامتان بنویسید:</p>
          <ul style={{ "margin": "0 0 18px", "paddingInlineStart": "22px", "fontSize": "16px", "color": "#cdb797", "lineHeight": "2" }}>
            <li>نام کاربری خودتان و نام کاربری آن بازیکن</li>
            <li>تاریخ تقریبی بازی</li>
            <li>توضیح کوتاهی از آنچه اتفاق افتاده</li>
          </ul>
          <button onClick={goToForm('گزارش تخلف')} style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "12px 22px", "borderRadius": "9px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>گزارش تخلف</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>می‌خواهید با ما کار کنید؟</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 12px" }}>اگر بازی‌ساز، طراح، نوازنده، صداپیشه یا پژوهشگر تاریخ و فرهنگ ایران هستید و این کار برایتان جالب است، خوشحال می‌شویم بشناسیمتان.</p>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 18px" }}>لازم نیست رزومه‌ی رسمی بفرستید — بنویسید چه کاری بلدید و چه چیزی از این پروژه برایتان جذاب بوده.</p>
          <button onClick={goToForm('همکاری')} style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "12px 22px", "borderRadius": "9px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>پیام همکاری</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>کسب‌وکار و همکاری تجاری</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 18px" }}>اگر برند یا شرکتی هستید که روی همین فرهنگ کار می‌کند، یا پیشنهاد همکاری و اسپانسری دارید، بنویسید.</p>
          <button onClick={goToForm('تجاری')} style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "12px 22px", "borderRadius": "9px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>پیام تجاری</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>رسانه</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 18px" }}>برای مصاحبه، گزارش یا دریافت مواد رسانه‌ای — تصاویر، لوگو، اطلاعات پایه — تماس بگیرید.</p>
          <button onClick={goToForm('رسانه')} style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "12px 22px", "borderRadius": "9px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>پیام رسانه</button>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>هر حرف دیگری</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 18px" }}>اگر بازی کرده‌اید و نظری دارید — چه تعریف، چه انتقاد، چه پیشنهاد یک بازی ورق ایرانی دیگر — همان‌قدر برایمان ارزش دارد.</p>
          <button onClick={goToForm('سایر')} style={{ "background": "transparent", "color": "#f0cf84", "fontWeight": "700", "fontSize": "15px", "padding": "12px 22px", "borderRadius": "9px", "border": "1px solid rgba(232,193,105,0.45)", "cursor": "pointer", "fontFamily": "inherit" }}>پیام عمومی</button>
        </div>
      </div>
    </section>

    <section ref={formRef} style={{ "padding": "44px 0 56px", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 24px" }}>فرم تماس</h2>
      <div style={{ "display": "grid", "gap": "20px", "maxWidth": "560px" }}>
        <label style={{ "display": "grid", "gap": "8px" }}>
          <span style={{ "fontSize": "15px", "fontWeight": "700", "color": "#f2ddb4" }}>موضوع</span>
          <select value={subject} onChange={(e) => setSubject(e.target.value)} style={{ "fontFamily": "inherit", "fontSize": "16px", "padding": "13px 14px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.3)", "background": "rgba(0,0,0,0.22)", "color": "#e6d5b8" }}>
            {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </label>
        <label style={{ "display": "grid", "gap": "8px" }}>
          <span style={{ "fontSize": "15px", "fontWeight": "700", "color": "#f2ddb4" }}>نام <span style={{ "fontWeight": "400", "color": "#b0907a" }}>— اختیاری</span></span>
          <input style={{ "fontFamily": "inherit", "fontSize": "16px", "padding": "13px 14px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.3)", "background": "rgba(0,0,0,0.22)", "color": "#e6d5b8" }} />
        </label>
        <label style={{ "display": "grid", "gap": "8px" }}>
          <span style={{ "fontSize": "15px", "fontWeight": "700", "color": "#f2ddb4" }}>نام کاربری در بازی <span style={{ "fontWeight": "400", "color": "#b0907a" }}>— اختیاری، برای موضوع‌های فنی و گزارش کمک‌کننده است</span></span>
          <input style={{ "fontFamily": "inherit", "fontSize": "16px", "padding": "13px 14px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.3)", "background": "rgba(0,0,0,0.22)", "color": "#e6d5b8" }} />
        </label>
        <label style={{ "display": "grid", "gap": "8px" }}>
          <span style={{ "fontSize": "15px", "fontWeight": "700", "color": "#f2ddb4" }}>راه تماس <span style={{ "fontWeight": "400", "color": "#b0907a" }}>— ایمیل یا شماره</span></span>
          <input style={{ "fontFamily": "inherit", "fontSize": "16px", "padding": "13px 14px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.3)", "background": "rgba(0,0,0,0.22)", "color": "#e6d5b8" }} />
        </label>
        <label style={{ "display": "grid", "gap": "8px" }}>
          <span style={{ "fontSize": "15px", "fontWeight": "700", "color": "#f2ddb4" }}>پیام</span>
          <textarea rows="5" style={{ "fontFamily": "inherit", "fontSize": "16px", "padding": "13px 14px", "borderRadius": "10px", "border": "1px solid rgba(232,193,105,0.3)", "background": "rgba(0,0,0,0.22)", "color": "#e6d5b8", "resize": "vertical" }}></textarea>
        </label>
        <button style={{ "background": "#d8ae44", "color": "#33100d", "fontWeight": "800", "fontSize": "17px", "padding": "15px 34px", "borderRadius": "10px", "border": "none", "cursor": "pointer", "fontFamily": "inherit", "justifySelf": "start" }}>ارسال</button>
      </div>
      <p style={{ "fontSize": "15px", "color": "#b0907a", "margin": "22px 0 0" }}>معمولاً ظرف چند روز کاری جواب می‌دهیم. اگر موضوع فوری است، در پیامتان بنویسید.</p>
    </section>
  </main>
    </>
  );
}
