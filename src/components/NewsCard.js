import React from 'react';

const NewsCard = ({ author, title, content, date }) => {
  return (
    <div className="news-card">
      <div className="news-info">
        <strong>{author}</strong>
        <h3>{title}</h3>
        <p>{content}</p>
        <span className="news-date">{date}</span>
        <div className="news-actions">
          <span role="img" aria-label="comment">💬</span>
          <span role="img" aria-label="bookmark">🔖</span>
        </div>
      </div>
      <div className="news-img"></div>
    </div>
  );
};

export default NewsCard;
