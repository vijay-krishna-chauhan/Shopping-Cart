import React from 'react'
import { IoCart } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between bg-slate-500">
      <NavLink to="/">
        <div className='m-1'>
      <img className='h-16 rounded-full' src="https://e7.pngegg.com/pngimages/289/356/png-clipart-shopping-cart-logo-shoping-angle-service.png"/>
        </div>
      </NavLink>
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/">
        <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
        <div className='text-2xl'>
        <IoCart/>
        </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar