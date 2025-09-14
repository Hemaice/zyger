import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Values from './components/Values';
import Mission from './components/Mission';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RequestDemo from "./components/RequestDemo";

function App() {
  useEffect(() => {
    // Smooth scrolling for all internal links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add smooth scroll behavior to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Expertise />
      <Values />
      <Mission />
      <Features />
      <RequestDemo/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
