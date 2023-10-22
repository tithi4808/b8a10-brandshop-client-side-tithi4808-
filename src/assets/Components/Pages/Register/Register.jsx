import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import {  ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCurrentUser, updateProfile } from 'firebase/auth';
const Register = () => {

  const {createUser,User}=useContext(AuthContext)
  const [success,setsuccess]=useState('')
  const [errormsg,seterrormg]=useState('')
  

    const handleRegister=e=>{
      
        e.preventDefault()
        

        
        const email=e.target.email.value
        const password=e.target.password.value
        const name=e.target.name.value
        const photo=e.target.photo.value
        

        if(password.length<6)
        {
          seterrormg('Password should have at least 6 character')
            toast(errormsg);
            return;
        }
        
         if(!/[A-Z]/.test(password))
        {
            seterrormg('Password should contain at least one Capital letter')
            toast(errormsg)
            return;
        }
         if(!/[ -\/:-@\[-\`{-~]/.test(password))
        {
            seterrormg('Password should contain at least one Special Character')
            toast(errormsg)
            return;
        }

        

        createUser(email,password)
        .then((result) => {
          const user = result.user;
          const displayName = name; 
          const photoURL=photo;
          

          return updateProfile(user, { displayName, photoURL });
        })
        .then(() => {
          setsuccess('Registration Successful');
          toast(success);
        })

        .catch(error=>{
          
          console.log(error.message)
          

  
              seterrormg('Email already in use')
              toast(errormsg)

        })
    }
    return (
        <div>
        <div className="hero min-h-screen bg-sky-50">
<div className="hero-content flex-col">
<div className="text-center lg:text-left">
  <h1 className="text-4xl font-bold mb-4">Register now!</h1>
  
</div>
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
  <form onSubmit={handleRegister} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your name</span>
      </label>
      <input name='name' type="text" placeholder="Your name" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email id</span>
      </label>
      <input name='email' type="email" placeholder="email" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name="password" placeholder="password" className="input input-bordered" required />
      
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-sky-300">Register</button>
    </div>
    <p className='mt-4 text-sm'>Already have an account?Please <span> <NavLink className='text-blue-400 hover:underline' to='/login'>Login</NavLink> </span> </p>

  </form>

  
</div>
</div>
</div>
<ToastContainer />
    </div>
    );
};

export default Register;