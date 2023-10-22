import React from 'react';

const Banner = () => {
    return (
       <div className='lg:mx-20'>
         <div className="  hero h-60 rounded-lg md:h-96 w-full bg-[url('https://i.ibb.co/2Ftv31q/Nene-Banner-1.png')] ">
         </div>
        

        <div className='  bg-base-100 shadow-md lg:mx-40  rounded-lg '>

                <div className='flex space-x-6 md:space-x-16  lg:space-x-20 items-center justify-center px-8 py-4'>
                <img className='h-14 w-18 md:h-32 md:w-32 rounded-lg' src="https://i.ibb.co/z7FgBcf/amirali-mirhashemian-sc5s-TPMr-Vfk-unsplash.jpg" alt="" />
                <img className='h-14 w-18 md:h-32 md:w-32 rounded-lg' src="https://i.ibb.co/2MmktVV/download.jpg" alt="" />
                <img className='h-14 w-18 md:h-32 md:w-32 rounded-lg' src="https://i.ibb.co/7rktPxT/download-1.jpg" alt="" />
                <img className='h-14 w-18 md:h-32 md:w-32 rounded-lg' src="https://i.ibb.co/37rk5ZT/download-2.jpg" alt="" />
                </div>

        </div>
  

       </div>
    );
};

export default Banner;