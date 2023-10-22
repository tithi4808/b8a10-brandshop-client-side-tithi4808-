import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Productdetail from './Productdetail';

const Productdetails = () => {
    const datas=useParams()
    
    const loadeddata=useLoaderData()
    
    const newdata=loadeddata.filter(data=>data.name==datas.name)
    console.log(newdata)
    return (
        <div>
            {
                newdata.length? <div>
                    {
                        newdata.map(data=><Productdetail key={data._id} data={data}></Productdetail>)
                    }
                </div> : <p>No details available</p>
            }
        </div>
    );
};

export default Productdetails;