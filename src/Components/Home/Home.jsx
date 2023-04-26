import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/waves.mp4'
import {FiSearch} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])


  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Your Location:
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Iloilo City
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="descriptionInput">
            <label htmlFor="agency">Search an agency</label>
            <div className="input flex">
              <input type="text" placeholder='Search here...'/>
              <button className="btn flex">
                  Search <FiSearch className='icon'/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home