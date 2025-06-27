import React from 'react';
import CoursesComponent from '../components/Courses';

interface CoursesProps {
  isDarkMode: boolean;
}

const Courses: React.FC<CoursesProps> = ({ isDarkMode }) => {
  return (
    <div className="pt-16">
      <CoursesComponent isDarkMode={isDarkMode} />
    </div>
  );
};

export default Courses;