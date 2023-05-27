import React from 'react'
import logo from "../assets/logo.png"

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <img src={logo} alt="logo image" width={150} height={100} />
        </div>
      </nav>
    </div>
  )
}

export default Header
