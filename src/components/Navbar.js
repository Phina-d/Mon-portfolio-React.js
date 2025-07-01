import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Ferme le menu quand on change de page
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">Mon Portfolio</Link>
        </div>

        {/* Bouton hamburger mobile */}
        <button className="burger-btn" onClick={toggleMenu} aria-label="Menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu principal */}
        <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
          <Link to="/">Accueil</Link>
          <Link to="/about">À propos</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle Dark Mode">
            {darkMode ? '🌞' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
