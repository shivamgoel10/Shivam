import React, { useState } from 'react';
import { BookOpen, Video, Upload, Users, TrendingUp, Clock, Award, FileText, Play, Download, Settings, Bell, Calendar, BarChart3 } from 'lucide-react';
import { User } from '../App';

interface DashboardProps {
  isDarkMode: boolean;
  currentUser: User;
}

const Dashboard: React.FC<DashboardProps> = ({ isDarkMode, currentUser }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const recentLectures = [
    { id: 1, title: "Advanced Calculus - Integration Techniques", instructor: "Dr. Rajesh Kumar", duration: "45 min", views: 1250, thumbnail: "https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, title: "Quantum Physics Fundamentals", instructor: "Prof. Anita Sharma", duration: "38 min", views: 980, thumbnail: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, title: "Organic Chemistry Reactions", instructor: "Dr. Vikram Patel", duration: "52 min", views: 1450, thumbnail: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=300" },
  ];

  const recentNotes = [
    { id: 1, title: "Linear Algebra Complete Notes", subject: "Mathematics", pages: 45, downloads: 2300 },
    { id: 2, title: "Modern Physics Summary", subject: "Physics", pages: 32, downloads: 1800 },
    { id: 3, title: "Inorganic Chemistry Guide", subject: "Chemistry", pages: 38, downloads: 2100 },
  ];

  const upcomingEvents = [
    { id: 1, title: "Live Q&A Session - Calculus", date: "2024-02-15", time: "3:00 PM", type: "Live Session" },
    { id: 2, title: "Assignment Due - Physics Lab", date: "2024-02-18", time: "11:59 PM", type: "Assignment" },
    { id: 3, title: "Exam - Organic Chemistry", date: "2024-02-22", time: "10:00 AM", type: "Exam" },
  ];

  return (
    <div className={`min-h-screen pt-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className={`${isDarkMode ? 'bg-gradient-to-r from-indigo-900 to-purple-900' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} rounded-2xl p-8 mb-8 text-white`}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {currentUser.name}! 🎉
              </h1>
              <p className={`${isDarkMode ? 'text-indigo-200' : 'text-indigo-100'} text-lg`}>
                Ready to continue your learning journey? Let's make today count!
              </p>
            </div>
            <div className="hidden md:block">
              <div className={`w-24 h-24 ${isDarkMode ? 'bg-white/10' : 'bg-white/20'} rounded-full flex items-center justify-center`}>
                <BookOpen className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl mb-8`}>
          <div className="flex overflow-x-auto">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'courses', label: 'My Courses', icon: BookOpen },
              { id: 'lectures', label: 'Lectures', icon: Video },
              { id: 'notes', label: 'Notes', icon: FileText },
              { id: 'calendar', label: 'Calendar', icon: Calendar },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : isDarkMode ? 'text-gray-300 hover:text-indigo-400' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>Courses Enrolled</p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{currentUser.coursesEnrolled || 12}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>Hours Watched</p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>156</p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>Notes Downloaded</p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>89</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm font-medium`}>Achievements</p>
                    <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>7</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Lectures */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Recent Lectures</h2>
                  <button className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium`}>
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {recentLectures.map((lecture) => (
                    <div key={lecture.id} className={`flex items-center space-x-4 p-4 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'} rounded-lg transition-colors cursor-pointer`}>
                      <img 
                        src={lecture.thumbnail} 
                        alt={lecture.title}
                        className="w-16 h-12 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm`}>{lecture.title}</h3>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-xs`}>{lecture.instructor}</p>
                        <div className={`flex items-center space-x-4 text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mt-1`}>
                          <span className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {lecture.duration}
                          </span>
                          <span className="flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            {lecture.views} views
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}>
                <div className="flex items-center justify-between mb-6">
                  <h2 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Upcoming Events</h2>
                  <button className={`${isDarkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} font-medium`}>
                    View All
                  </button>
                </div>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className={`p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} rounded-lg`}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} text-sm mb-1`}>{event.title}</h3>
                          <div className={`flex items-center space-x-4 text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            <span className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {event.date}
                            </span>
                            <span>{event.time}</span>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.type === 'Live Session' ? 'bg-green-100 text-green-700' :
                          event.type === 'Assignment' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tab contents would go here */}
        {activeTab !== 'overview' && (
          <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-8 text-center`}>
            <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Section
            </h2>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This section is under development. More features coming soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;