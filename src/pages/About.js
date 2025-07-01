import React from 'react';

function About() {
  return (
    <main className="about-container">
      <div className="about-content">
        {/* Photo de profil */}
        <div className="profile-pic">
          <img
            src="/images/profile.jpg"
            alt="Photo de profil"
            className="img-circle"
          />
        </div>

        <h1 className="title">À propos de moi</h1>

        <section className="section-text">
          <p>
            Bonjour ! Je suis une développeuse passionnée spécialisée dans le développement web moderne. J'aime créer des applications élégantes, performantes et accessibles.
          </p>
          <p>
            Débutante dans les technologies comme React, Next.js, et Tailwind CSS, j'aime travailler sur des projets qui ont un vrai impact.
          </p>
          <p>
            En dehors du code, j'aime apprendre de nouvelles technologies, contribuer à des projets open source, et partager mes connaissances avec la communauté.
          </p>
        </section>

        <section className="section-text">
          <h2 className="subtitle">Compétences clés</h2>
          <ul>
            <li>Développement frontend (React, Tailwind CSS)</li>
            <li>JavaScript / TypeScript moderne</li>
            <li>Conception responsive et accessibilité</li>
            <li>Déploiement et optimisation des performances</li>
          </ul>
        </section>

        <section className="section-text">
          <h2 className="subtitle">Me contacter</h2>
          <p>
            N'hésitez pas à m'envoyer un message via la page{' '}
            <a href="/contact">Contact</a>.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
