import React from 'react'
import { FaShoppingCart, FaSearchLocation, FaSearch, FaAngleRight } from "react-icons/fa";
import { BsFillBuildingsFill } from "react-icons/bs"
import { TbDeviceLandlinePhone } from "react-icons/tb"
import { data } from '../data';
import { useNavigate } from 'react-router-dom';


const CitySelections = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className=' absolute right-10 top-[10px] items-center text-center'>
        <button className=' flex text-center items-center rounded-full bg-gradient-to-r from-pink-500 to-pink-600 py-3 px-4 text-white font-bold text-lg
         mb-5 mt-2 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)] outline-none gap-2'
          onClick={() => navigate("/cart")}>
          Go to Cart
          <span><FaShoppingCart /></span>
        </button>
      </div>

      <div className='flex items-center justify-center gap-3 mt-[38px]'>
        <p className=' font-normal text-[25px]'>Select your location</p>
        <span className='text-[25px]'> <FaSearchLocation /></span>
      </div>

      <div className='flex items-center justify-center w-[50vw] m-auto mt-10 mb-10'>
        <input type="text" placeholder='Search'
          className='w-[500px] rounded-[20px] py-2 px-4 outline-none border shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)] '
        />
        <span className=' z-10 relative right-[35px] text-slate-400'><FaSearch /></span>
      </div>

      {
        data.map((item, index) => {
          return <div key={index} className='flex justify-around items-center text-center border w-[100vw] m-auto bg-gray-50 '>
            <div className='flex items-center gap-x-3 justify-between w-10 py-1 text-gray-900'>
              <span> <BsFillBuildingsFill /></span>
              <p>{item.name}</p>
            </div>
            <span className='text-gray-00'>{item.date}</span>
            <div>
              <button className=' flex justify-center items-center text-center underline text-pink-500'
              >
                Book Now
                <span className=' text-xl text-slate-400'><FaAngleRight /></span>
              </button>
            </div>
          </div>
        })
      }
      <div className='flex flex-col justify-evenly items-center bg-gray-100 w-full h-[20vh] absolute bottom-0'>
        <p className=' text-[20px] text-slate-700'> Not found the city you are looking for<span></span>? </p>
        <div className='flex items-center '>
          <button className=' flex justify-center items-center gap-x-2 rounded-full bg-white py-3 px-4 text-slate-800 text-lg
         mb-5 mt-2 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)]'
            onClick={() => navigate('/selectseats')}
          >Contact Sales
            <span className=' text-pink-500 font-bold '><TbDeviceLandlinePhone /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default CitySelections
