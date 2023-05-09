
import { Box, Flex, Input } from "@chakra-ui/react";
import { useState } from "react"
import {SearchIcon} from "@chakra-ui/icons"
import { Navigate } from "react-router-dom";


export default function Search(){
    const [search ,setSearch] = useState("");
    const [click,setClick] = useState(false);

 const handleSearch = ()=>{
     setClick(true);
 }

 if(click){
  return  <Navigate to = '/product' />
 }

    return(
     <Box>
        <Flex>
        <Input type="text" placeholder="Search" value= {search} onChange={(e)=>setSearch(e.target.value)} color= "white" />
        <SearchIcon onClick={handleSearch} fontSize="30px"  spacing={4} m={2} />
        </Flex>
       
     </Box>
    )
}