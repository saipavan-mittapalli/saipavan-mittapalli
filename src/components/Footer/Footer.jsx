import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo">PAVAN & Co<span>.</span></div>
            <p>Crafting digital experiences with purpose and precision.</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-column">
              <h4>Go to</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#work">Work</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Connect with me</h4>
              <ul>
                <li><a href="https://www.instagram.com/saipavan.mittapalli/" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://www.linkedin.com/in/saipavanmittapalli/" target="_blank" rel="noreferrer">LinkedIn</a></li>
                
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Sai Pavan Mittapalli. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;