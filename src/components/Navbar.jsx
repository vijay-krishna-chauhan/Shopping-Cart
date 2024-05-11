import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const {cart} = useSelector((state) => state);
  const cartExists = cart && Array.isArray(cart);
  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto bg-red-600 w-auto">
      <NavLink to="/">
        <div className='ml-5'>
      <img className='h-16 rounded-full' src="https://e7.pngegg.com/pngimages/289/356/png-clipart-shopping-cart-logo-shoping-angle-service.png"/>
        </div>
      </NavLink>
      <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
        <NavLink to="/">
        <p>Home</p>
        </NavLink>
        {/* <NavLink to="/cart">
        <div className='text-2xl'>
        <IoCart/>
        </div>
        </NavLink> */}
        <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cartExists && cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
      </div>
    </div>
  )
}

export default Navbar