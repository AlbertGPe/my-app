import React from 'react'
import dustyWar from '../../images/dusty-war.jpg'
import musicContact from '../../images/music-contact.jpg'
import soleSquad from '../../images/sole-squad.jpg'
import './Projects.css'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className='projects-page px-3'>
      <div className='mt-4'>
        <div style={{textAlign:'center'}}>
          <Link to={'https://github.com/AlbertGPe/dusty-war'} target='_blank' className='title'>DUSTY WAR</Link>
        </div>
        <div>
          <img src={dustyWar} alt="dustyWar" />
        </div>
        <p>'Metal Slug' game project developed in canvas, Javascript</p>
        <p>Technologies used: Javascript, Canvas, HTML, CSS, Bootstrap</p>
      </div>
      
      <div className='mt-4'>
        <div style={{textAlign:'center'}}>
          <Link to={'https://github.com/music-contact/music-contact'} target='_blank' className='title'>MUSIC CONTACT</Link>
        </div>
        <div>
          <img src={musicContact} alt="musicContact" />
        </div>
        <p>A web page that allows users to search for a band or other artists to play with. You can look at their profile 
        to see if they are already in a band, looking for one, their own music etc.</p>
        <p>Technologies used: NodeJS, ExpressJS, MongoDB, Mongoose, Handlebars, HTML, CSS, Bootstrap</p>
      </div>
      
      <div className='mt-4'>
        <div style={{textAlign:'center'}}>
          <Link to={'https://github.com/AlbertGPe/sole-squad'} target='_blank' className='title'>SOLE SQUAD</Link>
        </div>
        <div>
          <img src={soleSquad} alt="soleSquad" />
        </div>
        <p>A single web page application where you can look and buy new sneakers or sneakers that a user has uploaded.
        You can choose the size and quantity.</p>
        <p>Technologies used: React, MongoDB, Axios, Javascript, HTML, CSS, Bootstrap</p>
      </div>    
    </div>
  )
}

export default Projects