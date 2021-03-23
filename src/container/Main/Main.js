import React from 'react'
import Button from '../../components/UI/Button/Button';
import './Main.scss';


function Main({ clicked }) {
  return (
    <div className="hero">
      <h1 className="hero__title">Фитнесс-клуб в Бишкеке</h1>
      <p className="hero__text">Фитнесс который доступен каждому</p>
      <Button modif="btn-transparent" onClick={clicked}>Посмотреть абонементы</Button>
    </div>
  )
}

export default Main
