import './Skills.css'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      icon: '</>', 
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Material UI'],
      color: '#3b82f6'
    },
    {
      category: 'Backend',
      icon: '📦',
      skills: ['Node.js', 'Express'],
      color: '#10b981'
    },
    {
      category: 'Database',
      icon: '💾',
      skills: ['MongoDB', 'MySQL'],
      featured: true,
      color: '#d946ef'
    },
    {
      category: 'Tools',
      icon: '🔧',
      skills: ['Git & Github', 'VS Code', 'Postman', 'Figma'],
      color: '#f97316'
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Technologies</h2>
        <p className="skills-subtitle">A comprehensive toolkit for building modern web applications</p>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className={`skill-card ${cat.featured ? 'featured' : ''}`}>
              <div className="skill-icon" style={{backgroundColor: cat.color}}>
                {cat.icon}
              </div>
              <h3>{cat.category}</h3>
              <div className="skill-items">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
