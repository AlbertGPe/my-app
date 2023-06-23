import React from 'react'
import "./Home.css"
import 'animate.css'

import logo from '../../images/logo-no-bckgorund.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import express from '../../images/express.png'
import js from '../../images/js.png'
import mongo from '../../images/mongo.png'
import node from '../../images/node.png'
import react from '../../images/react.png'

function Home() {
  return (
    <div className='text-center pt-5 background-home'>
      <img src={logo} alt="logo" className='logo animate__animated animate__zoomInDown'/>
      <p className='full-stack animate__animated animate__zoomInDown'>FULL STACK DEVELOPER</p>
      <div className='skills animate__animated animate__fadeInDown'>
        <img src={react} alt="react" />
        <img src={node} alt="node" />
        <img src={mongo} alt="mongo" />
        <img src={express} alt="express" />
        <img src={js} alt="js" />
        <img src={html} alt="html" />
        <img src={css} alt="css" />
      </div>
    </div>
  )
}

export default Home