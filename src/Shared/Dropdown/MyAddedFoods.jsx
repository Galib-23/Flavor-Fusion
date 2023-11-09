import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedFoodsCard from "./MyAddedFoodsCard";

const MyAddedFoods = () => {
    const {user} = useContext(AuthContext);
    const currentMail = user?.email;
    console.log('current mail : ', currentMail);
    const [allFoods, setAllFoods] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-foods')
        .then(res => res.json())
        .then(data => {
            setAllFoods(data);
        })
    }, [])
    console.log("all foods: ", allFoods);
    const myFoods = allFoods.filter(myFood => myFood.add_by === currentMail);
    console.log("my foods: ", myFoods);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                myFoods.map(myFood => <MyAddedFoodsCard key={myFood._id} myFood={myFood}></MyAddedFoodsCard>)
            }
        </div>
    );
};

export default MyAddedFoods;