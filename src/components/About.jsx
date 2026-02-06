import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-box">
            <div className="about-text">
              <p>
                I'm a passionate web developer with a strong foundation in computer engineering and a love for 
                creating responsive, high-performance applications. My journey in web development has equipped me 
                with a diverse skill set spanning both frontend and backend technologies.
              </p>
              <p>
                I thrive on challenges and am constantly eager to learn new technologies and best practices. Whether 
                it's crafting pixel-perfect user interfaces or architecting robust backend systems, I approach every 
                project with dedication and attention to detail.
              </p>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat">
              <div className="stat-icon">&lt;/&gt;</div>
              <h3>Code</h3>
            </div>
            <div className="stat">
              <div className="stat-icon">⚡</div>
              <h3>Performance</h3>
            </div>
            <div className="stat">
              <div className="stat-icon">🚀</div>
              <h3>Innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
