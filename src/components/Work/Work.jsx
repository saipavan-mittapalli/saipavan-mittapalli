import './Work.css';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: "Prunith Architects",
      category: "Architect",
      description: "A minimalist portfolio for a leading architectural firm.",
      link: "https://prunith-arch.vercel.app/"
    },
    {
      id: 2,
      title: "Coming Soon...",
      category: "Cloud Solution",
      description: "Cloud-based management for streamlined business operations.",
      link: "#work"
    },
    {
      id: 3,
      title: "Coming Soon...",
      category: "Vlogging",
      description: "Content strategy and growth for financial education brands.",
      link: "#work"
    }
  ];

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <h2 className="section-title">Selected <span className="gradient-text">Work</span></h2>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} target='_blank' className="project-link" >View Project →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;