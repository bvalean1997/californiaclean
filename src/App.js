import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import Top from './components/Top'
import Footer from './components/Footer'

import Aos from 'aos'
import "aos/dist/aos.css"


const App = () => {

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
          <h1>Prova hemstädning idag<br/>för 100kr i timmen</h1>
          <h3>Ring oss på 0728 69 21 23</h3>      
        </div>   
      </div>

      <div id="hemstadning" className="flexBox">
        <div className="box1 "></div>
        <div className="box2" data-aos="fade-right">
          <h2>Varför hemstädning</h2>
          <p>Vi tror att moderna människor och familjer behöver städhjälp för att hinna med det där lilla extra i vardagen. Att komma hem till ett professionellt städat hem är en upplevelse som känns bra. Smuts, damm och bakterier blir borttagna på de där ytor som du inte har tid för eller har svårt att komma åt. Vi har erfarenheten av att göra ett mycket bra jobb på ett snabbt och säkert sätt.</p></div>
        <div className="box3"></div>
        <div className="box4 background1"></div>    
      </div>
      
      
      <div id="stadprofil" className="flexBox">
        <div className="box5 background2"></div>
        <div className="box6"></div>
        <div className="box7" data-aos="fade-left">
          <h2>Vi städar, du njuter</h2>
          <p>Vi kommer tillsammans överens om vad som ska ingå i din städprofil och vid varje tillfälle kommer samma medarbetare ut för att utföra uppraget. I vårt städpaket ingår alltid miljövänliga rengöringsprodukter samt handdukar för vi värnar om miljön både innanför och utanför dina dörrar.</p>      
        </div>
        <div className="box8"></div>
      </div>
      
      
      <div id="tjanster" className="flexBox">
        <div className="box1"></div>
        <div className="box2" data-aos="fade-right">
          <h2>Tjänster</h2>
          <p>Våra professionella städare har utbildning inom Första-gångs-städning, storstädning, fönsterputs, köks och badrumsstädning, samt flyttstädning. I princip så täcker vi alla dina städbehov hemma och är det något som inte är standard går det alltid att lägga till extra tjänster.</p>   
        </div>
        <div className="box3"></div>
        <div className="box4 background3"></div>    
      </div>
      
      
      <div id="personal" className="flexBox">
        <div className="box5 background4"></div>
        <div className="box6"></div>
        <div className="box7" data-aos="fade-left">
          <h2>Personalutbildning</h2>
          <p>Vill du jobba med California Clean? Vi tränar personal i städning och alla medarbetare genomgår en omfattande utbildning med allt från materialkunskap och möbelvård till användning av städprodukter klädvård och specialutrustning. Eftersom många av våra medarbetare kommer från engelskspråkiga länder tränar vi till och med Svenska tillsammans.</p>   
        </div>
        <div className="box8"></div>
      </div> 

      <div id="omoss" className="flexBox">
        <div className="box1"></div>
        <div className="box2" data-aos="fade-right">
          <h2>Om California Clean</h2>
          <p>California Clean etablerades 1996 i Californien och drevs lyckosamt i 10 soliga år. Senare flyttade företaget till Nederländerna och Belgien och nu är vi stadgade i Sverige.</p>   
        </div>
        <div className="box3"></div>
        <div className="box4 background5"></div>    
      </div>
      
      <Footer />
      
    </div>
  ) 
}

export default App;
