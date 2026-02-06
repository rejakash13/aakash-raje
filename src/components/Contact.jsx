import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState('')

  useEffect(() => {
    // Initialize EmailJS with your Public Key
    emailjs.init('B9I0g4X5pUwDBoZUo')
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await emailjs.send(
        'service_toqxiyr', // Service ID
        'template_sovh4en',
        {
          to_email: 'rajeakash641@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message
        }
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(''), 5000)
    } catch (error) {
      console.error('Email send error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">Let's build something great together 🚀</p>
        
        <div className="contact-content">
          <div className="contact-left">
            <div className="form-section">
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? '⏳ Sending...' : '✉ Send Message'}
                </button>
                {status === 'success' && (
                  <div className="status-message success">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="status-message error">
                    ✗ Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="contact-right">
            <div className="info-section">
              <h3>Contact Information</h3>
              <p>Feel free to reach out through any of these channels</p>
              
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <span className="label">Email</span>
                  <a href="mailto:rajeakash641@gmail.com">rajeakash641@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <span className="label">Phone</span>
                  <a href="tel:+919313570158">9313570158</a>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Social Links</h3>
              <div className="social-links-container">
                <a href="https://www.linkedin.com/in/aakash-raje-8846a5250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link linkedin-icon" title="LinkedIn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                  </svg>
                </a>
                <a href="https://github.com/rejakash13" target="_blank" rel="noopener noreferrer" className="social-link github-icon" title="GitHub">
                  <svg viewBox="0 0 100 100" width="24" height="24">
                    <defs>
                      <linearGradient id="headGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFD4B4" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="tentacleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF1493" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FF69B4" stopOpacity="1" />
                      </linearGradient>
                    </defs>
                    <ellipse cx="35" cy="75" rx="12" ry="18" fill="url(#tentacleGradient)" opacity="0.9"/>
                    <ellipse cx="50" cy="80" rx="14" ry="20" fill="url(#tentacleGradient)"/>
                    <ellipse cx="65" cy="75" rx="12" ry="18" fill="url(#tentacleGradient)" opacity="0.9"/>
                    <ellipse cx="28" cy="70" rx="10" ry="15" fill="url(#tentacleGradient)" opacity="0.8"/>
                    <ellipse cx="72" cy="70" rx="10" ry="15" fill="url(#tentacleGradient)" opacity="0.8"/>
                    <circle cx="50" cy="45" r="28" fill="url(#headGradient)"/>
                    <circle cx="42" cy="40" r="3" fill="#1a1a1a"/>
                    <circle cx="58" cy="40" r="3" fill="#1a1a1a"/>
                    <path d="M 42 48 Q 50 52 58 48" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
