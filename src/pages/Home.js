import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
  return (
    <main className="home-page">
      <div className="home-container">
        {/* Section principale */}
        <section className="home-section">
          <h1 className="home-title">Bienvenue sur mon portfolio</h1>
          <p className="home-description">
            Découvrez mes projets récents, mes compétences et mes expériences en développement web.
            Je crée des applications performantes, accessibles et modernes.
          </p>
           {/* ✅ Ajouter un conteneur centré */}
  <div style={{ textAlign: 'center' }}></div>
          <Link to="/projects">
            <button className="btn-primary">Voir mes projets</button>
          </Link>
        </section>

        {/* Aperçu des projets */}
        <section className="section">
          <h2 className="section-title">Aperçu des projets</h2>
          <div className="grid project-grid">
            {['a', 'b', 'c'].map((key, index) => (
              <article key={key} className="card">
                <h3 className="card-title">Projet {key.toUpperCase()}</h3>
                <p className="card-text">
                  {index ===  0 &&
                    'Une application web responsive utilisant React et Next.js.'}
                  {index ===  1 &&
                    'Un site e-commerce développé avec Tailwind CSS et API REST.'}
                  {index ===  2 &&
                    'Une application mobile cross-platform avec React Native.'}
                </p>
                <Link to={`/projects#projet-${key}`} className="card-link">
                  En savoir plus →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* Compétences */}
        <section className="section">
          <h2 className="section-title">Compétences</h2>
          <div className="grid skills-grid">
            {[
              { title: 'React.js', desc: 'Composants, Hooks, Router' },
              { title: 'Next.js', desc: 'SSR, SSG, API Routes' },
              { title: 'Tailwind CSS', desc: 'Styles modernes, Responsive' },
              { title: 'TypeScript', desc: 'Typage statique, Interfaces' },
            ].map((tech, i) => (
              <div key={i} className="card skill-card">
                <h3 className="card-title">{tech.title}</h3>
                <p className="card-text">{tech.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Expériences */}
        <section className="section">
          <h2 className="section-title">Expériences</h2>
          <div className="timeline">
            {[
              {
                title: 'Développeur Frontend - Freelance',
                date: '2024 - Aujourd’hui',
                desc: 'Création d’interfaces web modernes et responsives avec React, Next.js et Tailwind CSS.',
              },
              {
                title: 'Stagiaire Développeur Web - GOMYCODE',
                date: 'Janv. 2025 - Juin 2024',
                desc: 'Participation à la création d’un projet MERN Stack, intégration d’API REST et gestion du state avec Redux.',
              },
              {
                title: 'Formation Développement Web - GOMYCODE',
                date: '2024 - 2025',
                desc: 'Apprentissage approfondi de HTML, CSS, JavaScript, React.js, Node.js et MongoDB.',
              },
            ].map((exp, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-date">{exp.date}</span>
                  <p className="timeline-desc">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
