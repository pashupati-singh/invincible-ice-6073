import { Box, Flex, Stack,Heading,Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";



export default function Footer(){


    return(
     <Stack className="footer">
        <Flex gap={250} >
         <Box className="links" gap={8} ml={10}>
          
            <Link to= "/">BOOK A TEST RIDE</Link>
            <Link to= "/">DEALER LOCATOR</Link>
            <Link to= "/">FINANCE OFFERS</Link>
            <Link to= "/">EXCHANGE BIKE</Link>
            <Link to = '/contact'>CONTACT US</Link>
         
         </Box>
         <Box >
        <Box className="links" gap={6}>
            <Heading as='h5' size='sm'>GEAR</Heading>
             <Link to = "/">THE GEAR-UP RIG</Link>
             <Link to = "/">RIDER ENSEMBLE</Link>
        </Box>
        <Box className="links" gap={10}>
       <Heading as='h5' size='sm'>KOMMUNITI</Heading>
             <Link to = "/">KOGO TRAILS</Link>
             <Link to = "/">IJYD 2023</Link>
        </Box>
        </Box>
        <Box className="links" gap={10}>
        <Heading as='h5' size='sm'>KOMMUNITI</Heading>
        <Link to = "/">HISTORY</Link>
        <Link to = "/">SEEDS OF STEEL</Link>
        <Link to = "/">LEGENDS</Link>
        <Link to = "/">GEARUP.COM</Link>
        </Box> 
        <Box className="footerImage" mr={12} mt={12}>
            <Image src ="footer.png" alt = "error" />
        </Box>
        </Flex>
     </Stack>
    )
}