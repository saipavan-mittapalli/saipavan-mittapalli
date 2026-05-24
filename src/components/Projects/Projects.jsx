import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    thumbnail:
      "./src/assets/prunitharchitect.png",
    category: "Architecture & Design",
    title: "Prunith Architects",
    description:
      "A minimalist portfolio for a leading architectural firm. Showcasing their innovative projects with a sleek, modern design and intuitive navigation.",
    url: "https://prunith-arch.vercel.app/",
  },
  {
    id: 2,
    thumbnail:
      "./src/assets/mpharmacyfoodcourt.png",
    category: "FOOD COURT",
    title: "M Pharmacy Food Court",
    description:
      "A vibrant website for a popular food court, showcasing menus and promotions. The design is colorful and engaging, with a focus on user experience and easy navigation.",
    url: "https://mpharmacy-foodcourt.vercel.app/",
  },
  {
    id: 3,
    thumbnail:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    category: "Freelance Project",
    title: "Restaurant Landing Page",
    description:
      "A stylish landing page designed for a premium restaurant brand with cinematic visuals and smooth transitions.",
    url: "https://saipavan-mittapalli.vercel.app/#projects",
  },
  
];

const Projects = () => {
  return (
    <section className="projects-section" id="work">
      <div className="projects-header">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <p className="projects-description">
          A collection of projects crafted with creativity, performance, and
          modern user experience in mind.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-wrapper">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="project-image"
              />
            </div>

            <div className="project-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3 className="project-card-title">
                {project.title}
              </h3>

              <p className="project-card-description">
                {project.description}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
