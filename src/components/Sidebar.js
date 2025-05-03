import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div>
        <h2>Temu</h2>
        <a href="#">Home</a>
        <a href="#">My Works</a>
        <a href="#">Bookmark</a>
      </div>
      <div className="logout">Logout</div>
    </div>
  );
};

export default Sidebar;
