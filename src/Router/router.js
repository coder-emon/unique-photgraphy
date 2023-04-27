import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Services from "../Components/Services/Services";
import MyServices from "../Pages/MyServices/MyServices";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: "/services-manager",
                element: <MyServices></MyServices>
            }

        ]
    }
])