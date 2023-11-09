import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import register from '../assets/register.png';
import Swal from "sweetalert2";
const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;

        const newUser = {name, email, photo};
        console.log(newUser);

        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        createUser(email, password)
            .then(result => {
                console.log(`create usr: ${result.user}`);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Registration Successfull',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-transparent">
                <div className="hero-content gap-16 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img className="w-96 md:ml-24" src={register} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full p-0 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <h2 className="text-3xl font-extrabold">Register Now!</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name"
                                    name="name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL"
                                    name="photo"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password"
                                    name="password"
                                    className="input input-bordered" required />
                            </div>
                            <p className="mt-4">Do not have an account ? <Link className="font-bold text-blue-600 ml-2" to='/login'>Login</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;