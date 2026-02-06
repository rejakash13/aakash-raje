import './Projects.css'

export default function Projects() {
  const projects = [
   
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern portfolio website showcasing my projects and skills with responsive design.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      featured: true
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>eatured Projectse</h2>
        <p className="projects-subtitle">A showcase of my recent work and personal projects</p>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <button className="project-link">📱 Live Demo</button>
                <button className="project-github">🐙 GitHub</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
