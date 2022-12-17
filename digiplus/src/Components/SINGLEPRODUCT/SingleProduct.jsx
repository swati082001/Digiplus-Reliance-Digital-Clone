import { useParams } from "react-router-dom";
import React from "react";
import SingleCrumbs from "./SingleCrumbs";
import Styles from "./Single.module.css";
import { Divider,Flex,Box, Skeleton ,Image,Text} from "@chakra-ui/react";
//import Navbar from "../NAVBAR/Navbar"


function Singleproduct(){

    const {id} = useParams();
    
    const[isLoading,setIsLoading]=React.useState(true);
    const[data,setData]=React.useState([]);

    async function fetchSingleProductData(){
        try {
            let response = await fetch(`https://digiplus-pu8v.vercel.app/mobiles/${id}`)
            let data = await response.json();
            console.log(data);
            setData([data]);
            
        } catch (error) {
            console.log(error);
            
        }
    }


    React.useEffect(()=>{
        fetchSingleProductData();
    },[])

    console.log(data,"data");

    return(
        <div className={Styles.single}>
      
        <SingleCrumbs isLoading={isLoading}/>
        <Divider color="blackAlpha.700"/>

        <Skeleton isLoaded={isLoading}>
        <Box w="100%" margin="auto">
        <Flex justifyContent="space-around">
            <Box w="38%" bg="white" h="500px" border="1px solid black">
                {data.map((el)=>(
                    <Box w="50%" margin="auto" mt={50} key={el.id}>
                        <Image w="100%" src={el.images} alt=""/>
                    </Box>
                ))}
                
            </Box>
        
            <Box w="60%" h="500px"  bg="white" border="1px solid red">
                <Box w="100%" h="150px" p={4} >
                    {data.map((el)=>(
                        <Box key={el.id}>
                            <Text textStyle="SideBarHead">Article No. - {el.id}</Text>
                            <Text textAlign="left" textStyle="Filter">{el.title}</Text>
                            </Box>
                    ))}

                </Box>
                <Divider color="black"/>

            </Box>
            

        </Flex>
        </Box>
        </Skeleton>
        </div>
    )

}

export default Singleproduct;