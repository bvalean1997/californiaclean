import React from 'react'
import footer_logo from '../img/footer_logo.png'
import drop from '../img/drop.png'
import './Footer.css'

const Footer = props => {
  return (
    <footer>
      <div className="footer">
        <div className="spacer"></div>
        <ul className="services">
          <li className="server-headline"><h3>SERVICES<img className="drop" src={drop} /></h3></li>
          <li><strong>Deep</strong> Cleaning</li>
          <li><strong>Home</strong> Cleaning</li>
          <li><strong>Kitchen</strong> Cleaning</li>
          <li><strong>Windows</strong> Cleaning</li>
          <li><strong>Relocation</strong> Cleaning</li>
          <li><strong>Office &amp; Retail</strong> Cleaning</li>
          <li><strong>Post Construction</strong> Cleaning</li>
        </ul>

        <div className="footer-logo"><img src={footer_logo} /></div>
        <ul className="contact">
          <li><h3>CONTACT</h3></li>
          
          <li><i className="fas fa-map-marker-alt"></i>Högklintsvägen 4</li>
          <li>167 37 Stockholm</li>
          <li style={{marginTop: '10px'}}><i className="fas fa-phone-alt"></i><strong>+46 728 69 21 23</strong></li>
          <li style={{marginTop: '15px', marginBottom: '15px' }}><strong>hello</strong>californiaclean@gmail.com</li>
          <li>© <strong>2021 California Clean</strong></li>
        </ul>
        <div className="spacer"></div>
      </div>
    </footer> 
  )
}

export default Footer
