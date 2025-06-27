import React from 'react';
import { Target, Users, Award, Lightbulb, CheckCircle } from 'lucide-react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  const features = [
    {
      icon: Target,
      title: "Goal-Oriented Learning",
      description: "Every course is designed with clear learning objectives and practical outcomes"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience"
    },
    {
      icon: Award,
      title: "Certified Programs",
      description: "Earn industry-recognized certificates upon course completion"
    },
    {
      icon: Lightbulb,
      title: "Innovative Methods",
      description: "Interactive learning with hands-on projects and practical applications"
    }
  ];

  const achievements = [
    "50,000+ successful graduates",
    "200+ comprehensive courses",
    "95% job placement rate",
    "24/7 learning support",
    "Interactive learning platform",
    "Global community access"
  ];

  return (
    <section id="about" className={`py-20 ${isDarkMode ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 to-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-6`}>
                Empowering Your Learning Journey
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed mb-8`}>
                At NEOSANKALP, we believe in transforming lives through quality education. 
                Our platform combines cutting-edge technology with proven teaching methodologies 
                to deliver an exceptional learning experience.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{achievement}</span>
                </div>
              ))}
            </div>

            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200">
              Learn More About Us
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-indigo-100'} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border`}
              >
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-2`}>
                  {feature.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-indigo-600 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">50K+</div>
              <div className="text-indigo-200">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-indigo-200">Expert Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-indigo-200">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-indigo-200">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;