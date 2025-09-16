// pages/About.jsx
import React, { useEffect, useRef, useState } from 'react';
import { LuMonitor } from "react-icons/lu";
import { BiServer } from "react-icons/bi";
import { PiDatabaseBold } from "react-icons/pi";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const services = [
    {
      icon: (
        <LuMonitor className='w-8 h-8' />
      ),
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces using React.js'
    },
    {
      icon: (
        <BiServer className='w-8 h-8'/>
      ),
      title: 'Backend Development',
      description: 'Creating robust APIs and server solutions with Node.js & Express'
    },
    {
      icon: (
        <PiDatabaseBold className='w-8 h-8'/>
      ),
      title: 'Database Management',
      description: 'Designing and managing MongoDB databases for scalable applications'
    }
  ];

  const stats = [
    { number: '3', suffix: '+', label: 'Completed Projects' },
    { number: '100', suffix: '%', label: 'Dedication' },
    { number: '1', suffix: '+', label: 'Years of experience' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#070b0f] min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Services with Timeline */}
          <div className="relative">
            {/* Animated Vertical Line */}
            <div className="absolute left-8 top-0 w-0.5 h-full bg-gray-700">
              <div 
                className={`w-0.5 bg-[#ff725a] transition-all duration-2000 ease-out ${
                  isVisible ? 'h-full' : 'h-0'
                }`}
              />
            </div>
            
            {services.map((service, index) => (
              <div key={index} className="relative flex items-start mb-12 group">
                {/* Orange Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-[#ff725a] rounded-full z-10 group-hover:scale-125 transition-transform duration-300"></div>
                
                {/* Icon */}
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 group-hover:border-[#ff725a] transition-all duration-300 mr-6 relative z-10">
                  {service.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#ff725a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - About Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center md:text-left">
                About me
              </h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6 text-center md:text-left">
                I am a MERN Stack Developer with over a year of hands-on experience in front-end development. I enjoy exploring and working with new technologies, and I see coding not only as a profession but also as a hobby that keeps me creative and motivated. With a strong problem-solving mindset, I aim to build efficient, scalable, and user-friendly applications. Based in Karachi, Pakistan, I am always eager to take on new challenges and continue growing as a developer.
              </p>
            
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 transition-colors">
                    {stat.number}
                    <span className="text-[#ff725a]">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;