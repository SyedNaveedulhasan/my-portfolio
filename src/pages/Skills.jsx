// pages/Skills.jsx
import React, { useEffect, useRef, useState } from 'react';

const Skills = () => {
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

  const technologies = [
    {
      name: 'React.js',
      icon: (
        <img className="w-16 h-16" src="/images/react.svg" alt="Logo" />
      )
    },
    {
      name: 'Node.js',
      icon: (
        <img className="w-16 h-16" src="/images/nodejs.svg" alt="Logo" />
      )
    },
    {
      name: 'Express.js',
      icon: (
        <img className="w-16 h-16 bg-white border-4" style={{borderRadius: "50px"}} src="/images/express.svg" alt="Logo" />
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <img className="w-16 h-16" src="/images/mongodb.svg" alt="Logo" />
      )
    },
    {
      name: 'HTML5',
      icon: (
        <img className="w-16 h-16" src="/images/html.svg" alt="Logo" />
      )
    },
    {
      name: 'CSS3',
      icon: (
        <img className="w-16 h-16" src="/images/css.svg" alt="Logo" />
      )
    },
    {
      name: 'JavaScript',
      icon: (
        <img className="w-16 h-16" src="/images/javascript.svg" alt="Logo" />
      )
    },
    {
      name: 'Bootstrap',
      icon: (
        <img className="w-16 h-16" src="/images/bootstrap.svg" alt="Logo" />
      )
    },
    {
      name: 'TailwindCSS',
      icon: (
        <img className="w-16 h-16" src="/images/tailwindcss.svg" alt="Logo" />
      )
    },
    {
      name: 'MaterialUI',
      icon: (
        <img className="w-16 h-16" src="/images/material.svg" alt="Logo" />
      )
    },
    {
      name: 'ReduxToolkit',
      icon: (
        <img className="w-16 h-16" src="/images/redux.svg" alt="Logo" />
      )
    },
    {
      name: 'Socket.io',
      icon: (
        <img className="w-16 h-16" src="/images/socket.svg" alt="Logo" />
      )
    }
  ];

  const tools = [
    {
      name: 'Git',
      icon: (
        <img className="w-17 h-17" src="/images/git.svg" alt="Logo" />
      )
    },
    {
      name: 'GitHub',
      icon: (
        <img className="w-17 h-17 bg-white border-1" style={{borderRadius: "50px"}} src="/images/github.svg" alt="Logo" />
      )
    },
    {
      name: 'Firebase',
      icon: (
        <img className="w-16 h-16" src="/images/firebase.svg" alt="Logo" />
      )
    },
    {
      name: 'Postman',
      icon: (
        <img className="w-16 h-16" src="/images/postman2.svg" alt="Logo" />
      )
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#070b0f] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-[#ff725a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to create amazing digital experiences.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Technologies
            </h3>
            <div className="w-16 h-0.5 bg-[#ff725a] mx-auto"></div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-6 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 80}ms` : '0ms'
                }}
              >
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-4">
                  {tech.icon}
                </div>
                <h4 className="text-white text-center font-medium text-sm group-hover:text-[#c9c9c9] transition-colors duration-300">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Tools
            </h3>
            <div className="w-16 h-0.5 bg-[#ff725a] mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-6 transition-all duration-700 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isVisible ? `${(technologies.length * 80) + (index * 80)}ms` : '0ms'
                }}
              >
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 mb-4">
                  {tool.icon}
                </div>
                <h4 className="text-white text-center font-medium text-sm group-hover:text-[#c9c9c9] transition-colors duration-300">
                  {tool.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;