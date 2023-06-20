import React from 'react'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact() {
  return (
    <div className='background-home contact-page'>
      <p>Thank you for visiting my website! If you would like to get in touch with me, you can do so through the following channels:</p>
      <div className='text-center mt-4'>
      <Link to={'https://github.com/AlbertGPe'}>
        <img src={github} alt="github" className='m-1 px-2' style={{width:'60px'}} />
      </Link>
      <Link to={'https://www.linkedin.com/in/albert-garcia-pedrosa/'}>
        <img src={linkedin} alt="linkedin" className='m-1 px-2' style={{width:'60px'}}/>
      </Link>
      </div>
      <p className='mt-4'><b>Email: </b>albertgarciapedrosa@gmail.com</p>
      <p>If you have any questions, concerns, or simply want to share your feedback, feel free to contact me.</p>
      <p>Furthermore, if you are interested in any professional opportunities, I would be delighted to discuss possibilities of working together. You can reach out to me through any of the aforementioned channels.</p>
      <p>I look forward to hearing from you! Thank you again for visiting my website and for your interest in my work.</p>
    </div>
  )
}

export default Contact