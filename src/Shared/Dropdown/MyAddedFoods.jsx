import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyAddedFoodsCard from "./MyAddedFoodsCard";

const MyAddedFoods = () => {
    const { user } = useContext(AuthContext);
    const currentMail = user?.email;
    console.log('current mail : ', currentMail);
    const [allFoods, setAllFoods] = useState([]);
    useEffect(() => {
        fetch('https://flavor-fusion-server-two.vercel.app/all-foods')
            .then(res => res.json())
            .then(data => {
                setAllFoods(data);
            })
    }, [])
    console.log("all foods: ", allFoods);
    const myFoods = allFoods.filter(myFood => myFood.add_by === currentMail);
    console.log("my foods: ", myFoods);
    if(myFoods.length === 0){
        return <div>Waiting...<br/> If no foods shown still then you have not added any foods!!</div>
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-extrabold text-yellow-400 mb-5 mt-6">My Added Foods</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    myFoods.map(myFood => <MyAddedFoodsCard key={myFood._id} myFood={myFood}></MyAddedFoodsCard>)
                }
            </div>
        </div>

    );
};

export default MyAddedFoods;