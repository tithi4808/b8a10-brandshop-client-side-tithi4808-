import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Authprovider/Authprovider';


const Navbar = () => {
  const {User,logout}=useContext(AuthContext)
  
          
          
          
          

  const handlelogout=()=>{
      logout()
      .then(result=>{
          console.log(result.user)
      })
      .catch(error=>{
          console.log(error.message)
      })
  }

    const links=<>
        
       
       <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 text-black px-2 rounded-lg" : ""
  } to='/'>Home</NavLink>
       <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400  text-black px-2 rounded-lg" : ""
  } to='/addproducts'>Add Products</NavLink>
       <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "text-red-400 text-black px-2 rounded-lg" : ""
  } to='/cart'>My Cart</NavLink>
        
        
       

    </>
    return (
       <div className='lg:mx-20'>
         <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {links}
            </ul>
          </div>

          <div>
            <img src="https://i.ibb.co/6whH1kv/06-d1-Menu.jpg" alt="" />
          </div>
          
        </div>
        <div className="  hidden lg:flex navbar-center font-semibold space-x-4 ">
          <ul className="menu menu-horizontal px-1 text-lg gap-6">
          
          {links}
          
          </ul>
        </div>
        <div className="navbar-end ">
          {
            User? <div className='hidden md:inline-block md:flex space-x-2'>
              <div className='border-2 rounded-xl flex px-2 py-2 '>
                <img className='w-12 h-12 mr-2 rounded-full' src={User.photoURL} alt="" />
                <p className='text-lg text-center flex justify-center items-center'>{User.displayName}</p>
              </div>
              <button className='text-2xl hover:bg-red-400 hover:text-white font-semibold rounded-2xl mr-6 border-2 py-1 px-4' onClick={handlelogout}>Logout</button>
            </div> :<div className='hidden md:inline-block'><NavLink className='text-xl font-semibold mr-6 border-2 py-2 px-4' to='/login'>Login</NavLink></div>
          }
        </div>
        <div className='navbar-end md:hidden'>
        {
          User? <NavLink className='text-xl font-semibold rounded-2xl mr-6 border-2 py-2 px-4' onClick={handlelogout}>Logout</NavLink> :<NavLink className='text-xl font-semibold mr-6 border-2 py-2 px-4' to='/login'>Login</NavLink>
        }
        </div>
      </div>
       </div>
    );
};

export default Navbar;