import { useEffect, useState } from "react";
import AllFoodsCard from "./AllFoodsCard";
import { useLoaderData } from "react-router-dom";

const AllFoods = () => {
    const [allFoods, setAllFoods] = useState([]);
    const {count} = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const itemPerPage = 9;
    const numberOfPages = Math.ceil(count/itemPerPage);
    const pages = [];
    for(let i = 0; i< numberOfPages; i++){
        pages.push(i);
    }
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
            <div className="flex items-center justify-center mt-5">
                {
                    pages.map(page => <button 
                        onClick={() => setCurrentPage(page)}
                        className="btn ml-3" key={page}>{page}</button>)
                }
            </div>
        </div>
    );
};

export default AllFoods;