import React from 'react'
import './Header.css'
import logo from '../../images/Screenshot_1.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt="AlbertGarciaLogo" className='logo' />
      </Link>
      <ul className='header-ul'>
        <NavLink to={'/'} className='header-li'>Inicio</NavLink>
        <NavLink to={'/projects'} className='header-li'>Proyectos</NavLink>
        <li className='header-li'>Sobre mi</li>
        <li className='header-li'>Contacto</li>
      </ul>
    </header>
  )
}

export default Header