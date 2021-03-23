import React from 'react'
import { FaParking, FaPercentage, FaDumbbell, FaUniversalAccess } from 'react-icons/fa';
import './AboutFooter.scss';

function AboutFooter() {
  return (
    <>
      <h1 className="aboutfooter-main_title">Muscle Fitness - это: </h1>
      <ul className="aboutfooter">
        <li className="aboutfooter-item">
          <FaPercentage className=" aboutfooter-icon" />
          <h3 className="aboutfooter-title">Доступно</h3>
          <p className="aboutfooter-text">Тренировки может позволить каждый</p>
        </li>
        <li className="aboutfooter-item">
          <FaParking className=" aboutfooter-icon" />
          <h3 className="aboutfooter-title">Удобно</h3>
          <p className="aboutfooter-text">Бесплатный паркинг рядом с залом</p>
        </li>
        <li className="aboutfooter-item">
          <FaDumbbell className=" aboutfooter-icon" />
          <h3 className="aboutfooter-title">Современно</h3>
          <p className="aboutfooter-text">Залы оснащены лучшим фитнесс-оборудованием</p>
        </li>
        <li className="aboutfooter-item">
          <FaUniversalAccess className=" aboutfooter-icon" />
          <h3 className="aboutfooter-title">Надежно</h3>
          <p className="aboutfooter-text">У нас работают только лучшие тренеры с большим стажем тренировок</p>
        </li>
      </ul>
    </>
  )
}

export default AboutFooter
