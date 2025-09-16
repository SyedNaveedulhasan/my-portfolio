// components/Footer.jsx
import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { MdOutlineEmail } from 'react-icons/md';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-[#070b0f] border-t border-gray-700">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-12 py-5">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">
              Syed Naveed
            </h3>
            <p className="text-gray-300 leading-relaxed mb-0">
              Full-stack developer passionate about creating innovative web solutions 
              and bringing ideas to life through clean, efficient code.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-end gap-2">
                <MdOutlineEmail className="w-5 h-5"/>
                <span className="text-gray-300">syednaveedulhasan123@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2">
                <GrLocation className="w-5 h-5"/>
                <span className="text-gray-300">Karachi, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Syed Naveed Ul Hasan. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-[#ff725a] transition-colors duration-300">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#ff725a] transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;