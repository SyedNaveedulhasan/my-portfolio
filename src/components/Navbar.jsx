// components/Navigation.jsx
import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = ({ isLoaded, activeSection, scrollToSection }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="navbar w-screen py-4 sm:py-0 bg-transparent backdrop-blur-sm fixed top-0 z-50">
      <div className="navbar-start pl-4 md:pl-20 lg:pl-20">
        <button 
          onClick={() => scrollToSection('home')}
          className={`text-xl font-bold text-[#e0e0e0] transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        > 
          {/* Show full name on desktop and tablet, short name on mobile */}
          <span className="hidden sm:inline">Syed Naveed Ul Hasan</span>
          <span className="sm:hidden">Syed Naveed</span>
        </button>
      </div>
      
      {/* Desktop Menu */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-5 pr-28 space-x-8">
          {navItems.map((item, index) => (
            <li key={item.name}>
              <span 
                onClick={() => scrollToSection(item.id)}
                className={`inline-block cursor-pointer transition-all duration-300 text-[#e0e0e0] bg-transparent hover:bg-transparent focus:bg-transparent px-0 py-0 relative
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#db624c] after:transition-all after:duration-300
                  hover:after:w-[100%]
                  ${activeSection === item.id ? 'after:!w-[100%]' : ''}
                  ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile Menu */}
      <div className="navbar-end lg:hidden pr-0">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost text-[#e0e0e0] hover:bg-gray-800/30">
            <BiMenuAltRight className="w-6 h-6" />
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-gray-900/95 backdrop-blur-md rounded-xl w-56 border border-gray-700/50">
            {navItems.map((item) => (
              <li key={item.name} className="mb-1">
                <span 
                  onClick={() => scrollToSection(item.id)}
                  className={`px-5 py-4 block cursor-pointer relative w-full text-left rounded-lg font-medium overflow-hidden text-[#e0e0e0]
                    bg-transparent hover:bg-gray-800/50 focus:bg-gray-800/50 hover:scale-105 transform transition-transform duration-300
                    ${activeSection === item.id 
                      ? 'bg-gray-800/30 after:content-[\'\'] after:absolute after:bottom-2 after:left-5 after:w-[calc(100%-2.5rem)] after:h-0.5 after:bg-[#ff725a] after:rounded-full' 
                      : ''
                    }`}
                >
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;