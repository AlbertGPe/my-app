import React from 'react'
import './Header.css'
import logo from '../../images/Screenshot_1.png'

function Header() {
  return (
    <header className='header'>
      <img src={logo} alt="AlbertGarciaLogo" className='logo' />
      <ul className='header-ul'>
        <li>Inicio</li>
        <li>Proyectos</li>
        <li>Sobre mi</li>
        <li>Contacto</li>
      </ul>
    </header>
  )
}

export default Header