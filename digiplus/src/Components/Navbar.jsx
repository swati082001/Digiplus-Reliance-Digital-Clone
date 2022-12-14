import { Box,Flex ,Image,Text,Input,Circle} from "@chakra-ui/react";
import MegaMenu from "./MegaMenu";
import {SearchIcon} from "@chakra-ui/icons";



function Navbar(){

    return(
        <>
        <Box  bg='rgb(224,19,19)' w='100%' h='30px'  color='white'>
            <Flex direction="row-reverse">
            <Box >
            <Text marginRight='30px' fontSize="16px" fontWeight="600">Find a store | Buying Guides | Contact Us</Text>   
            </Box>
            </Flex>
        </Box>
        <Box bg='rgb(224,19,19)' w='100%' h='80px' pl={6} pr={6} pt={1} color='white'>
        <Flex justifyContent="space-between">
         <Box >
         <Image w="100px"    src="logo.png" alt=""></Image>
         </Box>
         <Box mt={6}>
            <Flex>
            <Input w="500px" bg="white" borderRadius="50px" placeholder="Find Your Favourite Products" ></Input>
            </Flex>
         </Box>
         <Box mt={8}>
            <Flex>
            <Text fontSize="16px" fontWeight="600" mr={3}>Pin Code</Text> |
            <Text fontSize="16px" fontWeight="600" mr={3} ml={3}> Cart</Text> |
            <Text fontSize="16px" fontWeight="600" mr={3} ml={3}> Login</Text>
            </Flex>
         </Box>
        
        
        </Flex>
        </Box>

        {/* megamenu */}
        <MegaMenu />


        </>
    )


}

export default Navbar;