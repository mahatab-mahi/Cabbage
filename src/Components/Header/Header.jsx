import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import HeadImg from '../../assets/img/headerimg.png'

const Header = () => {
  return (
    <div className='bg-[#0A472E] py-4.5 '>
       <div className="container flex justify-between items-center">
           <div className='flex gap-1.25 items-center'>
              <CiLocationOn className='text-[#80B500]'/>
              <p className='font-nunito font-normal text-[15px] text-white'>254 Lillian, Holbrook</p>
               <span className='text-white '>|</span>
                <MdOutlineEmail className='text-[#80B500]'/>
                 <p className='font-nunito font-normal text-[15px] text-white'>info@santizex-site.com</p>
           </div>
           <div className='flex items-center gap-8.25' >
            <p className='font-nunito font-normal text-white text-[15px]'>facebook - behance - interest</p>

            <div className='flex items-center gap-3.75'>
                    <span className='text-white inline-block'>|</span>
                <img src={HeadImg} alt="Header Image" />
                <p className='font-nunito text-white font-normal text-[14px]'>EN</p>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Header
