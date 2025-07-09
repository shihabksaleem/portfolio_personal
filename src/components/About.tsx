import React from 'react';
import { Code, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Code, number: '50+', label: 'Projects Completed' },
    { icon: Users, number: '30+', label: 'Happy Clients' },
    { icon: Award, number: '5+', label: 'Awards Won' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate Flutter developer with 3+ years of experience building 
              cross-platform mobile applications that users love.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-700">
                <p>
                  I'm a dedicated Flutter developer who fell in love with mobile app development 
                  during my computer science studies. I specialize in creating educational technology 
                  solutions and have developed comprehensive applications for Luminar Technolab, 
                  including student learning management systems and attendance tracking platforms.
                </p>
                
                <p>
                  My expertise spans the entire mobile development lifecycle, with particular 
                  strength in educational applications, video streaming platforms, and attendance 
                  management systems. I've successfully delivered applications that serve hundreds 
                  of students and faculty members at Luminar Technolab.
                </p>
                
                <p>
                  I'm passionate about leveraging technology to enhance education and streamline 
                  academic processes. My applications focus on user experience, performance, and 
                  scalability to ensure they can handle real-world educational environments.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Flutter', 'Dart', 'Firebase', 'Video Streaming', 'Geolocation', 'QR Scanner', 'REST APIs', 'Git'].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
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