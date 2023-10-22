

const Addproductdetails = () => {
    const handleaddproductdetails = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const image = form.image.value;
        const details= form.details.value;
       
       

        const Newdetails = { name, image,details}

        
        
        fetch('http://localhost:5000/details',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(Newdetails),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
       
    }


    return (
        <div className="bg-[#c6c5c5] p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Details</h2>
            <form onSubmit={handleaddproductdetails}>
                
                <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder=" image" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Product Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                   

                    <div className="form-control ">
                       
                        <label className="input-group">
                            <input type="submit" value='Add Brands' className="btn mt-4  w-full" />
                        </label>
                    </div>
                    
                    

            </form>
        </div>
    );
};

export default Addproductdetails;