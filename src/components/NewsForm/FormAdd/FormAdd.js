import Button from '../../../components/UI/Button/Button';
import { useState } from 'react';
import firebase from '../../../config/fbConfig';
import axios from '../../../api/axios-firebase'

function FormAdd({ history, onLogOut }) {
  const [user, setUser] = useState(null)
  const [news, setNews] = useState({
    title: '',
    date: '',
    address: '',
    text: ''
  });

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  function changeHandler({ target: { name, value } }) {
    setNews(news => {
      return {
        ...news,
        [name]: value
      }
    })
  };

  const onFileSelectHandler = event => {
    setFile(event.target.files[0]);
  };



  const onFileUpload = event => {
    event.preventDefault();
    const fileName = file.name;
    const storageRef = firebase.storage().ref('/images' + fileName);
    const uploadTask = storageRef.put(file);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        setProgress(progress);
      },
      (error) => { console.log(error) },
      () => {
        uploadTask.snapshot.ref.getDownloadURL()
          .then(fileUrl => {
            const newblog = {
              ...news,
              img: fileUrl
            }
            axios.post('/news.json', newblog).finally(() => {
              history.push('/')
            })
          })
      })
  }

  return (
    <div className="row">
      <div className="col-6">There is such User</div>
      <div className="col-6">
        <Button modif="btn btn-success" clicked={onLogOut}>Exit</Button>
      </div>
      <div className="col-12">
        <form onSubmit={onFileUpload}>
          <div className="input-group mt-2 mb-3 ">
            <input
              className="form-control"
              onChange={changeHandler}
              name="title"
              type="text"
              placeholder="Enter title of the news" />
          </div>
          <div className="custom-date">
            <input
              className="form-control"
              onChange={changeHandler}
              name="date"
              type="date"
              placeholder="Enter date" />
          </div>
          <div className="custom-file mt-3">
            <input
              id="uploading"
              className="custom-file-input"
              onChange={onFileSelectHandler}
              name="file"
              type="file"
              placeholder="Upload image" />
            <label htmlFor="uploading" className="custom-file-label">
              Choose file...
              </label>
          </div>
          <div className="progress mt-2 mb-2">
            <div className="progress-bar progress-bar-stripped bg-success"></div>
          </div>
          <div className="input-group mb-4">
            <input
              className="form-control"
              onChange={changeHandler}
              name="address"
              type="text"
              placeholder="Enter address" />
          </div>
          <div className="input-group mb-3">
            <textarea
              className="form-control"
              onChange={changeHandler}
              name="text"
              placeholder="Enter text"
              rows="3" />
          </div>
          <div className="news-data__group">
            <Button
              modif="btn-danger">Upload</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormAdd
