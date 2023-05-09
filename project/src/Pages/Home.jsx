import { Box, Stack,Flex} from "@chakra-ui/react";
import SliderImage from "../components/SlideImage";
import { Card, CardBody, CardFooter,Image,Heading,Text,Divider,ButtonGroup,Button,Badge } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

export default function Home(){
   const [data,setData] = useState([]);

   const FetchData = ()=>{
    axios.get(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?average=15&page=1&limit=4`)
    .then((res)=>{
        setData(res.data)
    })
    .catch((res)=>{
        console.log(res);
    })
   }


   useEffect(()=>{
    FetchData();
   },[])


    return(
        <Stack>
       <SliderImage />

        <Box>
        <Heading color='green'>Best Deal For You</Heading>
        <Box>
        <Flex color='white'>
            {data.map((ele)=>(

           
        <Card width= "400px" key={ele.id}>
  <CardBody>
   
    <Image
      src={ele.image}
      alt='error'
      height= "200px"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{ele.name}</Heading>
      <Badge ml='1' colorScheme='green'>
        Best Seller
      </Badge>
      <Text>
       {ele.description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {ele.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='4'>
      <Button variant='solid' colorScheme='green'>
        Buy now
      </Button>
      <Button variant='solid' colorScheme='green'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
 ))}
        

        </Flex>
        </Box>


        <Box className="image-wrap">
            <Image className="image" src="https://images.jawamotorcycles.com/media/images/gear-section.jpg" />
            <Text className="image-text">GEAR-UP YOUR RIDE</Text>
            <Text className="image-text1">Get one step closer to completing your
ride with Jawa accessories</Text>
<Link to = '/product'>
            <Button colorScheme="green" className="image-btn">EXPLORE MORE</Button>
            </Link>
        </Box>







        <Flex className="Test-Ride">
          <Box m= "10px" marginTop= "55px" >
            <Text marginTop= "60px" className="heading">BOOK A TEST RIDE</Text>
            <Text marginTop= "60px" className="texting">Experience the legacy at your nearest dealership. Click below to book a test ride.</Text>
            <Button marginTop= "60px" className="btn">BOOK TEST RIDE</Button>
          </Box>
          <Divider />
          <Box marginTop= "60px">
          <Text marginTop= "60px" className="heading" as= 'h3' >BECAUSE CASH FLOW SHOULD NEVER STAND IN THE WAY OF YOUR DREAM MOTORCYCLE</Text>
            <Text marginTop= "60px" className="texting">That's why we've made financing your Jawa simple and tailor made for you. Ranging from flexible payment options upto 60 months to 100% financing, zero down payment, no income proof and a host of other offers. To not let money come in the way of your Jawa, click below.</Text>
            <Button marginTop= "60px" className="btn">APPLY NOW</Button>
            <Button marginTop= "60px" marginLeft= "10px" className="btn">FINANCE SCHEME</Button>
          </Box>
        </Flex>
      

   <Box className="video">
     <video autoPlay muted >
        <source  src= "/Videos/pexels-pavel-danilyuk-5052423-1920x1080-30fps.mp4" />
    </video> 
   </Box>


  
   </Box>

       </Stack>
    )
}