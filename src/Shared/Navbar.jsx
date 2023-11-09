import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/allfoods'>All Foods</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
    </>
    const userLinks = <>
        <li><Link to='/mycart'>My Cart</Link></li>
        <li><Link to='/addfood'>Add Food</Link></li>
        <li><Link to='/myadded'>My Added Foods</Link></li>
    </>
    return (
        <div className="navbar bg-gradient-to-b from-cyan-600 to-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className='flex items-center gap-4'>
                    <img className='h-16' src={logo} alt="" />
                    <h2 className="text-3xl font-extrabold text-yellow">Flavor Fusion</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className='flex items-center justify-center'>
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {userLinks}
                                </ul>
                            </div>
                            <Link>
                                <button onClick={handleLogOut} type="button" className="btn border-none bg-gradient-to-r from-pink-500 to-yellow-500 ...">
                                    Logout
                                </button>
                            </Link>
                        </div>
                        :
                        <Link to='/login'>
                            <button type="button" className="btn border-none bg-gradient-to-r from-pink-500 to-yellow-500 ...">
                                Login
                            </button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;