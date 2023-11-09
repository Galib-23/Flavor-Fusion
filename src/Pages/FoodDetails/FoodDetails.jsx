import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
    const food = useLoaderData();
    const {_id, food_name, food_image, food_category, price, food_origin, description} = food;
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <img className="h-96 rounded-xl" src={food_image} alt="" />
            <h2 className="text-4xl text-yellow-400 font-extrabold">{food_name}</h2>
            <p className="text-2xl text-yellow-600 font-bold">food_category</p>
            <p>Category: {food_category}</p>
            <p>Price: {price}</p>
            <p>Origin: {food_origin}</p>
            <p>{description}</p>
            <Link to={`/foodpurchase/${_id}`}><button className="btn btn-secondary btn-outline mb-20">Order Now</button></Link>
        </div>
    );
};

export default FoodDetails;