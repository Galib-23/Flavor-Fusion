import Swal from "sweetalert2";

const MyCartCard = ({ mc, cart, setCart }) => {
    const { _id, food_name, price, food_quantity } = mc;
    const handleDelte = (_id) =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            fetch(`https://flavor-fusion-server-two.vercel.app/carts/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    const remaining = cart.filter(ct => ct._id != _id);
                    setCart(remaining);
                 }
            })
            console.log("dleeted");
            }
          })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{food_name}</h2>
                <p>Price: ${price}</p>
                <p>Quantity: {food_quantity}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleDelte(_id)} className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyCartCard;