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
        
        <h2 className="hero-tagline">Web Developer </h2>
        
        <p className="hero-desc">
          I build high-performance web applications and digital strategies 
          that help businesses stand out in the modern market.
        </p>
        
        <div className="hero-btns">
          <button className="btn-primary">View My Work</button>
          <button className="btn-secondary">Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;