import React, { useState } from 'react';
import '../styles/projects.css';

const projects = [
  {
    title: 'Portfolio Développeur',
    description: 'Un portfolio pour présenter mes projets et compétences.',
    image: '/images/portfolio.jpg',
    technologies: ['React', 'Tailwind CSS'],
    github: 'https://github.com/Phina-d/Mon-portfolio-React.js.git',
    demo: 'https://mon portfolio-react.js-git-master-phina-ds-projects.vercel.app/',
  },
  {
    title: 'Bootstrap Galerie',
    description: 'Site vitrine responsive utilisant Bootstrap.',
    image: '/images/recettes.jpg',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
  },
  {
    title: 'Manipulation du DOM',
    description: 'Projet JavaScript pur sur les événements et le DOM.',
    image: '/images/dom-project.jpg',
    technologies: ['JavaScript', 'DOM'],
  },
  {
    title: 'Accessoires React',
    description: 'Transmission de props et composants enfants.',
    image: '/images/mbappe.jpg',
    technologies: ['React'],
  },
  {
    title: "Gestion d'état React",
    description: 'useState et useEffect avec composants dynamiques.',
    image: '/images/victor-hugo.jpg',
    technologies: ['React'],
  },
  {
    title: 'Application ToDo',
    description: 'Une application pour gérer les tâches quotidiennes.',
    image: '/images/todo-app.jpg',
    technologies: ['JavaScript', 'HTML', 'CSS'],
  },
];

const allTechnologies = Array.from(new Set(projects.flatMap(p => p.technologies || [])));

function Projects() {
  const [selectedTech, setSelectedTech] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;
  const filteredProjects = selectedTech
    ? projects.filter(p => p.technologies?.includes(selectedTech))
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="projects-page">
      <section className="projects-container">
        <h1 className="projects-title">Mes Projets</h1>

        {/* Filtres */}
        <div className="filters">
          {allTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => {
                setSelectedTech(tech === selectedTech ? null : tech);
                setCurrentPage(1);
              }}
              className={`filter-btn ${selectedTech === tech ? 'active' : ''}`}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projets */}
        <div className="projects-grid">
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.technologies?.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      🔗 Code
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      🌐 Démo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination">
            <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
              ◀ Précédent
            </button>
            <span>Page {currentPage} / {totalPages}</span>
            <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
              Suivant ▶
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default Projects;
