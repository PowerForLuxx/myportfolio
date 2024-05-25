import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    setProjects(savedProjects);
  }, []);

  return (
    <div>
      <h1>Мои проекты</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h2>{project.name}</h2>
            <LazyLoad height={500} offset={500}>
              <img src={project.image} alt={project.name} style={{ maxWidth: '500px' }} /> 
            </LazyLoad>
            <p>
                <p>Github:</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
