import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div className="mt-24">
            <h1 className="text-4xl font-bold text-center mb-2">OOPS!!</h1>
            <p className="text-2xl text-center mb-16">Sorry,This page doesn't exist</p>

            
           <div className='flex justify-center items-center'> <button className="bg-gray-300 text-center px-4 py-2 text-black font-bold rounded"><NavLink to='/'>Go Back</NavLink></button></div>
            
        </div>
    );
};

export default Errorpage;