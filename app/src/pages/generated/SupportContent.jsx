import { useGo } from '../../nav.jsx';


export default function SupportContent() {
  const go = useGo();
  return (
    <>
      <main style={{ "maxWidth": "920px", "margin": "0 auto", "padding": "0 clamp(16px,4vw,24px)" }}>
    <section style={{ "padding": "clamp(44px,7vw,80px) 0 40px" }}>
      <p style={{ "fontSize": "13px", "fontWeight": "800", "letterSpacing": "0.12em", "color": "#b8905a", "margin": "0 0 14px" }}>حمایت</p>
      <h1 style={{ "fontSize": "clamp(28px,6.2vw,48px)", "fontWeight": "900", "color": "#f3d391", "lineHeight": "1.3", "margin": "0 0 22px", "letterSpacing": "-0.015em" }}>بازی رایگان است. این صفحه اجباری نیست.</h1>
      <p style={{ "fontSize": "clamp(16px,2.2vw,19px)", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 16px", "maxWidth": "660px", "textWrap": "pretty" }}>حاکمم رایگان است و رایگان می‌ماند. برای بازی کردن، گرفتن رتبه و شرکت در تورنمنت‌ها لازم نیست یک ریال بدهید.</p>
      <p style={{ "fontSize": "clamp(16px,2.2vw,19px)", "color": "#cdb797", "lineHeight": "2", "margin": "0", "maxWidth": "660px", "textWrap": "pretty" }}>این صفحه برای کسانی است که کارمان برایشان ارزش دارد و دوست دارند بخشی از آن باشند.</p>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 24px" }}>حمایت شما دو جا می‌رود</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(280px,100%),1fr))", "gap": "20px", "margin": "0 0 20px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>به خودِ بازی</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0", "textWrap": "pretty" }}>سرورها، ساخت بازی‌های بعدی، و تحقیق و تولید محتوای فرهنگی‌ای که داخل بازی می‌آید — عکاسی، ویدیو، متن، و مجوز استفاده از آثار.</p>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <h3 style={{ "fontSize": "clamp(16px,2.2vw,19px)", "fontWeight": "800", "color": "#f3d391", "margin": "0 0 12px" }}>به تیم‌های ایرانی دیگر</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0", "textWrap": "pretty" }}>هر سطح حمایت با یکی از تیم‌هایی انجام می‌شود که خودمان دوستشان داریم و کارشان را دنبال می‌کنیم. بخشی از مبلغ به آن تیم می‌رسد، و چیزی که آنها ساخته‌اند به دست شما.</p>
        </div>
      </div>
      <p style={{ "fontSize": "18px", "color": "#e6d5b8", "lineHeight": "2", "margin": "0", "maxWidth": "700px", "textWrap": "pretty" }}>این عمدی است. ما تنها کسانی نیستیم که برای این فرهنگ کار می‌کنند، و ترجیح می‌دهیم حمایت شما بیش از یک جا را زنده نگه دارد.</p>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>سطح‌های حمایت</h2>
      <div style={{ "display": "grid", "gap": "16px" }}>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <div style={{ "display": "flex", "gap": "12px", "alignItems": "baseline", "flexWrap": "wrap", "margin": "0 0 12px" }}>
            <h3 style={{ "fontSize": "clamp(17px,2.5vw,21px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>همراه</h3>
            <span style={{ "fontSize": "15px", "color": "#b8905a" }}>هر مبلغی که دوست دارید.</span>
          </div>
          <ul style={{ "margin": "0", "paddingInlineStart": "22px", "fontSize": "16px", "color": "#cdb797", "lineHeight": "2.1" }}>
            <li>نامتان در بخش سازندگان بازی می‌آید</li>
            <li>نشان «همراه» روی پروفایلتان</li>
          </ul>
        </div>
        <div style={{ "background": "rgba(255,255,255,0.035)", "border": "1px solid rgba(232,193,105,0.2)", "borderRadius": "14px", "padding": "26px" }}>
          <div style={{ "display": "flex", "gap": "12px", "alignItems": "baseline", "flexWrap": "wrap", "margin": "0 0 10px" }}>
            <h3 style={{ "fontSize": "clamp(17px,2.5vw,21px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>یادگار</h3>
            <span style={{ "fontSize": "15px", "color": "#b8905a" }}>حدود [۲۵ یورو]</span>
          </div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 12px", "textWrap": "pretty" }}>با همکاری [نام تیم شریک] — تیمی که اشیای کوچک با نقش‌های ایرانی می‌سازد: برج آزادی، پیکان، و چیزهایی از این جنس.</p>
          <ul style={{ "margin": "0", "paddingInlineStart": "22px", "fontSize": "16px", "color": "#cdb797", "lineHeight": "2.1" }}>
            <li>یکی از ساخته‌هایشان برایتان ارسال می‌شود</li>
            <li>نامتان در بخش سازندگان</li>
            <li>نشان «یادگار» روی پروفایل</li>
          </ul>
        </div>
        <div style={{ "background": "rgba(232,193,105,0.07)", "border": "1px solid rgba(232,193,105,0.34)", "borderRadius": "14px", "padding": "26px" }}>
          <div style={{ "display": "flex", "gap": "12px", "alignItems": "baseline", "flexWrap": "wrap", "margin": "0 0 10px" }}>
            <h3 style={{ "fontSize": "clamp(17px,2.5vw,21px)", "fontWeight": "800", "color": "#f3d391", "margin": "0" }}>پوشیدنی</h3>
            <span style={{ "fontSize": "15px", "color": "#b8905a" }}>حدود [۱۰۰ یورو]</span>
          </div>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 12px", "textWrap": "pretty" }}>با همکاری [نام برند شریک] — برندی که لباس با طراحی ایرانی می‌سازد.</p>
          <ul style={{ "margin": "0", "paddingInlineStart": "22px", "fontSize": "16px", "color": "#cdb797", "lineHeight": "2.1" }}>
            <li>یک لباس با طرحی که مخصوص همین کار طراحی شده، به هر جای دنیا که هستید ارسال می‌شود</li>
            <li>نامتان در بخش سازندگان</li>
            <li>نشان اختصاصی روی پروفایل</li>
            <li>دعوت به جلسه‌های باز تیم، جایی که می‌گوییم روی چه چیزی کار می‌کنیم و نظرتان را می‌پرسیم</li>
          </ul>
        </div>
      </div>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>تیم‌هایی که با آنها کار می‌کنیم</h2>
      <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(240px,100%),1fr))", "gap": "18px" }}>
        <div style={{ "border": "1px solid rgba(232,193,105,0.18)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "18px", "fontWeight": "800", "color": "#f2ddb4", "margin": "0 0 10px" }}>[نام شریک]</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 14px" }}>[یک تا دو جمله: چه کار می‌کنند و چرا برایمان مهم است.]</p>
          <a href="#" style={{ "fontSize": "15px", "fontWeight": "700" }}>دیدن کارشان ←</a>
        </div>
        <div style={{ "border": "1px solid rgba(232,193,105,0.18)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "18px", "fontWeight": "800", "color": "#f2ddb4", "margin": "0 0 10px" }}>[نام شریک]</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 14px" }}>[یک تا دو جمله.]</p>
          <a href="#" style={{ "fontSize": "15px", "fontWeight": "700" }}>دیدن کارشان ←</a>
        </div>
        <div style={{ "border": "1px solid rgba(232,193,105,0.18)", "borderRadius": "14px", "padding": "24px" }}>
          <h3 style={{ "fontSize": "18px", "fontWeight": "800", "color": "#f2ddb4", "margin": "0 0 10px" }}>[نام شریک — مثال: پروژه‌ای که آثار هنری ایران را دیجیتال و آرشیو می‌کند]</h3>
          <p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0 0 14px", "textWrap": "pretty" }}>کارشان این است که آثار هنری ایرانی را عکاسی، مستند و در یک پایگاه داده‌ی ماندگار نگه‌داری کنند تا از بین نروند. بخشی از حمایت شما مستقیم به همین کار می‌رسد.</p>
          <a href="#" style={{ "fontSize": "15px", "fontWeight": "700" }}>دیدن کارشان ←</a>
        </div>
      </div>
    </section>

    <section style={{ "padding": "44px 0", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 20px" }}>چرا این کار را می‌کنیم</h2>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0 0 18px", "maxWidth": "720px", "textWrap": "pretty" }}>خیلی‌ها دور از ایران‌اند و راهی ندارند که کاری بکنند — چیزی که بشود دید و لمس کرد. این یکی از آن راه‌هاست: یک بازی که با رفقایتان بازی می‌کنید، یک شیء کوچک که به دستتان می‌رسد، و یک تیم ایرانی که به‌خاطر شما یک قدم جلوتر می‌رود.</p>
      <p style={{ "fontSize": "18px", "color": "#cdb797", "lineHeight": "2", "margin": "0", "maxWidth": "720px", "textWrap": "pretty" }}>و برای ما، این تنها راهی است که می‌توانیم این کار را بدون تبلیغات مزاحم و بدون فروختن چیزی که بازی را ناقص کند، ادامه بدهیم.</p>
    </section>

    <section style={{ "padding": "44px 0 56px", "borderTop": "1px solid rgba(232,193,105,0.13)" }}>
      <h2 style={{ "fontSize": "clamp(21px,3.8vw,28px)", "fontWeight": "800", "color": "#e8c169", "margin": "0 0 22px" }}>سؤالات متداول</h2>
      <div style={{ "display": "grid", "gap": "22px", "maxWidth": "760px" }}>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>اگر حمایت نکنم، چیزی از بازی کم می‌شود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>نه. هیچ بخشی از بازی پشت حمایت قفل نیست و نخواهد بود.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>پول کجا می‌رود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بخشی به ادامه‌ی ساخت بازی و تولید محتوای فرهنگی آن، و بخشی به تیم شریک همان سطح.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>از خارج از ایران هم می‌شود حمایت کرد؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. روش‌های پرداخت در صفحه‌ی پرداخت نمایش داده می‌شود.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>ارسال به خارج از کشور انجام می‌شود؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله، برای سطح‌هایی که شامل یک شیء هستند. زمان رسیدن بسته به مقصد متفاوت است.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>می‌توانم به‌جای دریافت هدیه، فقط حمایت کنم؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله. سطح «همراه» دقیقاً برای همین است.</p></div>
        <div><h3 style={{ "fontSize": "17px", "fontWeight": "700", "color": "#f2ddb4", "margin": "0 0 8px" }}>می‌توانم مبلغ بزرگ‌تری حمایت کنم یا اسپانسر شویم؟</h3><p style={{ "fontSize": "16px", "color": "#cdb797", "lineHeight": "1.95", "margin": "0" }}>بله — از <a href="#" onClick={go.contact}>صفحه‌ی تماس با ما</a> در ارتباط باشید.</p></div>
      </div>
    </section>
  </main>
    </>
  );
}
