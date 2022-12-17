import Navbar from "../NAVBAR/Navbar";
import Footer from "../FOOTER/Footer";
import { Card, CardHeader, CardBody,Text, FormControl,Input,Stack } from '@chakra-ui/react'
import React from "react";
import { LoginContext } from "../../Context/LoginContext";
import { Navigate } from "react-router-dom";


 

function Login(){
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");
    const{loginstate,openLogin}=React.useContext(LoginContext);


    async function handleSubmit(e){
        e.preventDefault();
    
        try {
            let response = await fetch(`https://reqres.in/api/login`,{
                method:"POST",
                body:JSON.stringify({
                    email:email,
                    password:password
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            let data = await response.json();
            console.log(data);
            openLogin(data.token);
            alert("User is successfully logged in")
            
        } catch (error) {
            console.log(error);
            alert("Invalid Credentials")
        }
    
        }

        //console.log(loginstate);

    return(
        <>
        <Navbar/>
        {loginstate.isLogin && (
            <Navigate to="/"/>
        )}
        <Card  margin="auto" w="35%" h="auto" mt="200px" mb="50px">
            <CardHeader  bg="rgb(247,247,247)">
                <Text textAlign="initial" color="black" fontSize="18px" fontWeight="700">SIGN IN</Text>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <Stack>

                        <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email here*"/>
                        <Text fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your email address will be used to send invoice,order updates,etc.</Text>
                        <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password here*"/>
                        <Text fontSize={12} textAlign="initial" color="grey" fontWeight="500">Your Password will be secured and used for further login purposes.</Text>
                        
                        <Input bg="red" color="white" type="submit" value="Proceed"/>
                        
                        
                        </Stack>

                    </FormControl>
                </form>
            </CardBody>
            
        </Card>
        <Footer/>
        </>
    )

}

export default Login;