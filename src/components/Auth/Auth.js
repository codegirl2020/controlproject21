
import React from 'react';
import './Auth.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../components/UI/Button/Button';
import { useState, useEffect } from 'react';
import { auth } from '../../config/fbConfig';
import { useDispatch } from 'react-redux';
import { sendAuth } from '../../store/actions/auth-actions';
import FormAdd from '../FormAdd/FormAdd';




function Auth({ history }) {
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });
  const [errors, seterrors] = useState('');

  const dispatch = useDispatch();

  function changeHandler({ target: { name, value } }) {
    setUserData(data => {
      return {
        ...data,
        [name]: value
      }
    })
  };

  const onLogOut = () => {
    auth.signOut()
      .then(() => {
        console.log('call');
        setUser(null);

      })
  };


  const authHandler = event => {
    event.preventDefault();
    dispatch(sendAuth(userData, history))

    // firebase.auth()
    //   .signInWithEmailAndPassword(userData.email, userData.password)
    //   .then(result => {

    //     setUser(result.user);
    //   })
    //   .catch(err => {
    //     if (err.code === 'auth/wrong-password') {
    //       seterrors('Wrong Password');
    //     }
    //   })
  };
  useEffect(() => {
    auth.onAuthStateChanged(user => {

      // if (user) {
      //   setUser(user);
      // }

    })
  }, [])

  // 

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
      <h1 className="news-data__title">Enter Credentials</h1>
      {errors && <p className="errors">{errors}</p>}
      {form}
    </div>
  )
}

export default Auth

