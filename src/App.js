import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Appliquer la classe dark sur <body>
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Router>
        {/* ✅ NAVBAR ICI */}
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
   
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          {/* ✅ AJOUTE FOOTER */}
          <Footer />
        </div>
      </Router>
    </div>
    
  );
}

export default App;
