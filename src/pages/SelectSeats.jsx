import React, { useState } from 'react'
import { FaShoppingCart, FaAngleLeft } from 'react-icons/fa'
import { ImLocation } from 'react-icons/im'
import { AiFillStar } from "react-icons/ai"
import { CiCirclePlus } from "react-icons/ci"

import bg from "../assets/bg3.png";
import { CiCircleMinus } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom'
import HOC from '../components/HOC'




const SelectSeats = () => {

  const navigate = useNavigate();
  const [count, setSetcount] = useState(1)
  const increaseHandler = () => {

  }

  const decreaseHandler = () => {

  }


  return (
    <div className=''>
      <div className=' absolute right-60 top-[10px] items-center text-center '>
        <button className=' flex text-center items-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 py-3 px-4 text-white font-bold text-lg
         mb-5 mt-2 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)] outline-none gap-2'
          onClick={() => navigate("/cityselection")}>
          Select City
          <span><ImLocation /></span>
        </button>
      </div>
      <div className=' absolute right-10 top-[10px] items-center text-center'>
        <button className=' flex text-center items-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 py-3 px-4 text-white font-bold text-lg
         mb-5 mt-2 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)] outline-none gap-2'
          onClick={() => navigate("/cart")}>
          Go to Cart
          <span><FaShoppingCart /></span>
        </button>
      </div>
      <div className='flex justify-center h-[300px]'>
        <img src={bg} alt="images" />
      </div>

      <div className='flex justify-around items-center bg-[#DDDDDD]'>
        <p className=' underline font-bold text-lg py-2'>Color Code</p>
        <div className='flex gap-x-5'>
          <div className='flex items-center gap-x-2'>
            <p className=' text-green-500' >H1 </p>
            <p className=' text-green-500'>-</p>
            <div className='w-[20px] h-[20px] bg-green-500 rounded-full'></div>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className=' text-orange-500'>H2 </p>
            <p className=' text-orange-500'>-</p>
            <div className='w-[20px] h-[20px] bg-orange-500 rounded-full'></div>
          </div>
          <div className='flex items-center gap-x-2'>
            <p className=' text-gray-500'>H3 </p>
            <p className=' text-gray-500'>-</p>
            <div className='w-[20px] h-[20px] bg-gray-500 rounded-full'></div>
          </div>
        </div>
      </div>

      {/* first table */}

      <div className=' flex justify-around items-center py-3 border-b bg-white'>
        <div className='flex items-baseline gap-x-3'>
          <span className='bg-green-500 rounded-full p-1'>  <AiFillStar color='yellow' size={22} /></span>
          <p className=' text-[#00B33C] font-bold  text-[20px]'><span>₹</span>55,000</p>
          <p className=' text-[#00B33C] font-bold text-[20px]'>32 <span>Sq.</span> <span>Mt.</span></p>
        </div>
        <div className='flex gap-x-5'>
          <HOC />
        </div>
      </div>

      <div className=' flex justify-around items-center  py-3 border-b bg-white'>
        <div className='flex items-baseline gap-x-4'>
          <span className='bg-orange-500 rounded-full p-1 w-[20px] h-[20px]'></span>
          <p className='  text-orange-500 font-normal  text-[15px]'><span>₹</span>35,000</p>
          <p className=' text-orange-500 font-normal text-[15px]'>32 <span>Sq.</span> <span>Mt.</span></p>
        </div>
        <div className='flex gap-x-5'>
          <HOC />
        </div>
      </div>

      <div className=' flex justify-around items-center py-3 border-b bg-white'>
        <div className='flex items-baseline gap-x-4'>
          <span className='bg-gray-500 rounded-full p-1 w-[15px] h-[15px]'></span>
          <p className='  text-gray-500 font-normal  text-[15px]'><span>₹</span>25,000</p>
          <p className=' text-gray-500 font-normal text-[15px]'>18 <span>Sq.</span> <span>Mt.</span></p>
        </div>

        <div className='flex gap-x-5'>
          <HOC />
        </div>

      </div>


      <button className='flex items-center justify-center m-auto mt-10 underline text-gray-700 '
        onClick={() => navigate("/cityselection")}>
        <FaAngleLeft />
        Back to City
      </button>

    </div>
  )
}

export default SelectSeats
