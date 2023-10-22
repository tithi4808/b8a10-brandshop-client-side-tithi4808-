import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

const Mycart = () => {

    const loadedcartitems=useLoaderData()
    const [cartitem,setcartitems]=useState(loadedcartitems)
    

    const handledelete=_id=>{
        fetch(`http://localhost:5000/cart/${_id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0)
            {
                alert('deleted')
                const remain=cartitem.filter(data=>data._id !==_id)
                setcartitems(remain)

                
            }
        })

        


        
    }


    
    return (
        <div className='my-20 mx-96'>
            {
                cartitem.map(cart=> <div key={cart._id} className='flex space-x-7 border-2 px-20 py-8 rounded-lg my-10'>
                <div className=''><img className='h-40 w-80' src={cart.image} alt="" /></div>
                    <div className='py-8 '>
                    <p className=' text-2xl font-bold mb-4'>{cart.name}</p>
                     <div className='flex gap-4'>
                     <button className='btn bg-orange-200 '>Order item</button>
                     <button onClick={()=>handledelete(cart._id)} className='btn bg-red-200 '>Delete item</button>
                     </div>
                    </div>
                </div>)
            }
            
        </div>
    );
};

export default Mycart;

