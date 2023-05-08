import { useContext } from "react"
import { AuthContext } from "../Authentication/AuthContext"
import { Button, useToast } from "@chakra-ui/react";



export default function Logout(){
    const {logout,isAtuh} = useContext(AuthContext);
    const toast = useToast();
  const handlelogout = ()=>{
    logout();
    toast({title: 'Logout SuccessfuL',
    description: "Thanks for visiting",
    status: 'success',
    duration: 9000,
    isClosable: true,})
  }

    return(
      <Button disabled = {isAtuh === false} onClick={handlelogout}>Logout</Button>
    )
}