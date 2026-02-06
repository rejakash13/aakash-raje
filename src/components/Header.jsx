import { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { isDark, toggleTheme } = useContext(ThemeContext)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h2>Aakash Raje</h2>
        </div>
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#skills" onClick={handleNavClick}>Skills</a>
          <a href="#projects" onClick={handleNavClick}>Projects</a>
          <a href="#experience" onClick={handleNavClick}>Experience</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  )
}
