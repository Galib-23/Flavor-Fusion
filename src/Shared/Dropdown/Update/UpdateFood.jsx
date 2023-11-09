import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
    const food = useLoaderData();
    const {_id, food_name, food_image, food_category, food_quantity, price, add_by, food_origin, description, count} = food;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const food_name = form.foodName.value;
        const food_image = form.img.value;
        const food_category = form.category.value;
        const food_quantity = form.quantity.value;
        const price = form.price.value;
        const food_origin = form.origin.value;
        const description = form.description.value;
        const count = 0;
        const updatedFood = {food_name, food_image, food_category, food_quantity, price, add_by, food_origin, description, count};
        fetch(`http://localhost:5000/foods/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Product Has Been Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Food Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Food Name"
                                name='foodName'
                                defaultValue={food_name}
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
                                defaultValue={food_image}
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
                                defaultValue={food_category}
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
                                defaultValue={food_quantity}
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
                                defaultValue={price}
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
                                defaultValue={add_by}
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
                                defaultValue={food_origin}
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
                                defaultValue={description}
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary bg-yellow-400 border-none text-black w-full mt-7" type="submit">Update Food</button>
            </form>
        </div>
    );
};

export default UpdateFood;