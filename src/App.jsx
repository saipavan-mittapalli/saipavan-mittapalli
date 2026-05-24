import React from 'react'
import { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15, 
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll('.reveal');
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="app-wrapper">
      <Navbar />
      <div className="reveal"><Hero /></div>
      <div className="reveal"><Projects /></div>
      <div className="reveal"><Skills /></div>
      <div className="reveal"><Contact /></div>
      <Footer />
    </main>
  );
}
export default App;