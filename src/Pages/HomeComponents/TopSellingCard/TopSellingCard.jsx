
const TopSellingCard = ({food}) => {
    const{food_name, food_image, food_category, price} = food;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 ">
                <img src={food_image} alt="Shoes" className="rounded-xl h-44 w-3/4" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{food_name}</h2>
                <p>{food_category}</p>
                <p>{price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default TopSellingCard;