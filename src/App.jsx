// App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="overflow-x-hidden bg-[#070b0f] text-white">
      <Navbar 
        scrollToSection={scrollToSection} 
        isLoaded={isLoaded}
      />
      
      <section id="home">
        <Home isLoaded={isLoaded} scrollToSection={scrollToSection} />
      </section>
      
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />

      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default App;