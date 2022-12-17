import {Routes,Route} from "react-router-dom";
import LandingPage from "../Components/LANDING PAGE/LandingPage";
import Register from "../Components/AUTHENTICATION/Register";
import Login from "../Components/AUTHENTICATION/Login";
import Mobile from "../Components/PRODUCTS/MOBILE PAGE/Mobile";
import PrivateRoute from "./PrivateRoute";
import Laptops from "../Components/PRODUCTS/LAPTOP PAGE/Laptops";
import Singleproduct from "../Components/SINGLEPRODUCT/SingleProduct";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/mobiles" element={<PrivateRoute><Mobile/></PrivateRoute>}></Route>
                <Route path="/mobiles/:id" element={<Singleproduct/>}></Route>
                <Route path="/laptop" element={<PrivateRoute><Laptops/></PrivateRoute>}></Route>
            </Routes>
        </div>
    )

}

export default AllRoutes;