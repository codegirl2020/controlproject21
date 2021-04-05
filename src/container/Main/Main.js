import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button/Button';
import './Main.scss';


function Main({ clicked }) {
  return (
    <div className="hero">
      <h1 className="hero__title">Фитнесс-клуб в Бишкеке</h1>
      <p className="hero__text">Фитнесс который доступен каждому</p>
      <Link className="btn btn-orange" to="/packages">Посмотреть абонементы</Link>
    </div>
  )
}

export default Main
