import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { ImLocation } from 'react-icons/im'
import { TbShoppingCartPlus } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className=' absolute right-20 top-[10px] items-center text-center '>
        <button className=' flex text-center items-center rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600
         py-3 px-4 text-white font-bold text-lg mb-5 mt-2 shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)] outline-none gap-2'
          onClick={() => navigate("/")}>
          Select City
          <span><ImLocation /></span>
        </button>
      </div>
      <div className='flex flex-col gap-y-10'>
        <div className='flex items-center justify-center mt-10 gap-x-1'>
          <h1 className=' font-medium text-2xl text-gray-700'> Shopping Bag - Checkout</h1>
          <FaShoppingCart size={18} className='text-gray-700' />
        </div>
        <div className='flex justify-center flex-col items-center text-gray-400 mb-20 '>
          <TbShoppingCartPlus size={150} />
          <p>Add item to cart to</p>
          <span>get Started!</span>
        </div>
      </div>

      <div className='bg-gray-100 flex flex-col justify-evenly px-52 py-4 absolute bottom-0 w-full'>
        <div className='flex items-center text-center gap-x-2 mb-4'>
          <div className='w-1 h-1 bg-pink-500 rounded-full'></div>
          <p className=' text-pink-500'>We levy a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event.</p>
        </div>

        <div className='flex justify-between text-gray-600'>
          <p>Subtotal</p>
          <p><span>₹</span>3,20,000.00</p>
        </div>
        <div className='flex  justify-between text-gray-600'>
          <p>Tax</p>
          <p><span>₹</span>32,000.00</p>
        </div>
        <div className='flex  justify-between text-gray-900 font-medium'>
          <p>Total</p>
          <p><span>₹</span>3,52,000.00</p>
        </div>
        <button className=' w-[200px] m-auto rounded-full bg-gradient-to-r from-gray-400 to-gray-600 py-3 px-4
         text-white font-bold text-lg shadow-[0px_2px_3px_1px_rgba(0,0,0,0.3)] mb-8 '>
          Pay Now
        </button>
      </div>

    </div>
  )
}

export default Cart
