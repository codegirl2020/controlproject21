import React from 'react'
import Toolbar from './Toolbar/Toolbar'

function Header({ children }) {
  return (
    <>
      <Toolbar />
      <main className="main-wrapper"></main>
      {children}

    </>
  )
}

export default Header
