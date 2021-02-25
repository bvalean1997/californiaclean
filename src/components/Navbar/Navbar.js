import React from 'react'
import logo from '../../img/palm.png'
import './Navbar.css'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import {Link} from 'react-scroll'
import {animateScroll as scroll} from 'react-scroll'
import Toggle from '../Toggle'
import { useTranslation } from 'react-i18next'


const Navbar = props => {
  const { t, i18n } = useTranslation()
  const [toggled, setToggled] = React.useState(false)
  const toggleClickHandler = () => {
    setToggled(s => !s)
    if (toggled) i18n.changeLanguage('se')
    else i18n.changeLanguage('en')    
  }
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
          <li><Link to="stadprofil" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('CleaningProfile.1')}</Link></li>
          <li><Link to="tjanster" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('Services.1')}</Link></li>
          <li><Link to="personal" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('Work.1')}</Link></li>
          <li><Link to="omoss" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('About.1')}</Link></li>
        </ul>
        <Toggle toggled={toggled} onClick={toggleClickHandler} />
      </nav>
    </header>
  )
}

export default Navbar;