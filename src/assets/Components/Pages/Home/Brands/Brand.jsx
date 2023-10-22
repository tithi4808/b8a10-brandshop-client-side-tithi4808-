import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Brand = ({brand}) => {
    const {name,brand_image}=brand
   

    const navigate=useNavigate()
    
    

    const handlebrand=name=>{
        navigate(`brands/${name}`)
        
    }
    return (
        <div >
            <div onClick={()=>handlebrand(name)} className="card w-80 lg:w-96 h-80  shadow-xl p-4">
            <div className="card-body">
                <h2 className=" text-center text-3xl  font-bold italic rounded-3xl">{name}</h2>
                
            </div>
            <figure><img src={brand_image} alt="" /></figure>
            </div>
        </div>
    );
};

export default Brand;