import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import './Toolbar.scss';

function Toolbar() {
  return (
    <header className="toolbar">
      <Logo />
      <Navigation />
    </header>
  )
}

export default Toolbar
