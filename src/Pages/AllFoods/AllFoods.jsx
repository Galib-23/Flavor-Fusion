import { useEffect, useState } from "react";
import AllFoodsCard from "./AllFoodsCard";

const AllFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-foods')
        .then(res => res.json())
        .then(data => {
            setAllFoods(data);
        })
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    allFoods.map(food => <AllFoodsCard key={food._id} food={food}></AllFoodsCard>)
                }
            </div>
        </div>
    );
};

export default AllFoods;