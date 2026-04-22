  import React, { useState } from 'react'
  import './Contact.css'
  import Navbar from '../components/Navbar'
  import Locations from '../components/Locations'

  export default function Contact() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 5000)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }

    return (
      <div className="contact-page">
        <Navbar />

        {/* Hero Section */}
        <div className="contact-hero">
          <div className="contact-hero-overlay"></div>
          <div className="contact-hero-content">
            <h1>اتصل بنا</h1>
            <div className="hero-line"></div>
            <p>نحن هنا للإجابة على استفساراتك</p>
          </div>
        </div>

        <div className="container">
          
          {/* Locations Section - Component بتاعك */}
          <div className="locations-wrapper">
            <Locations />
          </div>

          {/* Contact Info & Form */}
          <div className="contact-section">
            <div className="row">
              
              {/* Info Side */}
              <div className="col-lg-5">
                <div className="contact-info">
                  <h2>تواصل معنا</h2>
                  <div className="contact-line"></div>
                  <p className="info-text">
                    لديك سؤال أو استفسار؟ لا تتردد في التواصل معنا. 
                    فريق خدمة العملاء لدينا يعمل على مدار الساعة للرد عليك.
                  </p>
                
                  <div className="info-item">
                    <h4>الهاتف</h4>
                    <p>+20 123 456 789</p>
                    <p>+20 987 654 321</p>
                  </div>
                  
                  <div className="info-item">
                    <h4>البريد الإلكتروني</h4>
                    <p>info@wahmy.com</p>
                    <p>support@wahmy.com</p>
                  </div>
                  
                  <div className="info-item">
                    <h4>ساعات العمل</h4>
                    <p>السبت - الخميس: 12:00 - 00:00</p>
                    <p>الجمعة: مغلق</p>
                  </div>
                </div>
              </div>
              
              {/* Form Side */}
              <div className="col-lg-7">
                <div className="contact-form">
                  <h2>أرسل لنا رسالة</h2>
                  <div className="contact-line"></div>
                  
                  {submitted && (
                    <div className="success-message">
                      تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="name"
                            placeholder="الاسم الكامل"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="البريد الإلكتروني"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="tel"
                            name="phone"
                            placeholder="رقم الهاتف"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="subject"
                            placeholder="الموضوع"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows="6"
                        placeholder="رسالتك..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn">
                      إرسال الرسالة
                    </button>
                  </form>
                </div>
              </div>
              
            </div>
          </div>
          
          
          
        </div>
      </div>
    )
  }
