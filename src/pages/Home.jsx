// pages/Home.jsx
import React from 'react';
import ProfileImage from '../components/ProfileImage';

const Home = ({ isLoaded, scrollToSection }) => {
  const technologies = [
    'HTML',
    'CSS',
    'Javascript',
    'MongoDB',
    'Express.js',
    'React.js',
    'Node.js'
  ];

  return (
    <section className="min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex-1 flex items-center max-w-full">
        <div className="grid lg:grid-cols-2 gap-4 md:text-left lg:text-left text-center items-center w-full">
          <div className="space-y-8 max-w-full mt-32 md:mt-4 lg:mt-4">
            <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h2 className="text-4xl md:ml-16 ml-0 lg:ml-16 font-bold text-white mb-6 break-words">Hello<span className='text-[#ff725a] font-extrabold font-serif'>.</span></h2>
              <div className="relative mb-4 max-w-full">
                <div className="absolute left-0 -bottom-2 md:bottom-2 lg:bottom-2 w-30 md:w-28 lg:w-28 h-0.5 bg-[#ff725a] ml-35 md:-ml-6 lg:-ml-6"></div>
                <h1 className="text-2xl lg:text-3xl font-medium mb-6 lg:ml-25 md:ml-25 sm:ml-0 break-words">
                  <span className="text-[#e0e0e0]"> I'm Syed Naveed</span>
                </h1>
              </div>
              <h1 className="md:text-4xl lg:text-5xl text-3xl font-bold md:ml-16 lg:ml-16 ml-0 mb-15 break-words">Mern Stack Developer</h1>
            </div>
            
            <div className={`flex flex-wrap gap-4 transition-all md:ml-16 lg:ml-16 sm:ml-0 justify-center md:justify-start lg:justify-start items-center duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn bg-[#ff725a] rounded-[1px] font-medium border-none text-[#e0e0e0] px-8 md:px-5 lg:px-5 py-7 md:py-2 lg:py-2 hover:scale-105 transition-transform text-sm"
              >
                Get Started
              </button>
              <button 
                className="btn btn-outline border-[#ff725a] border-2 rounded-[2px] font-medium text-[#e0e0e0] hover:bg-[#ff725a] hover:border-[#ff725a] px-5 md:px-4 lg:px-4 py-7 md:py-2 lg:py-2 hover:scale-105 transition-transform text-sm"
              >
               <a href="/images/Adobe.png" download>Download CV</a> 
              </button>
            </div>
          </div>

          <ProfileImage isLoaded={isLoaded} />
        </div>
      </div>

      {/* Technologies Bar */}
      <div className={`w-full py-5 bg-[#0b0f15] transition-all duration-1000 delay-500 overflow-x-hidden ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 md:px-6 max-w-full">
          {/* Updated: Single layout for all devices with flex wrap */}
          <div className="flex justify-center sm:justify-between items-center w-full flex-wrap gap-4 sm:gap-2">
            {technologies.map((tech, index) => (
              <div 
                key={tech}
                className={`text-gray-600 text-base sm:text-lg md:text-xl font-medium hover:text-[#838383] transition-colors duration-300 cursor-default text-center sm:flex-1 sm:min-w-0`}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        /* Fix navbar z-index and scrollbar overlap */
        :global(.navbar) {
          z-index: 9999 !important;
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
        }
        
        /* Ensure body doesn't overlap with fixed navbar */
        :global(body) {
          padding-top: 80px; /* Adjust based on your navbar height */
          overflow-x: hidden;
        }
        
        /* Prevent horizontal overflow */
        :global(html) {
          overflow-x: hidden;
        }
        
        * {
          box-sizing: border-box;
        }
        
        /* Prevent text overflow */
        .break-words {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
        
        /* Fix navbar hover effects */
        :global(.navbar a:hover) {
          transition: all 0.3s ease !important;
        }
        
        /* Ensure navbar stays above scrollbar */
        :global(::-webkit-scrollbar) {
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default Home;