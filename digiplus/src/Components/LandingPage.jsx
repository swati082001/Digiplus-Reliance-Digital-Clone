import {Image,Box} from "@chakra-ui/react";
import Carousel from "./Carousal";


function LandingPage(){

    

    return(
        <>
        <Box w="100%">
        <Image mb="50px" w="100%" src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx" alt=""/>
        
        <Carousel />
        </Box>
        </>
    )

}

export default LandingPage;