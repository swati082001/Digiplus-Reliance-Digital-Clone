import {Routes,Route} from "react-router-dom";
import LandingPage from "../Components/LANDING PAGE/LandingPage";
import Register from "../Components/AUTHENTICATION/Register";
import Login from "../Components/AUTHENTICATION/Login";
import Mobile from "../Components/PRODUCTS/MOBILE PAGE/Mobile";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/mobiles" element={<Mobile/>}></Route>
            </Routes>
        </div>
    )

}

export default AllRoutes;