import React from 'react';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
              <span className="text-white text-4xl font-bold">JD</span>
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-teal-500 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block">Hello, I'm</span>
              <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Shihab K Saleem
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Flutter Developer crafting beautiful, cross-platform mobile applications
              with clean code and exceptional user experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </button>
              
              <button
                onClick={scrollToNext}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mt-8">
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-gray-600 group-hover:text-blue-600" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="h-6 w-6 text-blue-600" />
      </button>
    </section>
  );
};

export default Hero;