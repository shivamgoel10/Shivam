import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';

interface HomeProps {
  isDarkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ isDarkMode }) => {
  return (
    <div>
      <Hero isDarkMode={isDarkMode} />
      <Features />
    </div>
  );
};

export default Home;