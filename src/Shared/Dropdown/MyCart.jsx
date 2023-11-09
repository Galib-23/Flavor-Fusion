import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyCartCard from "./MyCartCard";
const MyCart = () => {
    const { user } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('https://flavor-fusion-server-two.vercel.app/carts', { credentials: 'include' })
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
    console.log("my cart is : ", myCart);
    if(myCart.length == 0){
        return <div>waiting for products.....</div>
    }
    return (
        <div>
            <h2 className="text-4xl text-center font-extrabold text-yellow-400 mb-5 mt-6">My Cart</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    myCart.map(mc => <MyCartCard key={mc._id} mc={mc} cart={cart} setCart={setCart}></MyCartCard>)
                }
            </div>
        </div>

    );
};

export default MyCart;