import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className=''>
      <nav className='bg-slate-200 w-[100vw] flex justify-center'>
        <img src={logo} alt="logo image" width={150} height={100} />
      </nav>
    </div>
  )
}

export default Header
