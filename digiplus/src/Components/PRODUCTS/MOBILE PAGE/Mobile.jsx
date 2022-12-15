import React from "react";
import { Box,Breadcrumb,BreadcrumbItem,Skeleton,Flex, Divider,Text,Stack,RangeSlider,RangeSliderTrack,RangeSliderFilledTrack,RangeSliderThumb,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Styles from "./mobile.module.css";

function Mobile(){
    const[isLoading,setIsLoading]=React.useState(true);
    return(
        <div className={Styles.back} >
        
        <Skeleton isLoaded={isLoading}>
        <Box w="100%" border="1px solid black" h="30px">
        <Breadcrumb>
            <BreadcrumbItem>
            <Link to="/" >Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
            <Link to='/mobiles'>Mobiles</Link>
            </BreadcrumbItem>
        </Breadcrumb>

        </Box>
        </Skeleton>
        <Divider color="blackAlpha.700"/>
       

        <Flex justifyContent="center">
            <Box w="18%" h="500px" border="1px solid black" >
            <Stack spacing={4}>
                <Skeleton isLoaded={isLoading}>
                    <Box w="100%" bg="#fff" h="50px">
                        <Text textStyle="Filter" textAlign="initial">FILTERS</Text>
                    </Box>
                    

                    <Box w="100%" bg="#fff" h="auto" mt={4} p={4} border="1px solid black">
                        <Text  textAlign="initial">Price</Text>
                        <RangeSlider defaultValue={[0, 300]} min={0} max={300} step={30}
                        onChangeEnd={(val) => console.log(val)}>
                            <RangeSliderTrack bg='black'>
                            <RangeSliderFilledTrack bg='black' />
                            </RangeSliderTrack>
                            <RangeSliderThumb bg="black"boxSize={4} index={0} />
                            <RangeSliderThumb bg="black" boxSize={4} index={1} />
                            </RangeSlider>
                    </Box>
                </Skeleton>
                </Stack>
            </Box>
            <Box w="80%" h="500px" border="1px solid black">

            </Box>
            

        </Flex>
        
        </div>
    )

}

export default Mobile;