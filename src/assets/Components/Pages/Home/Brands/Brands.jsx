import { useEffect, useState } from "react";
import Brand from "./Brand";


const Brands = () => {

    const [brands,Setbrands]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=>res.json())
        .then(data=>Setbrands(data))
    },[])

   
    return (
        <>
        
        <h2 className="text-4xl font-bold text-center mt-24 mb-20">Our <span className="text-orange-400">B</span>rands</h2>
        
        <div className="grid grid-cols-1 mx-14  justify-center items-center md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-14 lg:mx-36">
            {
                brands.map(brand=><Brand key={brand._id} brand={brand}>
                </Brand>)
            }
        </div>
        
        </>
        
     
    );
};

export default Brands;