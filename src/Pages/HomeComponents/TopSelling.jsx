import { useEffect, useState } from "react";
import TopSellingCard from "./TopSellingCard/TopSellingCard";
import { Link } from "react-router-dom";

const TopSelling = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch('https://flavor-fusion-server-two.vercel.app/foods')
      .then(res => res.json())
      .then(data => {
        setFoods(data);
      });
  }, []);

  return (
    <div>
      <div className="">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-8 text-center mt-20">Top Selling Foods</h2>
        <p className="text-black text-center">Below are our top selling foods. Our every food is though <br /> top selling but among the top selling these are the most top selling foods. Customers Have Ordered <br /> these foods innumerable times.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
        {
          foods.map(food => <TopSellingCard key={food._id} food={food}></TopSellingCard>)
        }
      </div>
      <div className="flex justify-center items-center mb-5">
        <Link to='/allfoods'><button className="btn btn-accent btn-outline">See All</button></Link>
      </div>
    </div>
  );
};

export default TopSelling;
