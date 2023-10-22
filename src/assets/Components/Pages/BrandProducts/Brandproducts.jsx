import React, { useEffect, useState } from 'react';
import Brands from '../Home/Brands/Brands';
import { useLoaderData, useParams } from 'react-router-dom';
import Brandproduct from './Brandproduct';

const BrandProducts = () => {

    const loadeddata=useLoaderData();
   
    const brandname=useParams()
    

     const newdata=loadeddata.filter(data=> data.
        brand_name.toLowerCase==brandname.name.toLowerCase)

    

    

    return (
        <div className='lg:mx-40'>

            

            <h2 className='text-3xl font-bold text-center mt-20'>{brandname.name} <span className='text-orange-400'>Products</span></h2>

           
<div>
    
{
                newdata.length? <div>{
                    newdata.map(data=><Brandproduct key={data._id} data={data}></Brandproduct>)
                    }</div>:<div><h3>
                    Comming soon
                    </h3></div>
            }
</div>
            
        </div>
    );
};

export default BrandProducts;