import React from 'react'
import './Header.css'
import logo from '../../images/logo-no-bckgorund.png'
import { Link, NavLink, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split('/')
  return (
    <header className='header'>
      <Link to='/'>
        <img src={logo} alt="AlbertGarciaLogo" className='logo' />
      </Link>
      <ul className='header-ul'>
        <NavLink className={splitLocation[1] === '' ? 'active' : 'header-li'} to={'/'} >Home</NavLink>
        <NavLink className={splitLocation[1] === 'projects' ? 'active' : 'header-li'} to={'/projects'} >Projects</NavLink>
        <NavLink className={splitLocation[1] === 'contact' ? 'active' : 'header-li'} to={'/contact'} >Contact</NavLink>
      </ul>
    </header>
  )
}

export default Header