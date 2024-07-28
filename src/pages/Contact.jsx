import React from 'react'
import '../global.css'

// import { FaEnvelope, FaGithub } from 'react-icons/fa';


function Contact() {
  return (
    <section className="contact">
    <h2>Contact Me</h2>
    <div id='Contact' className="contact-container">
      <div className="contact-info">
        <div className="contact-item">
          {/* <FaEnvelope className="icon" /> */}
          <span>muzamiltahliil1@gmail.com</span>
        </div>
        <div className="contact-item">
          {/* <FaGithub className="icon" /> */}
          <span>https://github.com/time-to- <br />program</span>
        </div>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="First Name" required />
          
        </div>
        <div className='form-group2'>
        <input type="text" placeholder="Last Name" />
        </div>
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">SEND</button>
      </form>
    </div>
  </section>
  )
}

export default Contact
