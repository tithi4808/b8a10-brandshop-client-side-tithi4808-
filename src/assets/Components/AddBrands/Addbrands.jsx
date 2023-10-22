

const Addbrands = () => {
    const handleaddbrands = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand_image = form.brand_image.value;
       

        const NewBrands = { name, brand_image}

        console.log(NewBrands);
        
        fetch('http://localhost:5000/brands',{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify(NewBrands),
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
        
       
    }


    return (
        <div className="bg-[#c6c5c5] p-24">
            <h2 className="text-3xl font-extrabold text-center">Add a Brand</h2>
            <form onSubmit={handleaddbrands}>
                
                <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Brand name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Brand image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_image" placeholder="Brand image" className="input input-bordered w-full" />
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

export default Addbrands;