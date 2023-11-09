import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AllFoods from "../Pages/AllFoods/AllFoods";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import FoodPurchase from "../Pages/FoodPurchase/FoodPurchase";
import PrivateRoute from "./PivateRoute";
import MyCart from "../Shared/Dropdown/MyCart";
import AddFood from "../Shared/Dropdown/AddFood";
import MyAddedFoods from "../Shared/Dropdown/MyAddedFoods";
import UpdateFood from "../Shared/Dropdown/Update/UpdateFood";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/allfoods',
                element: <AllFoods></AllFoods>,
                loader: () => fetch('http://localhost:5000/foodsCount')
            },
            {
                path: '/fooddetails/:id',
                element: <FoodDetails></FoodDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/foodpurchase/:id',
                element: <PrivateRoute><FoodPurchase></FoodPurchase></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            },
            {
                path: '/mycart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
            },
            {
                path: '/addfood',
                element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
            },
            {
                path: '/myadded',
                element: <PrivateRoute><MyAddedFoods></MyAddedFoods></PrivateRoute>
            },
            {
              path:'/update/:id',
              element: <PrivateRoute><UpdateFood></UpdateFood></PrivateRoute>,
              loader: ({params}) => fetch(`http://localhost:5000/foods/${params.id}`)
            }
        ]
    }
]);
export default router;