import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import {Box} from "@chakra-ui/react";
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Cart from "../Pages/Cart"
import Login from "../Pages/Login"
import SingleProductPage from "../Pages/SingleProductPage"
import Admin from "../Pages/Admin"
import Product from "../Pages/Product"
import Logout from "../Pages/Logout";


export default function AllRoutes(){
   

    return(
       <Box>
        <Routes>

            <Route path = "/" element = {<Home />} />
            <Route path = "/about"element = {<About />} />
            <Route path = "/Cart" element = {<Cart />} />
            <Route path = "/login" element = {<Login />} /> 
            <Route path = "/product" element = {<Product />} />
            <Route path = "/admin" element = {<Admin />} />
            <Route path = "/Contact" element = {<Contact />} />
            <Route path = "/logout" element = {<Logout />} />
            <Route path = "/product/:id" element = {<SingleProductPage />} />

        </Routes>
       </Box>
    )
}