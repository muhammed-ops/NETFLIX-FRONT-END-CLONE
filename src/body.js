import React from 'react'
import pic from './wednesday.jpg'
import { FaPlay } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

function Body() {
  return (
    <div className='body'>
        <div className='text'>
        <p className='top'>TOP<br></br>BOY</p>
        <p className='play'><FaPlay className='playlogo'/>Play</p>
        <p className='list'><AiOutlinePlus className='listlogo'/>My List</p>
        <p className='this'>This drama takes viewers into the housing estates of east London. There is tension between the drug gangs that operate almost openly and those who strive to live honest lives against the odds in the crime-riddled area.</p>
        </div>
        <img src={pic} alt='ima' className='wed'></img>
    </div>
  )
}

export default Body;