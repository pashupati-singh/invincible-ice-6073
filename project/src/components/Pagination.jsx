import {Box,Button} from "@chakra-ui/react";

export default function Pagination ({page,setPage}){
    

    return(
        <>
      <Box className = 'pagination'>
      <Button colorScheme='teal' variant='outline' disabled = {page === 1} onClick={()=>setPage(page-1)}>PREVIOUS</Button>
      <Button colorScheme='teal' variant='outline'>{page}</Button>
      <Button colorScheme='teal' variant='outline' disabled = {page === 5} onClick={()=>setPage(page+1)}>NEXT</Button>
      </Box>
        </>
    )
}