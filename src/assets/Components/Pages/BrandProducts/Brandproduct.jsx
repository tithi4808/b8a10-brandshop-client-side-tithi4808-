import React from 'react';

const Brandproduct = ({data}) => {
    const {_id,name,brand_name,type,price,description,rating,image}=data
    return (
        <div className='mb-20 bg-base-100 shadow-lg px-4 py-8 rounded-3xl  gap-6'>
           <div className='flex items-center justify-center'>
           <img src={image} className='rounded-3xl ' alt="" />
           </div>

         <div className='text-center'>
         <h3 className='text-xl font-bold'>{name}</h3>
         <p ><span className='font-semibold'>Brand name </span>: {brand_name}</p>
         <p><span className='font-semibold'>Type:</span> {type}</p>
         <p><span className='font-semibold'>Price:</span> {price}</p>
         <p><span className='font-semibold'>Description:</span> {description}</p>
         <p><span className='font-semibold'>Rating:</span> {rating}</p>
         <div className='space-x-4 mt-4'>
         <button className='btn bg-orange-400'>Details</button>
         <button className='btn bg-red-400'>Update</button>
         </div>

            
            </div>
            
        </div>
    );
};

export default Brandproduct;