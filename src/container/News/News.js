import React from 'react'
import { Link } from 'react-router-dom';
import './News.scss';


function News() {
  return (
    <div className="news-link">
      <Link to="/add" className=" link btn-danger" >Add</Link>

    </div>

  )
}

export default News
