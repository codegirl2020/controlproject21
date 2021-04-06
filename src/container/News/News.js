import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import NewsItem from './NewsItem';
import './News.scss';
import axios from '../../api/axios-firebase';
import { useSelector } from 'react-redux';


function News() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/news.json').then(response => {
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
      <h1> Скоро будут новости</h1>
    </div>
  )
  if (posts.length !== 0) {
    news = (
      <>
        <h2 className="new-list__title">Новости</h2>
        <ul className="news-list">
          {posts.map(post => {
            return <NewsItem key={post.id} {...post} />
          })}
        </ul>
      </>
    )
  }

  const user = useSelector(({ auth }) => auth.user)

  console.log(user);

  return (
    <div className="news-link">
      {user !== null ? <Link to="/add" className="link btn-orange">Добавить</Link> : null}
      {news}
    </div>

  )

}

export default News
