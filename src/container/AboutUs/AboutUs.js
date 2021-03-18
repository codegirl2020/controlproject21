import React, { Fragment } from 'react'
import Bgimg from '../../assets/img/aboutusbg.jpg';
import './AboutUs.scss';

function AboutUs() {
  return (
    <div className="about">
      <div className="about-head">
        <h1 className="about-title">О Нас</h1>
        <img src={Bgimg} alt=" " className="about-img" />
      </div>
      <div className="about-text">
        <p className="about-text">Фитнесс клуб "Muscle" - это место, где сочетание фитнесс зоны для тренировок и зоны отдыха стало обыденностью. Занимаясь у нас вы будете ощущать себя проработавшим и одновременно отдохнувшим. Мы постарались сделать все, чтобы вы чувствовали себя комфортно.</p>
        <p className="about-text low">Добро пожаловать в фитнесс клуб "Muscle"</p>
      </div>

    </div>
  )
}

export default AboutUs
