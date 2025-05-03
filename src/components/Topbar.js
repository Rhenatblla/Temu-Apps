import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
      <input type="text" placeholder="Search your news here!" />
      <div>
        <button onClick={() => alert('Add new article')}>+</button>
        <span>Linka Angelia</span>
      </div>
    </div>
  );
};

export default Topbar;
