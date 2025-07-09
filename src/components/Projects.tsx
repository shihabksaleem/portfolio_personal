import React, { useState } from 'react';
import { ExternalLink, Github, Smartphone, ShoppingCart, Heart, MessageCircle } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce App',
      description: 'A full-featured e-commerce mobile application with user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Stripe', 'Provider'],
      category: 'ecommerce',
      icon: ShoppingCart,
      github: '#',
      demo: '#'
    },
    {
      id: 2,
      title: 'Social Media App',
      description: 'Instagram-like social media platform with photo sharing, stories, real-time messaging, and user profiles.',
      image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Cloud Storage', 'Bloc'],
      category: 'social',
      icon: MessageCircle,
      github: '#',
      demo: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking app with workout plans, progress tracking, and integration with wearable devices.',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'SQLite', 'Health Kit', 'Charts'],
      category: 'health',
      icon: Heart,
      github: '#',
      demo: '#'
    },
    {
      id: 4,
      title: 'Task Manager',
      description: 'Productivity app for managing tasks, projects, and deadlines with team collaboration features.',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Push Notifications', 'Riverpod'],
      category: 'productivity',
      icon: Smartphone,
      github: '#',
      demo: '#'
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, weather alerts, and interactive maps.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'OpenWeather API', 'Maps', 'Animations'],
      category: 'utility',
      icon: Smartphone,
      github: '#',
      demo: '#'
    },
    {
      id: 6,
      title: 'Music Player',
      description: 'Feature-rich music player with playlist management, equalizer, and streaming capabilities.',
      image: 'https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Audio Players', 'Spotify API', 'GetX'],
      category: 'entertainment',
      icon: Smartphone,
      github: '#',
      demo: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'social', label: 'Social' },
    { id: 'health', label: 'Health' },
    { id: 'productivity', label: 'Productivity' },
    { id: 'utility', label: 'Utility' },
    { id: 'entertainment', label: 'Entertainment' }
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
              Explore my portfolio of mobile applications built with Flutter and modern technologies
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <project.icon className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Want to see more? Check out my GitHub for additional projects and contributions.
            </p>
            <a
              href="#"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Github className="h-5 w-5" />
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;