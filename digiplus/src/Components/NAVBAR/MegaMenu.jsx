import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,Flex,Box,Grid
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons";




function MegaMenu(){
    return(
        <>
        <Box w="100%" bg="#14276e " h="52px" color="white" pb={2} >
            <Flex justifyContent="space-around">
                {/* mobiles and tablets */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>MOBILES & TABLETS <ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">SmartPhones</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">All Learning Robots</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Wearable Technology</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Tablets & e-Readers</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Top Selling SmartWatches</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Everyday use Tablets below 15000</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight={6}>Apple Price Drop</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>Premium Tablets,Above 15001</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Accessories</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Power Banks</MenuItem>
                                </Grid>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Tablet Accessories</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile Accessories </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile grips & Stands</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> Car Mobile Holders</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Memory Cards </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> cables & Cords</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Charges & Adapters </MenuItem>        
                        </MenuList>
                </Menu>
                {/* televisions */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>TELEVISIONS<ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e "  color="white" fontSize="17px" fontWeight="700">Televisions</MenuItem>
                                    <MenuItem bg="#14276e "   color="white"fontSize="17px" fontWeight="700">Gaming</MenuItem>
                                    <MenuItem bg="#14276e "   color="white"fontSize="17px" fontWeight="700">Reconnect Disney | Marvel Audio Collection</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Smart TVs</MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Gaming Consoles</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">TV & Audio Accessories</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight={6}>32 Inch TVs</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>Gaming Accessories </MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>virtual Reality Headsets </MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e "  color="white" fontSize="17px" fontWeight={6}>43 Inch TVs</MenuItem>
                                    <MenuItem bg="#14276e "  color="white"fontSize="17px" fontWeight={6}>Gaming Titles</MenuItem>
                                    <MenuItem bg="#14276e "  color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e "  color="white" fontSize="17px" fontWeight={6}>55 Inch TVs</MenuItem>
                                    <MenuItem bg="#14276e "  color="white"fontSize="17px" fontWeight="700">Projectors</MenuItem>
                                    <MenuItem bg="#14276e "  color="white"fontSize="17px" fontWeight={6}>Stabilizers & Surge Protectors</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e "  color="white" fontSize="17px" fontWeight={6}>Android Tvs</MenuItem>
                                    <MenuItem bg="#14276e "  color="white"fontSize="17px" fontWeight="700">Streaming Devices</MenuItem>
                                    
                                </Grid>
                               
                              
                        </MenuList>
                </Menu>
                {/* audio */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>AUDIO <ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">BlueTooth & WiFi Speakers</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">TV Speakers & Sounbars</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">Musical Instruments</MenuItem>
                                </Grid>
                
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>True Wireless</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Bluetooth Speakers</MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Soundbars</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Guitars and Ukeleles</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Bluetooth Neckbands</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Smart Speakers</MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Home Theatre Systems</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Microphones</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Wired earphones</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Party Speakers</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Musical Keyboards</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>On Ear Headphones</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Multimedias</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Noise Cancelling Headphones</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                </Grid>
                                   
                        </MenuList>
                </Menu>
                {/* home appliances */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>HOME APPLIANCES<ChevronDownIcon/></MenuButton>
                    <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">BlueTooth & WiFi Speakers</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">TV Speakers & Sounbars</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">Musical Instruments</MenuItem>
                                </Grid>
                
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>True Wireless</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Bluetooth Speakers</MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Soundbars</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Guitars and Ukeleles</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Bluetooth Neckbands</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Smart Speakers</MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Home Theatre Systems</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Microphones</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Wired earphones</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Party Speakers</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Musical Keyboards</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>On Ear Headphones</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Multimedias</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(4,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Noise Cancelling Headphones</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}></MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}></MenuItem>
                                </Grid>
                                   
                        </MenuList>
                </Menu>
                {/* computers */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>COMPUTERS<ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">SmartPhones</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">All Learning Robots</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Wearable Technology</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Tablets & e-Readers</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Top Selling SmartWatches</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Everyday use Tablets below 15000</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight={6}>Apple Price Drop</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>Premium Tablets,Above 15001</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Accessories</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Power Banks</MenuItem>
                                </Grid>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Tablet Accessories</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile Accessories </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile grips & Stands</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> Car Mobile Holders</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Memory Cards </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> cables & Cords</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Charges & Adapters </MenuItem>        
                        </MenuList>
                </Menu>
                {/* cameras */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>CAMERAS<ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">SmartPhones</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">All Learning Robots</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Wearable Technology</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Tablets & e-Readers</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Top Selling SmartWatches</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Everyday use Tablets below 15000</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight={6}>Apple Price Drop</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>Premium Tablets,Above 15001</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Accessories</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Power Banks</MenuItem>
                                </Grid>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Tablet Accessories</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile Accessories </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile grips & Stands</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> Car Mobile Holders</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Memory Cards </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> cables & Cords</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Charges & Adapters </MenuItem>        
                        </MenuList>
                </Menu>
                {/* kitchen Appliances */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>KITCHEN APPLIANCES<ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">SmartPhones</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">All Learning Robots</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Wearable Technology</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Tablets & e-Readers</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Top Selling SmartWatches</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Everyday use Tablets below 15000</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight={6}>Apple Price Drop</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>Premium Tablets,Above 15001</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Accessories</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Power Banks</MenuItem>
                                </Grid>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Tablet Accessories</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile Accessories </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile grips & Stands</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> Car Mobile Holders</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Memory Cards </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> cables & Cords</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Charges & Adapters </MenuItem>        
                        </MenuList>
                </Menu>
                {/* personal care */}
                <Menu >
                    <MenuButton p={4} mb="4px" fontSize="14px" fontWeight="600" _hover={{bg:"rgb(224,19,19)"}}>PERSONAL CARE<ChevronDownIcon/></MenuButton>
                        <MenuList p={7} bg="#14276e " >
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight="700">SmartPhones</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">HeadPhones & Headsets</MenuItem>
                                    <MenuItem bg="#14276e " mb={5}  color="white"fontSize="17px" fontWeight="700">All Learning Robots</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Wearable Technology</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Tablets & e-Readers</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Top Selling SmartWatches</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight={6}>Everyday use Tablets below 15000</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " mb={5} color="white" fontSize="17px" fontWeight={6}>Apple Price Drop</MenuItem>
                                    <MenuItem bg="#14276e " mb={5} color="white"fontSize="17px" fontWeight={6}>Premium Tablets,Above 15001</MenuItem>
                                </Grid>
                                <Grid templateColumns="repeat(3,1fr)" gap="100px">
                                    <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight="700">Accessories</MenuItem>
                                    <MenuItem bg="#14276e " color="white"fontSize="17px" fontWeight="700">Power Banks</MenuItem>
                                </Grid>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Tablet Accessories</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile Accessories </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Mobile grips & Stands</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> Car Mobile Holders</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Memory Cards </MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}> cables & Cords</MenuItem>
                                <MenuItem bg="#14276e " color="white" fontSize="17px" fontWeight={6}>Charges & Adapters </MenuItem>        
                        </MenuList>
                </Menu>
                {/* accessories */}
                

            </Flex>
        </Box>
        
        </>
    )

}

export default MegaMenu;