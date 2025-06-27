import React from 'react';
import AboutComponent from '../components/About';
import CompanyInfoModal from '../components/CompanyInfoModal';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <div className="pt-16">
      <AboutComponent isDarkMode={isDarkMode} />
    </div>
  );
};

export default About;