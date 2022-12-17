import Styles from "./Cart.module.css";
import {Box,Card,Flex,Text,VStack,Image, Button, CardFooter, InputGroup, Input, InputRightAddon, Divider} from "@chakra-ui/react";
import React from "react";
import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { Link } from "react-router-dom";



function Cart(){
    
    let cartDetails=JSON.parse(localStorage.getItem("CartData")) || [];
    const[coupon,setCoupon]=React.useState("");
    const[total,setTotal]=React.useState(0);
    //console.log(cartDetails);
    let count=0;
    let total_price=0;

    
        cartDetails.forEach((el)=>{
            count++
            let price = el.price;
            let arr = price.split(",");
            total_price=total_price+(Number(arr.join("")));
            
        })

   
    console.log(count,total_price);
    
    function handleRemove(i){
        cartDetails.splice(i,1);
        localStorage.setItem("CartData",JSON.stringify(cartDetails));
        // getCount();
        
    }

    
    

    function handleCoupon(){
        if(coupon==="DIGI123"){
            alert("Coupon Code Applied! Enjoy")
        }
        else{
            alert("Coupon Code Does Not Exist.")
        }
    }

   
    return(
        <div className={Styles.cart}>
            <Navbar/>
            <Box display={count===0 ? "none":"block"} w="100%" h="auto" mt="160px" mb="100px">
                <Box w="80%" margin="auto" >
                <Flex justifyContent="space-around">
                    <Box w="65%" h="auto" mt={6}>
                        <VStack spacing={4}>

                        <Card w="100%" h="50px" bg="white" p={4} >
                            <Flex>
                            <Text fontSize="20px" textStyle="SinglePageHead">My Cart</Text>
                            <Text ml={3} lineHeight="15px" textStyle="SideBarText">({count})</Text>
                            </Flex>
                        </Card>

                        {/* <Card w="100%" h="200px" bg="white" p={4}>

                        </Card> */}
                        {cartDetails.map((el,i)=>(
                            <Card w="100%" h="auto" bg="white" p={4} key={el.id}>
                                <Flex justifyContent="space-between">
                                    <Box w="20%">
                                        <Image w="60%" src={el.images}/>
                                    </Box>
                                    <Box w="45%">
                                        <Text textStyle="price">{el.title}</Text>
                                        
                                    </Box>
                                    <Box w="30%">
                                        
                                        <Text textAlign="end" textStyle="SinglePageHead">₹{el.price}</Text>
                                        <Text textAlign="end" color="green.700" textStyle="SideBarText">Free Shipping</Text>
                                        <Text textAlign="end"textStyle="SideBarText">Standard Delivery : 25 Dec-28 Dec</Text>
                                        <Text textAlign="end" textStyle="BrandPromiseSmall">*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
                                    </Box>
                                </Flex>
                                <CardFooter h="50px" >
                                <Button w="50%" margin="auto" color="blue.500" variant='outline' onClick={(e)=>{
                                    e.target.parentNode.parentNode.remove(); handleRemove(i)}}>Remove</Button>
                                <Button w="50%" margin="auto" color="blue.500" variant='outline'>WishList</Button>
                                </CardFooter>

                            </Card>
                        ))}
                        </VStack>

                    </Box>
                    <Box w="30%" mt={6}>
                        
                        <Link to="/checkout">
                        <Button w="100%" _hover={{bg:"white",color:"black",border:"1px solid red"}} textStyle="Checkout" >CHECKOUT</Button>
                        </Link>

                        <Card w="100%" h="auto" bg="white" mt={4} p={4}>
                            <InputGroup>
                            <Input value={coupon} onChange={(e)=>setCoupon(e.target.value)} placeholder="Add Coupon Code"/>
                            <InputRightAddon onClick={handleCoupon} textStyle="SinglePageHead" color="blue">APPLY</InputRightAddon>
                            </InputGroup>
                            <br/>
                            <Divider />
                            <br/>
                           
                            <Text textAlign="initial" textStyle="SinglePageHead">PRICE DETAILS</Text>
                                <Box w="100%" mt={2}>
                                <Flex justifyContent="space-between">
                                    <Text>Price ({count})</Text>
                                    <Text textStyle="SinglePageHead">₹{total_price}</Text>
                                </Flex>
                                </Box>

                                <Box w="100%" mt={2}>
                                <Flex justifyContent="space-between">
                                    <Text>Delivery Charges</Text>
                                    <Text textStyle="SinglePageHead" color="green">FREE</Text>
                                </Flex>
                                </Box>
                                <br/>
                                <Divider/>
                                <Box w="100%" mt={2}>
                                <Flex justifyContent="space-between">
                                    <Text textStyle="SinglePageHead">AMOUNT</Text>
                                    <Text textStyle="SinglePageHead" color="green">₹{total_price}</Text>
                                </Flex>
                                </Box>
                                <br/>
                                <Divider/>

                            

                        </Card>

                    </Box>
                </Flex>
                </Box>
            </Box>

          <Box display={count===0 ? "block":"none"} w="20%" margin="auto" mt="160px" mb="100px">
            <Image src="https://www.reliancedigital.in/build/client/images/emptycart.png" alt="" />
            <Text textStyle="MainBarHead">Your Cart is Empty!</Text>
            <Link to="/">
            <Button mr="60px" _hover={{bg:"white",color:"black",border:"1px solid red"}}  mt="20px"textStyle="Checkout">Continue Shopping</Button>
            </Link>
          </Box>
          <Footer/>
        </div>
    )

}

export default Cart;