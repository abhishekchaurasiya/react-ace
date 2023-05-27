import React from 'react'
import "../Styles/Login.css"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p className=' font-black mb-4'>Login here!</p>
      <div className='flex flex-col'>
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
         onClick={()=> navigate("/cityselection")}
         >
          Login
        </button>
        <div className='flex items-center mb-3'>
          <div className='line1'></div>
          <p className='px-2 font-light text-sm cursor-pointer'>Or Sign-up With</p>
          <div className='line2'></div>
        </div>
        <div className='flex justify-center items-center gap-x-4'>
          <span className='bg-slate-300 rounded-full p-1 cursor-pointer'> <FcGoogle size={'20px'} /></span>
          <span className=' bg-slate-300 rounded-full p-1 cursor-pointer'> <FaFacebook color='blue' size={'20px'} /></span>
        </div>
      </div>
    </div>
  )
}

export default Login
