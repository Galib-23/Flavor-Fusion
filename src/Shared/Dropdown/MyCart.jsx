import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCartCard from "./MyCartCard";
//const appleProducts = products.filter(product => product.brandName === 'Apple');
const MyCart = () => {
    const {user} = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/carts', {credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                setCart(data);
            })
            .catch(error => {
                console.log("error: ", error);
            })
    }, [])
    console.log(cart);
    const currentEmail = user.email;
    console.log("EMail is ; ", currentEmail);
    const myCart = cart.filter(c => c.emaill === currentEmail);
    console.log("my cart is : ",myCart);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {
                myCart.map(mc => <MyCartCard key={mc._id} mc={mc} cart={cart} setCart={setCart}></MyCartCard>)
            }
        </div>
    );
};

export default MyCart;