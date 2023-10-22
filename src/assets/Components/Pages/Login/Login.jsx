import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { toast,ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Authprovider/Authprovider';

const Login = () => {
  const {login,User,googlelogin}=useContext(AuthContext)
  const location=useLocation()
  
  const navigate=useNavigate()


    const handlelogin=e=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password)
        
        login(email,password)
        .then(result=>{
          console.log(result.user)
          
          navigate(location?.state?location.state:'/' )
        })
        .catch(error=>toast(error.code))
    }
    const handlegooglelogin=()=>{
      googlelogin()
      .then(result=>
        {
          console.log(result.user)
          
          navigate(location?.state?location.state:'/' )
        })
      .catch(error=>console.log(error.message))
    }

    

    return (
        <div>
            <div className="hero min-h-screen bg-sky-50">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-4">Login now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className='btn  bg-sky-300 text-white '>Login</button>
        </div>
        <div className="form-control ">
          <button onClick={handlegooglelogin} className='btn'>Login with Google</button>
        </div>
        <p className='mt-4 text-sm'>Don't have an account?Please <span> <NavLink className='text-blue-400 hover:underline' to='/register'>Register</NavLink> </span> </p>
      </form>
    </div>
  </div>
  <ToastContainer />
</div>
        </div>
    );
};

export default Login;