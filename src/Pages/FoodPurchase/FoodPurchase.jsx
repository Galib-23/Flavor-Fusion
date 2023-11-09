import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

// const appleProducts = products.filter(product => product.brandName === 'Apple');

const FoodPurchase = () => {
    const { user, loading } = useContext(AuthContext);
    const food = useLoaderData();
    const { food_name, price, food_quantity } = food;
    const [dbUsers, setDbUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setDbUsers(data);
            })
            .catch(error => {
                console.log("error: ", error);
            })
    }, [])
    console.log("db users: ", dbUsers);
    let emaill;
    let namee;
    const currentUserEmail = user?.email;
    const currentUser = Array.isArray(dbUsers) ? dbUsers.find(us => us.email === currentUserEmail) : null;
    if(loading){
        console.log("loading noww");
    }
    else if (user.email && user.displayName) {
        emaill = user.email;
        namee = user.displayName;
    }
    else if(dbUsers){
        if (currentUser && currentUser.email) {
            console.log("current user email: ", currentUser.email);
            emaill = currentUser.email;
        } else {
            console.log("Current user or email not available yet.");
        }
        if (currentUser && currentUser.name) {
            console.log("current user name: ", currentUser.name);
            namee = currentUser.name;
        } else {
            console.log("Current user or email not available yet.");
        }
    }
    else{
        console.log("Loading,,,,,,")
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const cart = {namee, emaill, date, food_name, price, food_quantity};
        fetch('http://localhost:5000/carts' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(cart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'An Error Occurred',
                text: `An Error Occurred !`
              })
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
                                defaultValue={food_name}
                                name='productName'
                                className="input
                            input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="price"
                            defaultValue={`$ ${price}`}
                                name='productType'
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Quantity"
                                name='description'
                                defaultValue={food_quantity}
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Buyer Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Buyer Name"
                                defaultValue={namee}
                                readOnly
                                name='description'
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Buying Date</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Buying Date"
                                name='date'
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Buyer Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Buyer Email"
                                defaultValue={emaill}
                                readOnly 
                                name='price'
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <button className="btn btn-primary bg-yellow-400 border-none text-black w-full mt-7" type="submit">Purchase Now</button>
            </form>
        </div>
    );
};

export default FoodPurchase;