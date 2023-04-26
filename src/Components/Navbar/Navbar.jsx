import React, { useState } from 'react'
import './navbar.css'
import logo from '../../Assets/tugonlogo.png'
import {IoIosCloseCircleOutline} from "react-icons/io";
import {HiDotsHorizontal} from "react-icons/hi";
const Navbar = () => {
  const [active, setActive] = useState('navBar')
  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }

  const removeNavbar = ()=>{
    setActive('navBar')
  }
  return (
    <section className='navBarSection'>
      <header className='header flex'>
       
        <div className='logoDiv'>
          <a href="/#" className='logo flex'>
          <img src={logo} className="logo" alt="logo"/>
          </a>
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href="#" className='navLink'>Home</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>Notifications</a>
            </li>

            <li className='navItem'>
              <a href="#" className='navLink'>Profile</a>
            </li>      
          </ul>

          <div onClick={removeNavbar} className='closeNavbar'>
            <IoIosCloseCircleOutline className='icon'/>
          </div>
        </div>

        <div onClick={showNav}
         className='toggleNavbar'>
          <HiDotsHorizontal className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar