import React from 'react';
import './NewsForm.scss';
import Button from '../../components/UI/Button/Button';
import { useState } from 'react';
import axios from '../../api/axios-firebase'
import firebase from '../../config/fbConfig';

function NewsForm({ history }) {
  const [file, setFile] = useState(null)
  const [fileUrl, setFileUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  const [news, setNews] = useState({
    title: '',
    date: '',
    address: '',
    image: '',
    news: ''
  });

  function changeHandler(e) {
    setNews(news => {
      return {
        ...news,
        [e.target.name]: e.target.value
      }
    })
  }

  function newsHandler(e) {
    e.preventDefault();
    const newblog = {
      ...news
    }
    axios.post('/news.json', newblog).finally(() => {
      history.push('/')
    })
  }

  const onFileSelectHandler = event => {
    setFile(event.target.files[0]);
  }

  const onFileUpload = event => {
    event.preventDefault();
    const fileName = file.name;
    const storageRef = firebase.storage().ref('/images' + filename);
    const uploadTask = storageRef.pull(file);
    uploadTask.on('state_changed', (snapshot) => {
      const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
      setProgress(progress);
    })
  }
  return (
    <div className="news-data">
      <h1 className="news-data__title">Enter news</h1>
      <form className="news-data__form" onSubmit={newsHandler}>
        <div className="news-data__group">
          <input

            className="news-data__input"
            onChange={changeHandler}
            name="title"
            type="text"
            placeholder="Enter title of the news" />
        </div>
        <div className="news-data__group">
          <input
            className="news-data__input"
            onChange={changeHandler}
            name="date"
            type="date"
            placeholder="Enter date" />
        </div>
        <div className="news-data__group">
          <input
            className="news-data__input"
            onChange={onFileSelectHandler}
            name="image"
            type="file"
            placeholder="Upload image" />
        </div>
        <div className="news-data__group">
          <input
            className="news-data__input"
            onChange={changeHandler}
            name="address"
            type="text"
            placeholder="Enter address" />
        </div>
        <div className="news-data__group">
          <textarea
            className="news-data__textarea"
            onChange={changeHandler}
            name="news"
            placeholder="Enter text" />
        </div>
        <div className="news-data__group">
          <Button
            modif="btn-danger">Add</Button>
        </div>
      </form>
    </div>
  )
}

export default NewsForm
