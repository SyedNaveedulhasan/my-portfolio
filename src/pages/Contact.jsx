// pages/Contact.jsx
import React, { useEffect, useRef, useState } from 'react';
import ContactForm from '../components/ContactForm';
import { GrLocation } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
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

  const contactInfo = [
    {
      icon: (
        <GrLocation className="w-6 h-6"/>
      ),
      title: 'Location',
      info: 'Karachi, Sindh, Pakistan',
      subInfo: 'Available for on-site opportunities'
    },
    {
      icon: (
        <MdOutlineEmail className="w-6 h-6"/>
      ),
      title: 'Email',
      info: 'syednaveedulhasan123@gmail.com',
      subInfo: 'Available 24/7 for inquiries'
    },
    {
      icon: (
        <HiOutlinePhone className="w-6 h-6"/>
      ),
      title: 'Phone',
      info: '+92 329 3435434',
      subInfo: 'Mon - Fri, 9AM - 6PM PKT'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <SiGithub className="w-5 h-5"/>
      ),
      url: 'https://github.com/SyedNaveedulhasan'
    },
    {
      name: 'LinkedIn',
      icon: (
        <BsLinkedin className="w-5 h-5"/>
      ),
      url: 'https://www.linkedin.com/in/syed-naveed-ul-hasan-5879782a4/'
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-[#070b0f] min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-[#ff725a] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and explore how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-8'
          }`}>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or simply have a conversation about technology and development. Feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-[#ff725a] transition-all duration-700 ease-out group ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${(index + 1) * 100}ms` : '0ms'
                  }}
                >
                  <div className="bg-[#ff725a] p-3 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 font-medium">{item.info}</p>
                    <p className="text-gray-400 text-sm">{item.subInfo}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className={`pt-6 transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
            style={{
              transitionDelay: isVisible ? '500ms' : '0ms'
            }}>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-[#ff725a] transition-all duration-300 transform hover:scale-110 border border-gray-700 hover:border-[#ff725a]"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Component */}
          <ContactForm isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default Contact;