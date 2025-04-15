import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import breaking_bad from '../../assets/breaking_bad.jpg'
import pngwing from '../../assets/pngwing.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={breaking_bad} alt="" className='banner-img'/>
        <div className="hero-caption">
          <img src={pngwing} alt="" className='caption-img'/>
          <p>Walter White, a chemistry teacher, discovers that he has cancer <br />
          and decides to get into the meth-making business to repay <br />his medical debts. His priorities begin to change 
          when he partners with Jesse.
          </p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt=""/> Play</button>
            <button className='btn dark-btn'><img src={info_icon} alt=""/> More Info</button>
          </div>
          <TitleCards />     
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"Only on Netflix"} category={"popular"}/>
        <TitleCards title={"Upcoming"} category={"upcoming"}/>
        <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home
