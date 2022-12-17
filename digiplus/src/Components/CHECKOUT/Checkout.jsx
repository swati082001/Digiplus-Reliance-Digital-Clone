import Styles from "./Checkout.module.css";
import {Box,Accordion, AccordionItem,AccordionButton,AccordionPanel,AccordionIcon, Stack,Text, FormControl,Input, Button, Card,CardHeader,Heading, CardBody,Checkbox} from "@chakra-ui/react";


function Checkout(){
    return(
        <div className={Styles.checkout}>
            <Box w="100%" h="500px">
                <Box w="80%" margin="auto">
                    <Accordion allowToggle bg="#e7e9e9">
                        <Stack spacing={6}>
                        <AccordionItem h="70px">
                            <h2>
                            <AccordionButton>
                            <Box textStyle="Filter" as="span" h="50px" flex='1' textAlign='left'>DELIVERY METHOD</Box>
                            <AccordionIcon />
                            </AccordionButton>
                            </h2>
                            <AccordionPanel bg="white" border="1px solid black" pb={4}>
                               <Box w="100%" textAlign="initial">
                                <Text>DELIVERY METHOD</Text>
                                <Text textStyle="NavButton" p={6}>SHIPPING ADDRESS</Text>
                                <Box p={4}>
                                <form>
                                    <Stack spacing={4}>
                                    <FormControl isRequired>
                                     <Input w="40%" placeholder="PinCode*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="40%" mr={6}  placeholder="First Name*"/>
                                     <Input w="40%" placeholder="Last Name*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="82%" placeholder="Enter Flat/House No/ Floor/Building Name*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="82%" placeholder="Enter Colony/ Street*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="82%" placeholder="Enter Landmark"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="40%" mr={6}  placeholder="Enter City*"/>
                                     <Input w="40%" placeholder="Enter State*"/>
                                    </FormControl>

                                    <FormControl isRequired>
                                     <Input w="40%" mr={6}  placeholder="Enter Mobile Number*"/>
                                     <Input w="40%" placeholder="Enter Landline Number"/>
                                    </FormControl>
                                    <Button w="40%" textStyle="AddToCart">SUBMIT</Button>

                                    </Stack>
                                </form>

                                <Card w="80%" mt="6">
                                <CardHeader bg="#e7e9e9" h="auto" pb={3}>
                                <Heading  fontSize="17px" fontWeight="500">Select Deliver Method</Heading>
                                </CardHeader>
                                <CardBody>
                                <Checkbox mr={6} >INSTA DELIVERY</Checkbox>
                                <Checkbox defaultChecked>STANDARD DELIVERY</Checkbox>
                                <Text textStyle="SideBarText" >*Either your PIN code or some items in your Order are not eligible for INSTA Delivery.</Text>
                                 <Text textStyle="SideBarText">*Delivery assurance is subject to our delivery locations staying open as per govt regulations</Text>
                                 <Text>Please Note</Text>

                                </CardBody>
                                    

                                </Card>
                                </Box>
                               </Box>
                            </AccordionPanel>

                        </AccordionItem>
                        </Stack>

                    </Accordion>
                </Box>
            </Box>

        </div>
    )

}

export default Checkout;