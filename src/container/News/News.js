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

  let news = (
    <div>
      <h1> We will come back with news</h1>
    </div>
  )
  if (posts.length !== 0) {
    news = (
      <>
        <h2 className="new-list__title">Our News</h2>
        <ul className="news-list">

          {posts.map(post => {
            return <NewsItem key={post.id} {...post} />
          })}
        </ul>
      </>
    )
  }

  return (
    <div className="news-link">
      <Link to="/add" className="link btn-transparent">Add</Link>
      {news}
    </div>

  )

}

export default News
