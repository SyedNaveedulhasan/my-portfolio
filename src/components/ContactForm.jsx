import React, { useState } from 'react';
import { VscSend } from "react-icons/vsc";
import toast from "react-hot-toast";

const ContactForm = ({ isVisible }) => {
  const [result, setResult] = React.useState("");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    toast.loading("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "853eb835-0c04-4d54-95cb-47e6b916c6f7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.dismiss();
      toast.success("Form Submitted Successfully"); // success toast
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.dismiss();
      toast.error("Failed to send"); // error toast
    }
  };

  return (
    <div className={`transition-all duration-700 ease-out ${
      isVisible 
        ? 'opacity-100 translate-x-0' 
        : 'opacity-0 translate-x-8'
    }`}
    style={{
      transitionDelay: isVisible ? '300ms' : '0ms'
    }}>
      <div className="bg-gray-800 p-8 rounded-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>

        <form onSubmit={onSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isVisible ? '400ms' : '0ms'
            }}>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff725a] focus:ring-1 focus:ring-[#ff725a] transition-all duration-300"
                placeholder="Your Name"
                required
              />
            </div>

            <div className={`transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isVisible ? '500ms' : '0ms'
            }}>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff725a] focus:ring-1 focus:ring-[#ff725a] transition-all duration-300"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className={`transition-all duration-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: isVisible ? '600ms' : '0ms'
          }}>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Subject *
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff725a] focus:ring-1 focus:ring-[#ff725a] transition-all duration-300"
              placeholder="Project Discussion"
              required
            />
          </div>

          <div className={`transition-all duration-500 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}
          style={{
            transitionDelay: isVisible ? '700ms' : '0ms'
          }}>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="6"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#ff725a] focus:ring-1 focus:ring-[#ff725a] transition-all duration-300 resize-vertical"
              placeholder="Tell me about your project, requirements, or any questions you have..."
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-[#ff725a] text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-500 transform hover:scale-105 border-2 border-[#ff725a] hover:bg-transparent hover:text-[#ff725a] flex items-center justify-center space-x-2 cursor-pointer ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <span>Send Message</span>
            <VscSend className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;