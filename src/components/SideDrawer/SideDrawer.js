import React from 'react'
import './SideDrawer.css'
import {Link} from 'react-scroll'

const SideDrawer = props => {
  let drawerClasses = ['side-drawer']
  if (props.show) {
    drawerClasses = ['side-drawer open']
  }
return (
    <div className={drawerClasses}>
      <ul>
      <li><Link to="hemstadning" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>Hemstädning</Link></li>
          <li><Link to="stadprofil" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>Städprofil</Link></li>
          <li><Link to="tjanster" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>Tjänster</Link></li>
          <li><Link to="personal" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>Personal</Link></li>
          <li><Link to="omoss" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>Om Oss</Link></li>
      </ul>
    </div>
  )
}

export default SideDrawer
