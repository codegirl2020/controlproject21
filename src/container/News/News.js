import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';
import './News.scss';
import axios from '../../api/axios-firebase';


function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/news.json').then(response => { // {dsddsada: {}, rtregdgs: {}, dsadada: {}}
      if (!response.data) return;
      const posts = Object.keys(response.data).map(key => {
        return {
          ...response.data[key],
          id: key
        }
      })
      setPosts(posts)
    })
  }, [])



  return (
    <div className="news-link">
      <Link to="/add" className="link btn-danger">Add</Link>
      <ul className="news-list">
        {posts.map(post => {
          return <NewsItem key={post.id} {...post} />
        })}
      </ul>

    </div>

  )
}

export default News
