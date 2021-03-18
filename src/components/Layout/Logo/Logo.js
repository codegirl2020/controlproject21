import React from 'react'
import './Logo.scss';
import { FaDumbbell } from 'react-icons/fa';
function Logo() {
  return (
    <h1 className="logo"> <FaDumbbell className="logo-icon" /> <span>Muscle</span></h1>
  )
}

export default Logo;
