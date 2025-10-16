// pages/Projects.jsx
import React, { useEffect, useRef, useState } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          // Small delay to ensure smooth transition
          setTimeout(() => {
            setIsVisible(true);
          }, 100);
        }
        // Remove the else block - don't reset animation
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const projects = [
    {
      title: 'Chat App',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB featuring user authentication, payment integration, and inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://via.placeholder.com/400x250?text=Chat+App&bg=1a1a2e&color=ffffff',
      category: 'Full Stack'
    },
    {
      title: 'Social Media App',
      description: 'Real-time social media application with chat functionality, user profiles, and content sharing capabilities.',
      tech: ['React Native', 'Firebase', 'Socket.io'],
      image: 'https://via.placeholder.com/400x250?text=Social+App&bg=1a1a2e&color=ffffff',
      category: 'Mobile App'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#070b0f] min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            My Work
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-[#ff725a] mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Here are some of the projects I've worked on, showcasing my skills in full-stack web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10 md:mt-12">
          <button className="bg-[#ff725a] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 border-2 border-[#ff725a] hover:bg-transparent hover:text-[#ff725a] text-sm sm:text-base">
            <a href="https://github.com/SyedNaveedulhasan?tab=repositories" className="block w-full h-full">
              View More Projects
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;