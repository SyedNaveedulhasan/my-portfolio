// components/ProfileImage.jsx
import React from 'react';

const ProfileImage = ({ isLoaded, }) => {
  return (
    <div className={`flex justify-center lg:justify-end mt-2 transition-all mr-0 md:mr-25 lg:mr-25 2xl:mr-55 duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
      <div className="relative w-70 h-70 md:w-80 md:h-80 lg:w-96 lg:h-96">
        
        {/* Left angle bracket - outline only */}
        <div className="absolute -left-15 -top-2 text-transparent text-9xl font-bold opacity-50" 
             style={{ 
               WebkitTextStroke: '3px #e6594cdd',
               textStroke: '3px #e6594cdd'
             }}>
          &lt;
        </div>
        
        {/* Right angle bracket - outline only */}
        <div className="absolute -right-15 bottom-0 text-transparent text-9xl font-bold opacity-50"
             style={{ 
               WebkitTextStroke: '3px #e6594cdd',
               textStroke: '3px #e6594cdd'
             }}>
          &gt;
        </div>
        
        {/* Main circle with thick border */}
        <div className="w-70 h-70 md:w-82 md:h-82 lg:w-90 lg:h-90 mx-auto rounded-full border-[20px] border-[#e6594cdd] relative overflow-hidden shadow-3xl mt-5 shadow-[#4f2f33]">
          
          {/* Your image goes here */}
          <img 
            src={"/images/Adobe.png"} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full"
          />
          
        </div>
        
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-[#e6594c88] blur-3xl -z-10"></div>
        
      </div>
    </div>
  );
};

export default ProfileImage;