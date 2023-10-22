

const AddProducts = () => {
    const handleAddproducts = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const image= form.image.value;

        const NewBrands = { name, brand_name, type, price, description, rating, image }

        console.log(NewBrands);
        
        fetch('http://localhost:5000/Products',{
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
            <h2 className="text-3xl font-extrabold text-center">Add a Product</h2>
            <form onSubmit={handleAddproducts}>
                
                <div className="form-control ">
                        <label className="label ">
                            <span className="label-text ">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brand_name" placeholder="Brand Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Advertisement banner image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Advertisement banner image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Advertisement banner image</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Product type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control btn mt-8">
                        <input type="submit" value="Add Product" />
                    </div>

            </form>
        </div>
    );
};

export default AddProducts;