import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import './Contacts.scss';
import Button from "../../components/UI/Button/Button";
import { Map, YMaps } from 'react-yandex-maps';




function Contacts({ modif }) {
  return (
    <div className="contacts-wrapper">
      <div className="container mt-5">
        <h1 className="contacts-title">Контакты</h1>
        <form className="contacts-form">
          <div className="col-3 mb-3">
            <h3 className="contacts-subtitle">Свяжитесь с нами</h3>
            <label className="contact-label form-label">Ваше имя</label>
            <input
              className="contact-input form-control"
              type="text"
              name="name"
              placeholder="Введите ваше имя" />
          </div>
          <div className=" col-3 mb-3">
            <label className="contact-label form-label">Номер телефона</label>
            <input
              className="contact-input form-control"
              type="text"
              name="phone"
              placeholder="Введите ваш номер телефона" />
          </div>
          <Button modif=" btn btn-yellow">Оставить заявку <FaArrowRight className="contacts-icon" /></Button>
        </form>
      </div >
      <div className="contact-map"><YMaps><Map defaultState={{ center: [42.87, 74.62], zoom: 9 }} className='contact-map__card' ></Map></YMaps></div>
    </div>
  )
}

export default Contacts
