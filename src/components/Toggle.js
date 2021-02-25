import React from 'react'
import './Toggle.css'

const Toggle = ({ toggled, onClick }) => {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " en" : ""}`}>
      <div className="notch" />      
    </div>  
  )
}

export default Toggle
