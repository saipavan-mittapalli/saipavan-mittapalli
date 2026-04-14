import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id='home'>

      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      
      <div className="hero-content">
        <span className="hero-badge">Available for freelance work</span>
        
        <h1 className="hero-name">
           <span className="gradient-text">Sai Pavan Mittapalli</span> 
        </h1>
        
        <h2 className="hero-tagline">Freelance Web Developer </h2>
        
        <p className="hero-desc">
          I build high-performance web applications  
          that help businesses stand out in the modern market.
        </p>
        
        <div className="hero-btns">
          <a href="#work" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-secondary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;