import React from 'react'
import "./Home.css"
import logo from '../../images/logo-no-bckgorund.png'

function Home() {
  return (
    <div className='text-center pt-5'>
      <img src={logo} alt="logo" />
      <p style={{color: 'white'}}>FULL STACK DEVELOPMENT</p>
    </div>
  )
}

export default Home