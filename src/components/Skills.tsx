import React from 'react';
import { Smartphone, Database, Cloud, Palette, Code, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: [
        { name: 'Flutter', level: 95 },
        { name: 'Dart', level: 90 },
        { name: 'Android (Java/Kotlin)', level: 80 },
        { name: 'iOS (Swift)', level: 70 }
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      skills: [
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'SQLite', level: 80 },
        { name: 'GraphQL', level: 75 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Google Cloud', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'Docker', level: 70 }
      ]
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'VS Code', level: 95 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern mobile applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Flutter', 'Dart', 'Firebase', 'Google Cloud', 'AWS', 'MongoDB',
                'PostgreSQL', 'Redux', 'Provider', 'Riverpod', 'GetX',
                'Bloc', 'GraphQL', 'REST APIs', 'WebSocket', 'Push Notifications',
                'In-App Purchases', 'Maps Integration', 'Camera & Gallery',
                'Biometric Authentication', 'Local Storage', 'Git', 'Jenkins',
                'Docker', 'Kubernetes', 'Figma', 'Adobe XD'
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;