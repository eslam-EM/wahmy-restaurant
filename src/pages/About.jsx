import React from 'react'
import './About.css'
import Navbar from '../components/Navbar'
import aboutImg from '../assets/aboutPage.jpg'

export default function About() {
  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
        </div>
      </div>

      <div className="container">
        
        {/* Who We Are */}
        <div className="about-section">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-2">
              <div className="about-text">
                <h2>من نحن</h2>
                <div className="about-line"></div>
                <p>
                  مطعم <strong>وهمي</strong> هو تجربة جديدة في عالم المطاعم، أطلقناه عام 2025 
                  لنعيد تعريف مفهوم الوجبات السريعة. نؤمن بأن الطعام الجيد ليس رفاهية، بل حق للجميع.
                </p>
                <p>
                  منذ اليوم الأول، اخترنا التميز في كل تفصيلة: من جودة المكونات إلى دقة التجهيز، 
                  ومن سرعة الخدمة إلى نظافة المكان. كل ذلك لنقدم لك وجبة لا تُنسى في كل زيارة.
                </p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="about-image">
                <img src={aboutImg} alt="مطعم وهمي" />
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="about-section philosophy-section">
          <div className="row">
            <div className="col-md-6">
              <div className="philosophy-card">
                <h3>رسالتنا</h3>
                <p>
                  نصنع طعاماً استثنائياً من مكونات طازجة، ونقدمه بخدمة سريعة وودودة، 
                  بسعر يناسب الجميع. نريد أن تكون كل وجبة تذكاراً جميلاً.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="philosophy-card">
                <h3>رؤيتنا</h3>
                <p>
                  أن نصبح الوجهة الأولى لكل من يبحث عن وجبة سريعة ولذيذة بلا تنازل، 
                  وأن نثبت أن الجودة والسعر المناسب يمكن أن يجتمعا معاً.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="about-section values-section">
          <h2 className="section-title">مبادئنا</h2>
          <div className="about-line center"></div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="value-item">
                <h4>الجودة أولاً</h4>
                <p>نختار أجود المكونات الطازجة يومياً، ولا نقدم إلا ما نأكله بأنفسنا.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="value-item">
                <h4>سرعة بدون تسرع</h4>
                <p>خدمة سريعة ودقيقة، مع الحفاظ على أعلى معايير الجودة والطعم.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="value-item">
                <h4>نظافة مطلقة</h4>
                <p>مطبخنا مفتوح ونظافتي شغلي الشاغل. نطبق أعلى معايير السلامة الغذائية.</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="value-item">
                <h4>شفافية تامة</h4>
                <p>أسعارنا واضحة، مكوناتنا معلنة، وعلاقتنا مع عملائنا مبنية على الثقة.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Numbers Section */}
        <div className="about-section numbers-section">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="number-card">
                <h2>2025</h2>
                <p>عام التأسيس</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="number-card">
                <h2>35+</h2>
                <p>نوع من الوجبات</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="number-card">
                <h2>5000+</h2>
                <p>عميل شهرياً</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="about-section quote-section">
          <div className="quote-box">
            <p className="quote-text">
              "نحن لا نقدم وجبات فقط.. نقدم تجربة كاملة تبدأ من أول قضمة وتستمر حتى آخر لقمة."
            </p>
            <p className="quote-author">— مطعم وهمي، 2025</p>
          </div>
        </div>

      </div>
    </div>
  )
}