import React from 'react';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Notes', href: '#notes' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Career', href: '#career' }
  ];

  const courses = [
    { name: 'Web Development', href: '#' },
    { name: 'Data Science', href: '#' },
    { name: 'Digital Marketing', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Mobile Development', href: '#' },
    { name: 'Machine Learning', href: '#' }
  ];

  const support = [
    { name: 'Help Center', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Student Support', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Refund Policy', href: '#' }
  ];

  return (
    <footer className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-indigo-900 text-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">NEOSANKALP</span>
            </div>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'} leading-relaxed`}>
              Empowering learners worldwide with quality education and 
              comprehensive courses designed by industry experts.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-indigo-400'}`} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'}`}>contact@neosankalp.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-indigo-400'}`} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'}`}>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className={`h-5 w-5 ${isDarkMode ? 'text-gray-400' : 'text-indigo-400'}`} />
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'}`}>123 Education St, Learning City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-indigo-200 hover:text-white'} transition-colors duration-200`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-indigo-200 hover:text-white'} transition-colors duration-200`}
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-indigo-200 hover:text-white'} transition-colors duration-200`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-indigo-800'} mt-12 pt-8`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className={`${isDarkMode ? 'text-gray-300' : 'text-indigo-200'}`}>
              © 2024 NEOSANKALP. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-indigo-800 hover:bg-indigo-700'} p-2 rounded-lg transition-colors duration-200`}
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-indigo-800 hover:bg-indigo-700'} p-2 rounded-lg transition-colors duration-200`}
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-indigo-800 hover:bg-indigo-700'} p-2 rounded-lg transition-colors duration-200`}
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className={`${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-indigo-800 hover:bg-indigo-700'} p-2 rounded-lg transition-colors duration-200`}
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;