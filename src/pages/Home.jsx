import React from 'react'
import Header from '../components/Header'
import Login from './Login'
import bg from "../assets/bg.jpg"

const Home = () => {
    return (
        <div className=' w-[100vw] '>
            <div className=' flex justify-around items-center w-[80vw] m-auto'>
                <img src={bg} alt="" width={500} height={500} />
                <Login />
            </div>
            <div class="h-[15vh] bg-gradient-to-r from-pink-500 to-pink-800 top-100 right-0 left-0 bottom-0 fixed "></div>
        </div>
    )
}

export default Home
