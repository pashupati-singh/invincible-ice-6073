import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function ProductItem({ image, Price, Model, Name, Engine, id,Average }) {
  return (
    <>
      <Flex>
        <Box>
          <Card width="400px" gap={"30px"} bg={"gray.100"} m={"20px"}>
            <CardBody>
              <Image src={image} alt="error" height="200px" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{Name}</Heading>
                <Text>Model: {Model}</Text>
                <Text color="blue.600" fontSize="xl">
                  Price :INR {Price}L
                </Text>
                <Text color="blue.600" fontSize="xl">
                  Engine :{Engine} cc
                </Text>
                <Text color="blue.600" fontSize="xl">
                  Average :{Average} km/l
                </Text>
              </Stack>
            </CardBody>
            {/* <Divider /> */}
            <CardFooter>
              <ButtonGroup mt={"-20px"}>
                <Button variant="solid" color="blue.600">
                  Buy now
                </Button>
                <Button variant="solid" color="blue.600">
                  Add to cart
                </Button>
                <Button variant="solid" color="blue.600">
                  WishList
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </Box>
      </Flex>
    </>
  );
}
