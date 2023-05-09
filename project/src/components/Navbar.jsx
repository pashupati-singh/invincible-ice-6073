import { Flex,Box, Center ,Image} from "@chakra-ui/react";
import Search from "../Pages/Search";
import { NavLink, useNavigate } from "react-router-dom";


const links = [{path : "/" , text : "Home"},
{path : "/about" , text : "About"},
{path : "/contact" , text : "Contact"},
{path : "/login" , text : "Login"},
{path : "/logout" , text : "Logout"},
{path : "/admin" , text : "Admin"},
{path : "/cart" , text : "Cart"},

]


export default function Navbar(){
   const navigate = useNavigate()

const handleClick = () =>{
   navigate("/")
}

    
    return(
      <Box className="nav"> 
    <Flex  h='100px' p={4} justifyContent={"space-evenly"} >
      <button  onClick={handleClick} >
      <Image src = "LOGOOOO.png" alt = "error" marginBottom= "6px" w={100}/> 
      </button>
     <Search color = "white" />
  
  {links.map((ele)=>(
                <NavLink className={({isActive})=> 
                    isActive ? "isActive" : "byDefault"
                 } key={ele.path} to = {ele.path}>
                    <Center color='white' fontFamily="Avanta Garde" fontSize="20px">
                 {ele.text}
               </Center>
               </NavLink>
            ))}

</Flex>
</Box> 
    )
  }