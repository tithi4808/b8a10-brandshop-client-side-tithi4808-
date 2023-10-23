import React from 'react';
import Swal from 'sweetalert2'

const Productdetail = ({data}) => {

    const {name,image,details}=data

    const handleaddcart=()=>{
  
        const newdata={name,image}
        
        fetch('http://localhost:5000/cart',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(newdata),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        Swal.fire('Added to cart')
       

        
    }
    return (
        <div className='shadow-lg lg:mx-40 p-8 rounded-lg my-20'>
            <div className='flex my-10 justify-center items-center'><img src={image} className='h-80 ' alt="" /></div>
            <div>
            <h2 className='text-center my-10 text-2xl font-bold'>{name}</h2>
            <p className='text-center text-lg'>{details}</p>
            </div>
            <div className='my-10 flex justify-center items-center'>
            <button onClick={handleaddcart} className='btn bg-orange-200'>Add To Cart</button>
            </div>
        </div>
    );
};

export default Productdetail;