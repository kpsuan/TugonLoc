import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'
import { AiFillStar } from 'react-icons/ai'

import img from '../../Assets/1.png'
import img2 from '../../Assets/2.jpg'
import img3 from '../../Assets/3.png'
import img4 from '../../Assets/4.png'
import img5 from '../../Assets/5.jpg'
import img6 from '../../Assets/6.jpg'
import img7 from '../../Assets/7.png'
import img8 from '../../Assets/8.png'
import img9 from '../../Assets/9.png'


import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id: 1,
    imgSrc: img,
    officeTitle: 'Metro Iloilo Water',
    location: 'Somewhere there',
    rating: '4.5'
  },

  {
    id: 2,
    imgSrc: img2,
    officeTitle: 'ILECO',
    location: 'Somewhere there',
    rating: '3.4'
  },

  {
    id: 3,
    imgSrc: img3,
    officeTitle: 'ILOILO CITY LGU',
    location: 'Somewhere there',
    rating: '2'
  },

  {
    id: 4,
    imgSrc: img4,
    officeTitle: 'DEPED REGIONAL OFFICE',
    location: 'diha ragud',
    rating: '4.3'
  },
  {
    id: 5,
    imgSrc: img5,
    officeTitle: 'LTO ROBINSONS ILOILO',
    location: 'diha ragud',
    rating: '2'
  },
  {
    id: 6,
    imgSrc: img6,
    officeTitle: 'PHILHEALTH ILOILO CITY',
    location: 'diha ragud',
    rating: '2'
  },
  {
    id: 7,
    imgSrc: img7,
    officeTitle: 'PSA GT PAVIA',
    location: 'diha ragud',
    rating: '3.5'
  },
  {
    id: 8,
    imgSrc: img8,
    officeTitle: 'DFA ILOILO CITY',
    location: 'diha ragud',
    rating:'4'
  },
  {
    id: 9,
    imgSrc: img9,
    officeTitle: 'GSIS ILOILO',
    location: 'diha ragud',
    rating: '2'
  },
]
const Main = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">Offices near you</h3>
      </div>
      <div className="secContent grid">
      { 

      }
      {
        Data.map(({id, imgSrc, location, officeTitle, rating })=>{
          return(
            <div key={id} data-aos="fade-up" className="offices">
              {}
              <div className="imageDiv">
                <img src={imgSrc} alt={officeTitle} className="" />
              </div>

              <div className="cardInfo">
                <h4 className="officeTitle">{officeTitle}</h4>
                <span className="location flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="location">{location}</span>
                </span>
            
              <div className="rating flex">
                <div className="titleRate">
                <span>Rating<small></small></span>
                </div>

                <span className="rate flex">
                  <AiFillStar className='icon'/>
                  <span className="rate">{rating}</span>
                </span>
              </div>


                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className='icon'/>
                </button>
              </div>
            </div>
          )
        })
      }
      </div>
    </section>
  )
}

export default Main