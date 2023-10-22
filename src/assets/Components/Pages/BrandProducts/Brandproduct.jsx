import React from 'react';
import { useNavigate } from 'react-router-dom';

const Brandproduct = ({data}) => {
    const {_id,name,brand_name,type,price,description,rating,image}=data
    const navigate=useNavigate()

    

    const handledetails=()=>{
        navigate(`/products/${name}`)

    }
    const handleupdate=()=>{
        navigate(`/update/${_id}`)

    }
    return (
        <div className='mb-20 bg-base-100 shadow-lg px-4 py-8 rounded-3xl  gap-6'>
           <div className='flex items-center justify-center mb-10'>
           <img src={image} className='rounded-3xl h-80' alt="" />
           </div>

         <div className='text-center'>
         <h3 className='text-xl font-bold'>{name}</h3>
         <p ><span className='font-semibold'>Brand name </span>: {brand_name}</p>
         <p><span className='font-semibold'>Type:</span> {type}</p>
         <p><span className='font-semibold'>Price:</span> {price}</p>
         <p><span className='font-semibold'>Description:</span> {description}</p>
         <p><span className='font-semibold'>Rating:</span> {rating}</p>
         <div className='space-x-4 mt-4'>
         <button onClick={handledetails} className='btn bg-orange-400'>Details</button>
         <button onClick={handleupdate} className='btn bg-red-400'>Update</button>
         </div>

            
            </div>
            
        </div>
    );
};

export default Brandproduct;