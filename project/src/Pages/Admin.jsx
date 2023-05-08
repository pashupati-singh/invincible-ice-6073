import {TableContainer,Td,Box,Button, Table,Thead,Th,Tbody,Tr,Input, Stack,FormControl,FormLabel,FormHelperText, useToast } from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import axios from "axios"

const initalVal = {
    average : "",
    company:"",
    description : "",
    engine: "",
    image: "",
    model : "",
    name : "",
    price :"",
}

const reducer = (state,action)=>{
    switch(action.type){
         case "average" : {
    return{
        ...state,
       average : action.payload
    }
        }
    case "company" : {
        return{
            ...state,
            company : action.payload
        }
        }
        case "description" : {
            return{
                ...state,
                description : action.payload
            }
            }
            case "engine" : {
                return{
                    ...state,
                    engine : action.payload
                }
                }
                case "image" : {
                    return{
                        ...state,
                        image : action.payload
                    }
                    }
                    case "model" : {
                        return{
                            ...state,
                            model : action.payload
                        }
                        }
                        case "name" : {
                            return{
                                ...state,
                                name : action.payload
                            }
                            }
                            case "price" : {
                                return{
                                    ...state,
                                    price : action.payload
                                }
                                }
                                case "RESET ALL" : {
                                return{
                                    ...initalVal
                                }
                                }
                                default : return state;
    }
}

export default function Admin(){
     const toast = useToast()
     const [state,dispatch] = useReducer(reducer,initalVal);
     const [data,setData] = useState([])
     const [visible,setVisible] = useState(false);


     const handleChage = (e)=>{
        dispatch({type :  e.target.name , payload :  e.target.value})
     }
     
     const handleSubmit = (e)=>{
        e.preventDefault();

     const obj = {
        average,company,image,price,engine,model,description,name
     }

        axios(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes`,{
            method : 'post',
            data : obj
        })
        .then(()=>{
            toast({title: 'SuccessfuL',
      description: "You've successfully Added A New Item",
      status: 'success',
      duration: 9000,
      isClosable: true,})
        })
        .catch((err)=>{
           console.log(err);
        })
        dispatch({type : "RESET ALL"})
     }

     const FetchData = ()=>{
        axios.get(`https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes`)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
     }

     useEffect(()=>{
        FetchData();
     },[])





    const {average,company,image,price,engine,model,description,name} = state;
     
    return(
        <>
        <Box>
            <Button onClick={()=>setVisible(!visible)}>{visible?"VIEW LIST" : "ADD NEW DATA"}</Button>
        </Box>
        {visible?
                <Stack ml={4} width= "500px">
       <form onSubmit={handleSubmit}>
      <FormControl isRequired>
       <FormLabel>First name</FormLabel>
       <Input type="text" name="name" value={name} onChange={handleChage} placeholder="Name" />
       <FormLabel>Image</FormLabel>
       <Input type="text" name="image" value={image} onChange={handleChage} placeholder="URL of Image" />
       <FormLabel>Company</FormLabel>
       <Input type="text" name="company" value={company} onChange={handleChage} placeholder="Company" />
       <FormLabel>Model</FormLabel>
       <Input type="text" name="model" value={model} onChange={handleChage} placeholder="Model" />
       <FormLabel>Price</FormLabel>
       <Input type="number" name="price" value={price} onChange={handleChage} placeholder="Price" />
       <FormLabel>Average</FormLabel>
       <Input type="number" name="average" value={average} onChange={handleChage} placeholder="Average" />
       <FormHelperText>Range between 5 to 20</FormHelperText>
       <FormLabel>Description</FormLabel>
       <Input type="text" name="description" value={description} onChange={handleChage} placeholder="Description" />
       <FormLabel>Engine Size</FormLabel>
       <Input type="number" name="engine" value={engine} onChange={handleChage} placeholder="Engine Size" />
       <Input type="submit" backgroundColor="green" />
     </FormControl>
     </form>
     </Stack> : 


     <TableContainer>
    <Table variant='striped' colorScheme='teal'>
    <Thead>
      <Tr>
        <Th>S.no</Th>
        <Th>Name</Th>
        <Th>Model</Th>
        <Th>Company</Th>
        <Th>Price</Th>
        <Th>Average km/L</Th>
        <Th>Engine cc</Th>
      </Tr>
    </Thead>
   
       
         <Tbody>
         {data.map((ele)=>(
            <Tr>
         <Td>{ele.id}</Td>
         <Td>{ele.name}</Td>
         <Td>{ele.model}</Td>
         <Td>{ele.company}</Td>
         <Td>{ele.price}</Td>
         <Td>{ele.average}</Td>
         <Td>{ele.engine}</Td>
         </Tr>
        ))}
           </Tbody>
  </Table>
</TableContainer>
}
    </>
    )
}