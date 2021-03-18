import React from 'react'
import Button from '../../components/UI/Button/Button';
import './Main.scss';


function Main({ clicked }) {
  return (
    <div className="hero">
      <h1 className="hero__title">Fitness Club in Bishkek</h1>
      <p className="hero__text">Fitness for everybody</p>
      <Button modif="btn-transparent" onClick={clicked}>Read Packages</Button>
    </div>
  )
}

export default Main
