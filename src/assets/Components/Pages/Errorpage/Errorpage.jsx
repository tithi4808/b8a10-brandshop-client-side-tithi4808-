import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="mt-24">
            <h1 className="text-4xl font-bold text-center mb-2">OOPS!!</h1>
            <p className="text-2xl text-center mb-16">Sorry,This page doesn't exist</p>

            
           <div className='flex justify-center items-center'> <NavLink className="text-orange-500" to='/'>Go Back</NavLink>
            
        </div> </div>
    );
};

export default Errorpage;