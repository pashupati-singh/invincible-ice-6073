import axios from "axios";
import { useEffect, useState } from "react";
import { Text, Flex, Box, Select } from "@chakra-ui/react";
import Pagination from "../components/Pagination";
import ProductItem from "./ProductItem";

export default function Product() {
  const [data, setdata] = useState([]);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");
  const [sortA, setSortA] = useState("");
  const [sortP,setSortP] = useState("");
  const [sortE,setSortE] = useState("");

  const FetchData = (page, filter, sortA) => {
    let ApiUrl;

    if (filter) {
      ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6&Company=${filter}`;
    } else if (sortA) {
      ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6&sortby=Average&order=${sortA}`;
      }else if(sortP){
        ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6&sortby=Price&order=${sortP}`
      }else if(sortE){
        ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6&sortby=Engine&order=${sortE}`
    }
     else {
      ApiUrl = `https://6453b750e9ac46cedf2d995b.mockapi.io/api/bikes/bikes?page=${page}&limit=6`;
    }

    axios
      .get(ApiUrl)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // console.log(sortE);
  

  useEffect(() => {
    FetchData(page, filter, sortA,sortE,sortP);
  }, [page, filter, sortA,sortE,sortP]);

  return (
    <>
     
      <Box display={"flex"} justifyContent={"space-around"}>
        <Select
          mt={10}
          variant="filled"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value)
            setSortA('')
            setSortE('')
            setSortP('')
          }
           
          }
        >
          <option value="">FILTER BY MODEL</option>
          <option value="Honda">Honda</option>
          <option value="Kawasaki">Kawasaki</option>
          <option value="Yamaha">Yamaha</option>
        </Select>
        
        <Select
          variant="filled"
          mt={10}
          value={sortA}
          onChange={(e) => {
            setSortA(e.target.value)
            setFilter('')
            setSortE('')
            setSortP('')
          }}
        >
          <option value="">SORT BY AVERAGE</option>
          <option value="asc">ASENDING</option>
          <option value="desc">DESENDING</option>
        </Select>
        <Select variant="filled" mt={10} value={sortP}
          onChange={(e) => {
            setSortP(e.target.value)
            setFilter('')
            setSortA('')
            setSortE('')
          }}>
          <option value="">SORT BY PRICE</option>
          <option value="asc">ASENDING</option>
          <option value="desc">DESENDING</option>
        </Select>
        <Select onChange={(e)=>{
          setSortE(e.target.value)
          setFilter('')
          setSortA('')
          setSortP('')
        }} value={sortE} variant="filled" mt={10}>
          <option value="">SORT BY ENGINE SIZE</option>
          <option value="asc">ASENDING</option>
          <option value="desc">DESENDING</option>
        </Select>
      </Box>
      {/* </Box> */}
      {/* </Box> */}
      <Box className="card">
        {data.map((ele) => (
          <ProductItem
            key={ele.id}
            image={ele.Image}
            {...ele}
            filter={filter}
            setFilter={setFilter}
          />
        ))}
      </Box>
      {/* </Flex> */}
      <Pagination page={page} setPage={setPage} />
    </>
  );
}
