import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Top from './components/Top'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'

import Aos from 'aos'
import "aos/dist/aos.css"


const App = () => {

  const { t, i18n } = useTranslation()
  const [sideDrawerOpen, setsideDrawerOpen] = useState(false)  

  const drawerToggleClickHandler = () => {
    setsideDrawerOpen((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  const backdropClickHandler = () => {
    setsideDrawerOpen(false)
  }

  let backdrop

  if (sideDrawerOpen) {      
    backdrop = <Backdrop click={backdropClickHandler}/>
  }

  useEffect(() => {
    Aos.init({
      
    })
  }, []);

  return (
    <div>
      <Top />
      <Navbar drawerClickHandler={drawerToggleClickHandler}/>
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}   

      <div className="top">
        <div>
          <h1>{t('Try.1')}<br/>{t('Try.2')}</h1>
          <h3>{t('Try.3')}</h3>      
        </div>   
      </div>

      <div id="hemstadning" className="flexBox">
        <div className="box1 "></div>
        <div className="box2" data-aos="fade-right">
          <h2>{t('WhyHomeCleaning.1')}</h2>
          <p>{t('WhyHomeCleaning.2')}</p></div>
        <div className="box3"></div>
        <div className="box4 background1"></div>    
      </div>
      
      
      <div id="stadprofil" className="flexBox">
        <div className="box5 background2"></div>
        <div className="box6"></div>
        <div className="box7" data-aos="fade-right">
          <h2>{t('Enjoy.1')}</h2>
          <p>{t('Enjoy.2')}</p>      
        </div>
        <div className="box8"></div>
      </div>
      
      
      <div id="tjanster" className="flexBox">
        <div className="box1"></div>
        <div className="box2" data-aos="fade-right">
          <h2>{t('Services.1')}</h2>
          <p>{t('Services.2')}</p>   
        </div>
        <div className="box3"></div>
        <div className="box4 background3"></div>    
      </div>
      
      
      <div id="personal" className="flexBox">
        <div className="box5 background4"></div>
        <div className="box6"></div>
        <div className="box7" data-aos="fade-right">
          <h2>{t('Work.1')}</h2>
          <p>{t('Work.2')}</p>   
        </div>
        <div className="box8"></div>
      </div> 

      <div id="omoss" className="flexBox">
        <div className="box1"></div>
        <div className="box2" data-aos="fade-right">
          <h2>{t('About.1')}</h2>
          <p>{t('About.2')}</p>   
        </div>
        <div className="box3"></div>
        <div className="box4 background5"></div>    
      </div>
      
      <Footer />
      
    </div>
  ) 
}

export default App;
