import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddFood = () => {
    const {user} = useContext(AuthContext);
    const currentMail = user?.email;
    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.img.value;
        const food_category = form.category.value;
        const food_quantity = form.quantity.value;
        const price = form.price.value;
        const add_by = currentMail;
        const food_origin = form.origin.value;
        const description = form.description.value;
        const count = 0;
        const myFood = {food_name, food_image, food_category, food_quantity, price, add_by, food_origin, description, count};
        console.log(myFood);
        fetch('http://localhost:5000/foods',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(myFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Food Has Been Added',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-extrabold text-yellow-400 mb-5 mt-6">Add A Food Item</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Food Name"
                                name='foodName'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Image Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Image Url"
                                name='img'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Food Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Food Category"
                                name='category'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Quantity"
                                name='quantity'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Price"
                                name='price'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Added By</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Added By"
                                name='addby'
                                defaultValue={currentMail}
                                readOnly
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Food Origin</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Food Origin"
                                name='origin'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Food Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Food Description"
                                name='description'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary bg-yellow-400 border-none text-black w-full mt-7" type="submit">Add Food</button>
            </form>
        </div>
    );
};

export default AddFood;