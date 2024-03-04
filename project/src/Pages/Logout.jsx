import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Authentication/AuthContext'
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
  } from "@chakra-ui/react";

const Image1 = `https://wallpaperaccess.com/full/2659671.jpg`;

export const Logout = () => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const { onOpen, isOpen, onClose } = useDisclosure();
    const {logout} = useContext(AuthContext)


    const handleCloick = () =>{
        logout()
    }


  return (
    <>
     {/* <img src={Image1} alt="error" onClick={handleCloick} /> */}
     <Modal isOpen={isOpen} onClose={onClose} bg="red" >
        <ModalOverlay />
        <ModalContent mt={"200px"} >
          <ModalHeader color="rgb(143, 6, 6)" fontFamily="arial">
            Welcome Back, Thank You For Visit{" "}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              width="100%"
              onClick={handleCloick}
            >
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
  )
}
