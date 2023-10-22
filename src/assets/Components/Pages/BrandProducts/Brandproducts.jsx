import React, { useEffect, useState } from 'react';
import Brands from '../Home/Brands/Brands';
import { useLoaderData, useParams } from 'react-router-dom';
import Brandproduct from './Brandproduct';

const BrandProducts = () => {

    const loadeddata=useLoaderData();
   
    const brandname=useParams();

    const [brands,Setbrands]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/brands')
        .then(res=>res.json())
        .then(data=>Setbrands(data))
    },[])

    

     const newdata=loadeddata.filter(data=>data.brand_name==brandname.name)

     console.log(brands)
     const brand=brands.filter(brand=>brand.name==brandname.name)
     

    
    const img=brand.map(img=>img.image1)
    console.log(img)
    

    return (
        <div className='lg:mx-40'>

            {
                img[0]? <div>
                <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={brand.map(img=>img.image1)} className="w-full h-80" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a> 
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full h-80">
        <img src={brand.map(img=>img.image2)} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a> 
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src={brand.map(img=>img.image3)} className="w-full h-80" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a> 
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
                </div>: <p>  </p>
            }





            <h2 className='text-3xl font-bold text-center mt-20'>{brandname.name} <span className='text-orange-400'>Products</span></h2>

           
<div>
    
{
                newdata.length? <div>{
                    newdata.map(data=><Brandproduct key={data._id} data={data}></Brandproduct>)
                    }</div>:<div><h3 className='text-center mt-8 font-medium'>
                    Comming soon
                    </h3></div>
            }
</div>
            
        </div>
    );
};

export default BrandProducts;