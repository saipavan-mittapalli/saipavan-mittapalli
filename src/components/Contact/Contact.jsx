import React, { useState } from 'react'; // Fix 1: Added import
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState(""); // Simplified from React.useState

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); // Give user immediate feedback

    const formData = new FormData(event.target);
    formData.append("access_key", "4f64be14-1174-471f-935d-ef0d3ab9bad7");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Sent Successfully");
        event.target.reset();

        // Clears the message after 7 seconds (per your logic)
        setTimeout(() => {
          setResult("");
        }, 7000); 
      } else {
        console.log("Error", data);
        setResult(data.message);
        setTimeout(() => setResult(""), 5000);
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Submit failed. Try again.");
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
        <p className="contact-subtitle">Have a project in mind? Let's build something extraordinary together.</p>
        
        <div className="contact-content">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <input name="Name" type="text" placeholder="Your Name*" required />
            </div>
            <div className="form-group">
              <input name="Phone number" type="text" placeholder="Your Mobile number*" required />
            </div>
            <div className="form-group">
              <input name="e-mail" type="email" placeholder="(Optional) Your Email" />
            </div>
            <div className="form-group">
              <textarea name="Description" placeholder="(Optional) Tell me about your project" rows="5"></textarea>
            </div>
            
            {/* Fix 2: Display the status message to the user */}
            {result && <p className="form-status">{result}</p>}
            
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          <div className="contact-info">
            <div className="info-item">
              <span>Email</span>
              <p>mittapallisaipavan@gmail.com</p>
            </div>
            <div className="info-item">
              <span>Location</span>
              <p>Karimnagar, Telangana</p>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/saipavan.mittapalli/" target='_blank' rel="noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/in/saipavanmittapalli/" target='_blank' rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;