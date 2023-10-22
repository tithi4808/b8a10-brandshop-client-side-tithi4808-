import React from 'react';

const Testimonial = () => {
    return (
        <div className='lg:mx-60 text-center my-20 shadow-lg p-8'>
            <h3 className='text-3xl font-bold mb-10'><span className='text-orange-400'>What</span> People say</h3>
            <div className='flex mb-10 items-center justify-center'>
            <img className='h-32 w-32 rounded-full ' src="https://i.ibb.co/LYc09bJ/images-4.jpg" alt="" />
            </div>
            <p>What I truly appreciate about Foodily is their attention to detail and commitment to high-quality ingredients.</p><p>I also have to mention the stunning food photography on the website. It not only made my mouth water but also inspired me to be more creative with my plating and food styling</p>

        </div>
    );
};

export default Testimonial;