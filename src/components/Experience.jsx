import './Experience.css'

export default function Experience() {
  const experiences = [
{
  id: 1,
  title: 'Bachelor of Computer Science',
  organization: 'Pacific School of Engineering',
  period: '2021 - 2025',
  description: 'Studied core computer science subjects including programming, data structures, databases, and software engineering. Gained strong problem-solving skills through academic projects and practical labs.',
  icon: '🎓',
  color: '#6496ff'
},

{
  id: 2,
  title: 'Full Stack Developer Trainee',
  organization: 'EasySkill Career Academy',
  period: '2025 - 2026',
  description: 'Learned full stack web development covering frontend and backend technologies. Built real-world projects and gained hands-on experience with modern development practices.',
  icon: '📚',
  color: '#8b5cf6'
},

{
  id: 3,
  title: 'Frontend Developer',
  organization: 'Divtech Systems',
  period: '2024 - 2025',
  description: 'Worked on building responsive and interactive user interfaces. Focused on performance optimization, clean UI design, and cross-browser compatibility.',
  icon: '💻',
  color: '#ec4899'
},

{
  id: 4,
  title: 'Frontend Developer',
  organization: 'Mahaim Architecture',
  period: '2025 - Present',
  description: 'Developing modern and scalable frontend applications with focus on user experience and performance. Implementing clean designs using best frontend practices.',
  icon: '💻',
  color: '#14b8a6'
}


  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience & Education</h2>
        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="exp-icon" style={{backgroundColor: exp.color}}>
                {exp.icon}
              </div>
              <div className="exp-content">
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <span className="exp-period">📅 {exp.period}</span>
                </div>
                <p className="exp-org">{exp.organization}</p>
                <p className="exp-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
