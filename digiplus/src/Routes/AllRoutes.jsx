import {Routes,Route} from "react-router-dom";
import LandingPage from "../Components/LANDING PAGE/LandingPage";
import Register from "../Components/AUTHENTICATION/Register";

function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<LandingPage/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
            </Routes>
        </div>
    )

}

export default AllRoutes;