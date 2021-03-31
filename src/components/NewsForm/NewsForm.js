import React from 'react';
import './NewsForm.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../components/UI/Button/Button';
import { useState, useEffect } from 'react';
import firebase, { auth } from '../../config/fbConfig';
import FormAdd from './FormAdd/FormAdd';

function NewsForm({ history }) {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });





  // function newsHandler(e) {
  //   e.preventDefault();
  //   const newblog = {
  //     ...news
  //   }
  //   axios.post('/news.json', newblog).finally(() => {
  //     history.push('/')
  //   })
  // }

  function changeHandler({ target: { name, value } }) {
    setUserData(data => {
      return {
        ...data,
        [name]: value
      }
    })
  };



  const authHandler = event => {
    event.preventDefault();
    firebase.auth()
      .signInWithEmailAndPassword(userData.email, userData.password)
      .then(result => {
        setUser(result.user);
      })
      .catch(err => console.log(err))
  };
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      }
    })
  }, [])

  const onLogOut = () => {
    auth.signOut()
      .then(() => {
        console.log('call');
        setUser(null);
      })
  };


  let form = (
    <form onSubmit={authHandler}>
      <div className='form-group'>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          onChange={changeHandler} />
      </div>
      <div className='form-group'>
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          onChange={changeHandler} />
      </div>
      <div className='form-group'>
        <Button modif="btn btn-danger">Enter Info</Button>
      </div>
    </form>);

  if (user) {
    form = (
      <FormAdd history={history} onLogOut={onLogOut} />
    )
  }
  return (
    <div className="news-data">
      <h1 className="news-data__title">Enter news</h1>
      {form}
    </div>
  )
}

export default NewsForm
