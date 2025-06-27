import React, { useState } from 'react';
import { Play, Clock, Users, Star, Filter, Search, Eye, BookOpen, Calendar, User } from 'lucide-react';

interface LecturesProps {
  isDarkMode: boolean;
}

const Lectures: React.FC<LecturesProps> = ({ isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedInstructor, setSelectedInstructor] = useState('all');

  const lectures = [
    {
      id: 1,
      title: "Advanced Calculus - Integration Techniques",
      instructor: "Dr. Rajesh Kumar",
      subject: "Mathematics",
      level: "Advanced",
      duration: "45 min",
      views: 12500,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/6256065/pexels-photo-6256065.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master advanced integration techniques including integration by parts, partial fractions, and trigonometric substitutions.",
      uploadDate: "2024-01-15",
      topics: ["Integration by Parts", "Partial Fractions", "Trigonometric Substitution"]
    },
    {
      id: 2,
      title: "Quantum Mechanics Fundamentals",
      instructor: "Prof. Anita Sharma",
      subject: "Physics",
      level: "Intermediate",
      duration: "52 min",
      views: 8900,
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Explore the fascinating world of quantum mechanics, wave-particle duality, and Schrödinger's equation.",
      uploadDate: "2024-01-12",
      topics: ["Wave-Particle Duality", "Uncertainty Principle", "Quantum States"]
    },
    {
      id: 3,
      title: "Organic Chemistry Reaction Mechanisms",
      instructor: "Dr. Vikram Patel",
      subject: "Chemistry",
      level: "Advanced",
      duration: "38 min",
      views: 15200,
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Deep dive into organic reaction mechanisms with detailed explanations of electron movement and intermediate formation.",
      uploadDate: "2024-01-10",
      topics: ["SN1 & SN2 Reactions", "Elimination Reactions", "Aromatic Substitution"]
    },
    {
      id: 4,
      title: "Cell Biology and Molecular Genetics",
      instructor: "Dr. Meera Joshi",
      subject: "Biology",
      level: "Beginner",
      duration: "41 min",
      views: 9700,
      rating: 4.6,
      thumbnail: "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Understanding cell structure, organelles, and the basics of molecular genetics and DNA replication.",
      uploadDate: "2024-01-08",
      topics: ["Cell Structure", "DNA Replication", "Protein Synthesis"]
    },
    {
      id: 5,
      title: "Data Structures and Algorithms",
      instructor: "Mr. Arjun Mehta",
      subject: "Computer Science",
      level: "Intermediate",
      duration: "55 min",
      views: 11300,
      rating: 4.8,
      thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Master essential data structures like arrays, linked lists, trees, and fundamental algorithms for problem-solving.",
      uploadDate: "2024-01-05",
      topics: ["Arrays & Linked Lists", "Trees & Graphs", "Sorting Algorithms"]
    },
    {
      id: 6,
      title: "Shakespeare's Literary Techniques",
      instructor: "Ms. Priya Singh",
      subject: "English",
      level: "Advanced",
      duration: "33 min",
      views: 6800,
      rating: 4.9,
      thumbnail: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Analyze the literary devices, themes, and techniques used in Shakespeare's most celebrated works.",
      uploadDate: "2024-01-03",
      topics: ["Metaphor & Symbolism", "Character Development", "Dramatic Irony"]
    },
    {
      id: 7,
      title: "Machine Learning Basics",
      instructor: "Dr. Rohit Gupta",
      subject: "Computer Science",
      level: "Beginner",
      duration: "48 min",
      views: 13400,
      rating: 4.7,
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Introduction to machine learning concepts, supervised and unsupervised learning with practical examples.",
      uploadDate: "2024-01-01",
      topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"]
    },
    {
      id: 8,
      title: "Modern European History",
      instructor: "Prof. Sarah Williams",
      subject: "History",
      level: "Intermediate",
      duration: "44 min",
      views: 7200,
      rating: 4.5,
      thumbnail: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Explore major events and transformations in European history from the Renaissance to the modern era.",
      uploadDate: "2023-12-28",
      topics: ["Renaissance", "Industrial Revolution", "World Wars"]
    }
  ];

  const instructors = [...new Set(lectures.map(lecture => lecture.instructor))];

  const filteredLectures = lectures.filter(lecture => {
    const matchesSearch = lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lecture.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || lecture.subject.toLowerCase() === selectedSubject;
    const matchesLevel = selectedLevel === 'all' || lecture.level.toLowerCase() === selectedLevel;
    const matchesInstructor = selectedInstructor === 'all' || lecture.instructor === selectedInstructor;
    
    return matchesSearch && matchesSubject && matchesLevel && matchesInstructor;
  });

  return (
    <div className={`min-h-screen pt-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold ${isDarkMode ? 'text-white' : 'text-indigo-900'} mb-4`}>
            Video Lectures
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Access our comprehensive library of expert-led video lectures across all subjects
          </p>
        </div>

        {/* Filters */}
        <div className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-lg p-6 mb-8 border`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'} w-5 h-5`} />
              <input
                type="text"
                placeholder="Search lectures..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors`}
              />
            </div>
            
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className={`px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
            >
              <option value="all">All Subjects</option>
              <option value="mathematics">Mathematics</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
              <option value="biology">Biology</option>
              <option value="computer science">Computer Science</option>
              <option value="english">English</option>
              <option value="history">History</option>
            </select>
            
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className={`px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
            >
              <option value="all">All Levels</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
            
            <select
              value={selectedInstructor}
              onChange={(e) => setSelectedInstructor(e.target.value)}
              className={`px-4 py-3 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`}
            >
              <option value="all">All Instructors</option>
              {instructors.map(instructor => (
                <option key={instructor} value={instructor}>{instructor}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Lectures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLectures.map((lecture) => (
            <div key={lecture.id} className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
              <div className="relative group">
                <img 
                  src={lecture.thumbnail} 
                  alt={lecture.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white bg-opacity-90 hover:bg-opacity-100 text-indigo-600 p-4 rounded-full transition-all transform hover:scale-110">
                    <Play className="w-8 h-8" />
                  </button>
                </div>
                <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {lecture.duration}
                </div>
                <div className="absolute top-3 left-3 flex space-x-2">
                  <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    {lecture.subject}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    lecture.level === 'Beginner' ? 'bg-green-500 text-white' :
                    lecture.level === 'Intermediate' ? 'bg-yellow-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {lecture.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-2 line-clamp-2`}>
                  {lecture.title}
                </h3>
                
                <div className="flex items-center space-x-2 mb-3">
                  <User className={`w-4 h-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {lecture.instructor}
                  </span>
                </div>
                
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mb-4 line-clamp-2`}>
                  {lecture.description}
                </p>
                
                {/* Topics */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {lecture.topics.slice(0, 2).map((topic, index) => (
                      <span key={index} className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        {topic}
                      </span>
                    ))}
                    {lecture.topics.length > 2 && (
                      <span className={`text-xs px-2 py-1 rounded ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        +{lecture.topics.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {lecture.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      {lecture.rating}
                    </span>
                  </div>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(lecture.uploadDate).toLocaleDateString()}
                  </span>
                </div>
                
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Lecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredLectures.length === 0 && (
          <div className="text-center py-16">
            <div className={`w-20 h-20 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full flex items-center justify-center mx-auto mb-6`}>
              <BookOpen className={`w-10 h-10 ${isDarkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            </div>
            <h3 className={`text-xl font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-900'} mb-2`}>No lectures found</h3>
            <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lectures;