import './Hero.css'

export default function Hero() {
  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // Create a download link or fetch resume file
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Update with your resume file path
    link.download = 'Aakash_Raje_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleLinkedIn = () => {
    window.open('https://linkedin.com/in/YOUR_PROFILE', '_blank')
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">Hello, I'm</p>
            <h1><span className="highlight">Aakash Raje</span></h1>
            <p className="subtitle">Full Stack Web Developer</p>
            <p className="description">
              I build fast, secure, and scalable web applications.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => handleNavigate('projects')}>
                → View Projects
              </button>
              <button className="btn btn-secondary" onClick={() => handleNavigate('contact')}>
                ✉ Contact Me
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadResume}>
                ⬇ Download Resume
              </button>
              <button className="btn btn-secondary" onClick={handleLinkedIn}>
                🔗 LinkedIn
              </button>
            </div>
          </div>
          <div className="avatar-container">
            <img src="/aakash11.png" alt="Aakash Raje" className="avatar" />
          </div>
          </div>
          <div className="scroll-indicator">⬇</div>
          </div>
          </section>
          )
          }
