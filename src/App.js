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

import pic1 from './img/pic1.jpg'
import pic2 from './img/pic2.jpg'
import pic3 from './img/pic3.jpg'
import pic4 from './img/pic4.jpg'
import pic5 from './img/pic5.jpg'


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
        
          <div><h1>{t('Try.1')}<br/>{t('Try.2')}</h1>
          <h2>{t('Try.3')}</h2></div>
           
      </div>

      <div id="hemstadning" className="flexBox">
        <div className="box1 "></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('WhyHomeCleaning.1')}</h2>
          <p>{t('WhyHomeCleaning.2')}</p></div>
        <div className="box3"></div>
        <div className="background-box1 background1">
          <img src={pic1} alt="" />
        </div>    
      </div>
      
      
      <div id="stadprofil" className="flexBox">
        <div className="background-box2 background2">
          <img src={pic2} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('Enjoy.1')}</h2>
          <p>{t('Enjoy.2')}</p>      
        </div>
        <div className="box8"></div>
      </div>
      
      
      <div id="tjanster" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('Services.1')}</h2>
          <p>{t('Services.2')}</p>   
        </div>
        <div className="box3"></div>
        <div className="background-box1 background3">
          <img src={pic3} alt="" />
        </div>    
      </div>
      
      
      <div id="personal" className="flexBox">
        <div className="background-box2 background4">
          <img src={pic4} alt="" />
        </div>
        <div className="box6"></div>
        <div className="content-box2" data-aos="fade-right">
          <h2>{t('Work.1')}</h2>
          <p>{t('Work.2')}</p>   
        </div>
        <div className="box8"></div>
      </div> 

      <div id="omoss" className="flexBox">
        <div className="box1"></div>
        <div className="content-box1" data-aos="fade-right">
          <h2>{t('About.1')}</h2>
          <p>{t('About.2')}</p>   
        </div>
        <div className="box3"></div>
        <div className="background-box1 background5">
          <img src={pic5} alt="" />
        </div>    
      </div>
      
      <Footer />
      
    </div>
  ) 
}

export default App;
