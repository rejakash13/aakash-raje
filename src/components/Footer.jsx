import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section footer-about">
          <h3>Aakash Raje</h3>
          <p>Full Stack Web Developer passionate about building fast, secure, and scalable web applications.</p>
        </div>

        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section footer-connect">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/rejakash13" target="_blank" rel="noopener noreferrer" title="GitHub" className="footer-social-link">
              <svg viewBox="0 0 100 100" width="20" height="20">
                <defs>
                  <linearGradient id="headGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFB347" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FFD4B4" stopOpacity="1" />
                  </linearGradient>
                  <linearGradient id="tentacleGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF1493" stopOpacity="1" />
                    <stop offset="100%" stopColor="#FF69B4" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <ellipse cx="35" cy="75" rx="12" ry="18" fill="url(#tentacleGradient2)" opacity="0.9"/>
                <ellipse cx="50" cy="80" rx="14" ry="20" fill="url(#tentacleGradient2)"/>
                <ellipse cx="65" cy="75" rx="12" ry="18" fill="url(#tentacleGradient2)" opacity="0.9"/>
                <ellipse cx="28" cy="70" rx="10" ry="15" fill="url(#tentacleGradient2)" opacity="0.8"/>
                <ellipse cx="72" cy="70" rx="10" ry="15" fill="url(#tentacleGradient2)" opacity="0.8"/>
                <circle cx="50" cy="45" r="28" fill="url(#headGradient2)"/>
                <circle cx="42" cy="40" r="3" fill="#1a1a1a"/>
                <circle cx="58" cy="40" r="3" fill="#1a1a1a"/>
                <path d="M 42 48 Q 50 52 58 48" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/aakash-raje-8846a5250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="footer-social-link">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Aakash Raje. All rights reserved.</p>
      </div>
    </footer>
  )
}
