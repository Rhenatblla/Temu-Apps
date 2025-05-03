import React from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import NewsCard from './components/NewsCard';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Topbar />
        <div className="news-section">
          <NewsCard
            author="Linka Angelia"
            title="Mastering AI in 2025 (from Zero to Hero)"
            content="The only things you need in 2025 to master AI are curiosity, consistency, and an internet connection"
            date="Jan 7"
          />
          <NewsCard
            author="Linka Angelia"
            title="The Best Free Resources to Learn Python in 2025"
            content="Don’t spend a dollar — here’s a curated list of high-quality platforms to learn Python from scratch"
            date="Feb 14"
          />
          <NewsCard
            author="Linka Angelia"
            title="How I’d Learn ML in 2025 (if I could start over)"
            content="All you need to learn ML in 2025 is a laptop and a list of the steps you must take"
            date="July 20"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
