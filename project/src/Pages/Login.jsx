import React, { useContext, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormControl,
    FormLabel,
    Button,
    Input,
    useToast,
  } from '@chakra-ui/react'

 import axios from "axios"
import { AuthContext } from '../Authentication/AuthContext'
import { Navigate } from 'react-router-dom'



  const Image1 = `https://wallpaperaccess.com/full/2659671.jpg`







export default function Login(){
    const { onOpen,isOpen, onClose } = useDisclosure()
    const [email,setEmail] =useState("");
    const [password,setPassword] = useState("");
    const {isAuth,login} = useContext(AuthContext);
    const toast = useToast();
    const handleSubmit = (e)=>{

      e.preventDefault();
     const obj = {email,password}

      axios(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/login`,{
        method : 'post',
        data : obj
      })
      .then(()=>{
        login()
        toast({title: 'Login SuccessfuL',
      description: "We've successfully logged into your account",
      status: 'success',
      duration: 9000,
      isClosable: true,})
      })
      .catch((err)=>{
        toast({title: 'Login Failed',
        description: "Sorry try again",
        status: 'error',
        duration: 9000,
        isClosable: true,})
        console.log(err)
      })
  }

if(isAuth){
 
 return   <Navigate to = "/" />
  
}


    return (
      <>
          <img src = {Image1} alt='error' />
          <Button className='loginBtn' disabled = {isAuth === true} onClick={onOpen}>Login</Button>
      
       
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          bg = "red"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color= "rgb(143, 6, 6)" fontFamily="arial">Welcome Back, Thank You For Visit </ModalHeader>
            <ModalCloseButton />
         

            <ModalBody pb={6}>
             
              <FormControl >
                <FormLabel>Email</FormLabel>
                <Input  placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>
                <Input placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} width = "100%" onClick={handleSubmit}>
                Login
              </Button>
            </ModalFooter>
            
          </ModalContent>
        </Modal>
     
      </>
    )
  }