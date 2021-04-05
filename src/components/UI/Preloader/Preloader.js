import React from 'react';
import './Preloader.scss';

function Preloader() {
  let newsItem = Array.from(Array(12), (_, i) => <div key={i} />)
  return (
    <div className="news-loader-wrap">
      <div className="pizza-loader">
        {newsItem}
      </div>
    </div>
  )
}

export default Preloader;
