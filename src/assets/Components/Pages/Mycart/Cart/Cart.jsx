// import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Cart = ({cart}) => {
//     const {_id,name,image}=cart
    
//     const [datas,setdata]=useState()
//     useEffect(()=>{
//         fetch("http://localhost:5000/cart")
//         .then(res=>res.json())
//         .then(data=>setdata(data))
//     },[])



// const [newdatas,setnewdata]=useState(datas)
// console.log(newdatas)
    
    

//     const handledelete=_id=>{
//         fetch(`http://localhost:5000/cart/${_id}`,{
//             method: "DELETE"
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.deletedCount>0)
//             {
//                 alert('deleted')
//                 const remain=datas.filter(data=>data._id !==_id)
//                 setdata(remain)

                
//             }
//         })

        


        
//     }



//     return (
            
//                 <div className='flex space-x-7 border-2 px-20 py-8 rounded-lg my-10'>
//                 <div className=''><img className='h-40 w-80' src={image} alt="" /></div>
//                     <div className='py-8 '>
//                     <p className=' text-2xl font-bold mb-4'>{name}</p>
//                      <div className='flex gap-4'>
//                      <button className='btn bg-orange-200 '>Order item</button>
//                      <button onClick={()=>handledelete(_id)} className='btn bg-red-200 '>Delete item</button>
//                      </div>
//                     </div>
//                 </div>
                
                
                
          
               
            
            
        
//     );
// };

// export default Cart;