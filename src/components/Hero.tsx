import React from 'react';
import { ArrowRight, Play, Users, BookOpen, Award } from 'lucide-react';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const scrollToJoinNow = () => {
    const joinNowSection = document.getElementById('join-now');
    if (joinNowSection) {
      joinNowSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-indigo-50'} py-20 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-6xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} leading-tight`}>
                Transform Your Future with
                <span className="text-indigo-600 block">Smart Learning Solutions</span>
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                Unlock your potential with NEOSANKALP's innovative educational platform. 
                Experience personalized learning, expert guidance, and career-focused courses designed for the modern world.
              </p>
            </div>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">50K+</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">200+</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">95%</div>
                <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Success Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToJoinNow}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Learning Today</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className={`border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg font-semibold ${isDarkMode ? 'hover:bg-indigo-900' : 'hover:bg-indigo-50'} transition-all duration-200 flex items-center justify-center space-x-2`}>
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-indigo-600 rounded-2xl p-8 transform rotate-3 hover:rotate-1 transition-transform duration-300">
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 transform -rotate-6 hover:-rotate-3 transition-transform duration-300`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Users className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Live Classes</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Interactive sessions</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Study Materials</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comprehensive notes</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-indigo-100 p-2 rounded-lg">
                      <Award className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Certificates</div>
                      <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Industry recognized</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;