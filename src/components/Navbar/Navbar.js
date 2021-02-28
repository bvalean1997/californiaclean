import React, { useState, useEffect } from 'react'
import logo from '../../img/palm.png'
import './Navbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {Link} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import Toggle from '../Toggle'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18next'


const Navbar = props => {
  
  const { t, i18n } = useTranslation()  
  const [toggled, setToggled] = useState(false)
  
  const toggleClickHandler = () => {
    setToggled(s => !s)    
    toggled ? i18n.changeLanguage('se') : i18n.changeLanguage('en')          
  }

  useEffect(() => {
    if (i18n.language === "en") setToggled(true)
  }, []);  
  
  return (
    <header>
      <nav> 
        <div className="toolbar__toggle-button">
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>   
        <div className="logotype" onClick={() => scroll.scrollToTop()}>
          <h4>
            <img className="logo" src={logo} alt="California Clean"/>
            California Clean</h4>
        </div>
        <ul className="navigation">
          <li><Link to="hemstadning" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.1')}</Link></li>
          <li><Link to="stadprofil" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.2')}</Link></li>
          <li><Link to="tjanster" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.3')}</Link></li>
          <li><Link to="personal" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.4')}</Link></li>
          <li><Link to="omoss" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.5')}</Link></li>
        </ul>
        <Toggle toggled={toggled} onClick={toggleClickHandler} />
      </nav>
    </header>
  )
}

export default Navbar;