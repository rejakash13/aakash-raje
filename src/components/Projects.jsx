import './Projects.css'

export default function Projects() {
  const projects = [

    {
      id: 1,
      title: 'Aakash Raje | Portfolio',
      description: 'Explore my personal portfolio showcasing my web development projects, skills, and experience. Built with React, JavaScript, and Tailwind CSS with a responsive design for all devices.',
      tech: ['React', 'JavaScript', 'Tailwind CSS'],
      featured: true,
      liveLink: 'https://aakash-raje.vercel.app/',
      githubLink: 'https://github.com/rejakash13/aakash-raje'
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
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">📱 Live Demo</a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-github">🐙 GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
