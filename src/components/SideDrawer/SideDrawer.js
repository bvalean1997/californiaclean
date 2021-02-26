import React from 'react'
import './SideDrawer.css'
import {Link} from 'react-scroll'
import { useTranslation } from 'react-i18next'

const SideDrawer = props => {
  const { t, i18n } = useTranslation()
  let drawerClasses = ['side-drawer']
  if (props.show) {
    drawerClasses = ['side-drawer open']
  }
return (
    <div className={drawerClasses}>
      <ul>
        <li><Link to="hemstadning" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.1')}</Link></li>
        <li><Link to="stadprofil" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.2')}</Link></li>
        <li><Link to="tjanster" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.3')}</Link></li>
        <li><Link to="personal" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.4')}</Link></li>
        <li><Link to="omoss" activeClass="active" smooth={true} duration={300} spy={true} offset={-80}>{t('HomeCleaning.5')}</Link></li>
      </ul>
    </div>
  )
}

export default SideDrawer
