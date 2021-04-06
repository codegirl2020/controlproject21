import React from 'react';
import './Preloader.scss';
import PuffLoader from 'react-spinners/PuffLoader'

function Preloader({ isShow }) {
  if (!isShow) {
    return null;
  }
  return (
    <PuffLoader size='10rem' />
  )
}

export default Preloader;
