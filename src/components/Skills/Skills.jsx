import { useState } from 'react';
import './Skills.css';


const Skills = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (index) => {
    // If you click the same card, it flips back. Otherwise, it flips the new one.
    setFlippedCard(flippedCard === index ? null : index);
  };
  const skillCategories = [
    {
      title: "Development",
      skills: ["React", "JavaScript", "HTML5 & CSS3"]
    },
    {
      title: "Design & Tools",
      skills: ["Figma", "Responsive Design", "Git & GitHub", "Node.js"]
    },
    {
      title: "Marketing & Strategy",
      skills: ["SEO Optimization", "Digital Marketing", "Content Strategy"]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
        
        <div className="skills-grid">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skills-category">
              <h3>{cat.title}</h3>
              <ul>
                {cat.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;