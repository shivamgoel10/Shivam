import React from 'react';
import NotesComponent from '../components/Notes';

interface NotesProps {
  isDarkMode: boolean;
}

const Notes: React.FC<NotesProps> = ({ isDarkMode }) => {
  return (
    <div className="pt-16">
      <NotesComponent isDarkMode={isDarkMode} />
    </div>
  );
};

export default Notes;