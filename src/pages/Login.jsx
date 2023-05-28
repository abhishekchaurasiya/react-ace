import React from 'react'
import "../Styles/Login.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import bg from "../assets/bg.jpg"


const Login = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col justify-center items-center p-3'>
      <div className='sm:flex sm:justify-around sm:items-center sm:w-[80vw] relative'>
        <div>
          <img src={bg} alt="" width={600} height={600} />
        </div>

        <div className='flex flex-col justify-between'>
          <p className=' font-black mb-4'>Login here!</p>
          <input type="text"
            placeholder='Username of Phone'
            className='border border-slate-700 outline-none rounded px-3 py-2 mb-4'
          />
          <input type="text"
            placeholder='Password'
            className='border border-slate-700 outline-none rounded px-3 py-2'
          />
          <div className='flex justify-end'>
            <p className=' font-light text-sm'>Forgot Password?</p>
          </div>
          <button className='rounded-full bg-gradient-to-r from-pink-500 to-pink-600 py-3 px-4 text-white font-bold text-lg
         mb-5 mt-2 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)]'
            onClick={() => navigate("/cityselection")}
          >
            Login
          </button>
          <div className='flex items-center mb-3'>
            <div className='line1'></div>
            <p className='px-2 font-light text-sm cursor-pointer'>Or Sign-up With</p>
            <div className='line2'></div>
          </div>
          <div className='flex justify-center items-center gap-x-4 mb-14'>
            <span className='bg-slate-300 rounded-full p-1 cursor-pointer'> <FcGoogle size={'20px'} /></span>
            <span className=' bg-slate-300 rounded-full p-1 cursor-pointer'> <FaFacebook color='blue' size={'20px'} /></span>
          </div>
        </div>
      </div>
      <div class="h-[15vh] bg-gradient-to-r from-pink-500 to-pink-800 w-[100vw] sm:absolute right-0 left-0 bottom-0 "></div>


    </div>
  )
}

export default Login
