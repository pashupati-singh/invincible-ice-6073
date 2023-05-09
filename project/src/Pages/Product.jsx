import axios from 'axios'
import { useEffect, useState } from "react";
import { Text, Flex,Box,Select} from '@chakra-ui/react'
import Pagination from '../components/Pagination';
import ProductItem from './ProductIten';


export default function Product(){
  const[data,setdata] = useState([]);
  const [page,setPage] =useState(1)
  const [filter,setFilter] = useState("");
  const [sortA,setSortA] = useState("");
  const [sortP,setSortP] = useState("");
  const [sortE,setSortE] = useState("");



  const FetchData=(page,filter,sortA,sortP,sortE)=>{
let ApiUrl;

 if(filter){
    ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6&model=${filter}`
  }else if(sortA){
    ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?sortby=average&order=${sortA}`
  }else if(sortP){
    ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?sortby=price&order=${sortP}`
  }else if(sortE){
    ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?sortby=engine&order=${sortE}`
  }else{
    ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6`
 }

    axios.get(ApiUrl)
    .then((res)=>{
        setdata(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  }
   
  useEffect(()=>{
    FetchData(page,filter,sortA,sortP,sortE);
  },[page,filter,sortA,sortP,sortE])



    return(
        <>
<Flex>
<Box className='filter'>
   <Text fontSize= "xl" fontFamily= 'sans-serif' fontWeight= 'bold' m={4}>
    Filter
   </Text>
   <Select variant='filled' value={filter} onChange={(e)=>setFilter(e.target.value)}>
    <option value="">FILTER BY MODEL</option>
    <option value="GHOST-2">GHOST</option>
    <option value="HUNT 2">HUNT</option>
   <option value="FLY 2">FLY</option>
   <option value="MAGATRON 2">MAGATRON</option>
   <option value="SKELETON 2">SKELETON</option>
   </Select>
   <Text fontSize= "xl" fontFamily= 'sans-serif' fontWeight= 'bold' m={4} mt= "150px">
    SORTING
   </Text>
   <Box mt= {10}>
   <Select variant='filled' mt= {10} value={sortA} onChange={(e)=>setSortA(e.target.value)}>
    <option value="">SORT BY AVERAGE</option>
    <option value= "asc">ASENDING</option>
    <option value= "desc">DESENDING</option>
   </Select>
   <Select variant='filled' mt= {10} value={sortP} onChange={(e)=>setSortP(e.target.value)}>
    <option value="">SORT BY PRICE</option>
    <option value= "asc">ASENDING</option>
    <option value= "desc">DESENDING</option>
   </Select>
   <Select variant='filled' mt= {10} value={sortE} onChange={(e)=>setSortE(e.target.value)}>
    <option value="">SORT BY ENGINE SIZE</option>
    <option value= "asc">ASENDING</option>
    <option value= "desc">DESENDING</option>
   </Select>
   </Box>
</Box> 
        <Box className='card'> 
       
            {data.map((ele)=>(

           <ProductItem key={ele.id} {...ele} filter = {filter} setFilter = {setFilter} />
     
 ))}
          
        </Box>
        </Flex>
     <Pagination page = {page} setPage={setPage} />

        </>
    )
}