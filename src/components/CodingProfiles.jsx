import './CodingProfiles.css'

export default function CodingProfiles() {
  const profiles = [
    {
      id: 1,
      name: 'GitHub',
      description: 'Open source contributions and personal projects',
      icon: '🐙',
      url: 'https://github.com/rejakash13',
      color: '#000000'
    },
    {
      id: 2,
      name: 'LeetCode',
      description: 'Problem solving and algorithm practice',
      icon: '⚡',
      url: 'https://leetcode.com',
      color: '#ffa116'
    },
    {
      id: 3,
      name: 'CodePen',
      description: 'Frontend experiments and creative coding',
      icon: '🎨',
      url: 'https://codepen.io',
      color: '#3b82f6',
      featured: true
    }
  ]

  return (
    <section className="coding-profiles">
      <div className="container">
        <h2>Coding Profiles</h2>
        <p className="profiles-subtitle">Connect with me on various coding platforms</p>
        <div className="profiles-grid">
          {profiles.map((profile) => (
            <div key={profile.id} className={`profile-card ${profile.featured ? 'featured' : ''}`}>
              <div className="profile-icon-wrapper">
                <div className="profile-icon" style={{backgroundColor: profile.color}}>
                  {profile.icon}
                </div>
              </div>
              <h3>{profile.name}</h3>
              <p>{profile.description}</p>
              <a href={profile.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
                Visit Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
