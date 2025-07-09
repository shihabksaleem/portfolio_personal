import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, GraduationCap, Users, Calendar, Play, BarChart3, Clock, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Luminar Technolab - Student Learning Platform',
      description: 'Comprehensive mobile application for students to access recorded video lectures, track academic performance, manage coursework, and monitor learning progress with interactive dashboards.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Video Player', 'Provider', 'REST APIs'],
      category: 'education',
      icon: GraduationCap,
      features: [
        'Video lecture streaming and offline download',
        'Academic performance tracking and analytics',
        'Interactive course management system',
        'Progress monitoring with visual charts',
        'Assignment submission and grading',
        'Student dashboard with personalized insights'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Luminar Attendance Management System',
      description: 'Efficient mobile application for automated attendance marking with real-time tracking, reporting, and analytics for both students and administrators.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Geolocation', 'QR Scanner', 'Cloud Firestore'],
      category: 'productivity',
      icon: CheckCircle,
      features: [
        'QR code-based attendance marking',
        'GPS location verification',
        'Real-time attendance tracking',
        'Automated report generation',
        'Student and admin dashboards',
        'Push notifications for attendance alerts'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'E-Commerce Mobile App',
      description: 'Full-featured e-commerce application with user authentication, product catalog, shopping cart, payment integration, and order management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'Provider', 'REST APIs'],
      category: 'ecommerce',
      icon: Smartphone,
      features: [
        'Product catalog with search and filters',
        'Shopping cart and wishlist functionality',
        'Secure payment gateway integration',
        'Order tracking and history',
        'User profiles and authentication',
        'Push notifications for offers'
      ],
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Task Management App',
      description: 'Productivity application for managing tasks, projects, and deadlines with team collaboration features and progress tracking.',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Push Notifications', 'Riverpod', 'Local Storage'],
      category: 'productivity',
      icon: BarChart3,
      features: [
        'Task creation and assignment',
        'Project timeline management',
        'Team collaboration tools',
        'Progress tracking and analytics',
        'Deadline reminders',
        'File sharing and comments'
      ],
      github: '#',
      demo: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'education', label: 'Education' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'ecommerce', label: 'E-Commerce' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore my portfolio of Flutter applications, including educational platforms and productivity tools for Luminar Technolab
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                      <project.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-xs font-medium border border-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Luminar Technolab Highlight */}
          <div className="mt-16 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Luminar Technolab Partnership</h3>
              <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
                Developed comprehensive educational technology solutions for Luminar Technolab, including a student learning management system and attendance tracking application. These applications serve hundreds of students and faculty members, streamlining educational processes and enhancing learning experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Play className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Video Learning</h4>
                  <p className="text-sm text-gray-600">Seamless video streaming and offline access</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Performance Tracking</h4>
                  <p className="text-sm text-gray-600">Real-time academic progress monitoring</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Attendance Management</h4>
                  <p className="text-sm text-gray-600">Automated attendance with GPS verification</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Interested in seeing more projects or discussing a collaboration?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <span>Get In Touch</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;