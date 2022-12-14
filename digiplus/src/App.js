//import { Image } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <LandingPage />
      
      <br />
      <Footer />
    </div>
  );
}

export default App;


