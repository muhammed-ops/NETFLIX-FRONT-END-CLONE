import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import Logo from './avatar.png';


function Header() {
  return (
    <div className='header'>
        <div className='netflix'>
         <p>NETFLIX</p>
        </div>
        <div className='home'>
        <a href='w'>Home</a>
        <a href='w'>TvShows</a>
        <a href='w'>Movies</a>
        <a href='w'>RecentlyAdded</a>
        <a href='w'>My list</a>
        </div>
        <div className='logo'>
        <FaSearch className='lg'/>
        <IoNotificationsOutline className='lg'/>
        <img src={Logo} alt='im' className='image'></img>
        </div>
    </div>
  )
}

export default Header