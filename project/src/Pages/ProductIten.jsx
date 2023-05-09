
import { Card, CardBody, CardFooter,Image,Stack ,Heading,Text,Divider,ButtonGroup,Button, Flex,Box} from '@chakra-ui/react'

   export default function ProductItem({image,price,description,name}){

    return(
        <>
        <Flex>

          <Box>
           
        <Card width= "400px">
  <CardBody>
    <Image
      src={image}
      alt='error'
      height= "200px"
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{name}</Heading>
      <Text>
       {description}
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        {price}
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
      <Button variant='solid' colorScheme='green'>
        WishList
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

          
        </Box>
        </Flex>
   
      </>
    )
   }