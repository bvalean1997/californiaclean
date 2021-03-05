import React from 'react'

const ContactForm = () => {
  let contactFormClassses = [ 'contact-form' ]
  
  return (
      <div className={contactFormClassses}>
          <h2>We will be cleaning your home on the</h2>
          <form action="">
            <input className="input-box" type="text" placeholder="First name"></input>
            <input className="input-box" type="text" placeholder="Last name"></input>
            <input className="input-box" type="email" placeholder="Email address"></input>
            <input className="input-box" type="text" placeholder="Address 1"></input>
            <input className="input-box" type="text" placeholder="Address 2"></input>
            <button type="submit" className="send-form">Book Now</button>         
          </form>
        </div>
    
  )
}

export default ContactForm
