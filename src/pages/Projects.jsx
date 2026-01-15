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
      title: 'Realtime Chat Application',
      description: 'A full-stack MERN-based real-time chat application built with Socket.io, enabling instant messaging, user authentication, and live conversation updates with a modern responsive interface.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io'],
      image: '/images/chatapp.png',
      category: 'Web App / Communication',
      liveUrl: 'https://mern-chatapp-fbq6.onrender.com',
      githubUrl: 'https://github.com/SyedNaveedulhasan/MERN-ChatApp.git'
    },
    {
      title: 'DentWise – AI Dental Assistant',
      description: 'A full-stack AI-powered SaaS dental platform that provides 24/7 instant AI advice, personalized care recommendations, and smart appointment booking with secure authentication and subscription-based plans.',
      tech: [
        'Next.js',
        'PostgreSQL (Neon)',
        'Clerk Auth',
        'Vapi Voice AI Agent',
        'Resend Emails'
      ],
      image: '/images/dentwise.png',
      category: 'Healthcare / AI SaaS',
      liveUrl: 'https://dentwise-1.onrender.com',
      githubUrl: 'https://github.com/SyedNaveedulhasan/DentWise-.git'
    },
    {
      title: 'Finexa - Personal Finance Tracker',
      description: 'Finexa is a fintech web application built with React and Firebase that enables users to efficiently manage their personal finances by tracking income, expenses, and savings with real-time analytics and secure authentication.',
      tech: ['React', 'Firebase',],
      image: '/images/pft.png',
      category: 'Fintech / Web App',
      liveUrl: 'https://finexa-personal-finance-tracker.vercel.app/',
      githubUrl: 'https://github.com/SyedNaveedulhasan/Finexa-PersonalFinanceTracker.git'
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-8xl mx-auto">
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