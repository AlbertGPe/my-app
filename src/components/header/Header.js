import React from 'react'
import './Header.css'
import logo from '../../images/logo-no-bckgorund.png'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt="AlbertGarciaLogo" className='logo' />
      </Link>
      <ul className='header-ul'>
        <NavLink to={'/'} className='header-li'>Home</NavLink>
        <NavLink to={'/projects'} className='header-li'>Projects</NavLink>
        <li className='header-li'>About me</li>
        <NavLink to={'/contact'} className='header-li'>Contact</NavLink>
      </ul>
    </header>
  )
}

export default Header