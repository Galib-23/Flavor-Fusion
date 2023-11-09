import { Link } from "react-router-dom";

const MyAddedFoodsCard = ({myFood}) => {
    const{_id, food_name, food_image, food_category, price, food_quantity} = myFood;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src={food_image} alt="Shoes" className="rounded-xl h-44 w-3/4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{food_name}</h2>
                <p>Category: {food_category}</p>
                <p className="text-cyan-500">Available Qty: {food_quantity}</p>
                <p>Price: {price}</p>
                <div className="card-actions">
                    <Link to={`/update/${_id}`}><button className="btn btn-primary">Update Food</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyAddedFoodsCard;