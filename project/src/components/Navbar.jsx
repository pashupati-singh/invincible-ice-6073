import { Flex, Box, Image } from "@chakra-ui/react";
import Search from "../Pages/Search";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
const {isAuth} = useContext(AuthContext);


  const handleClick = () => {
    navigate("/");
  };

  return (
    <Box className="nav">
      <Flex h="100px" p={4} justifyContent={"space-evenly"}>
        <button onClick={handleClick}>
          <Image src="LOGOOOO.png" alt="error" marginBottom="6px" w={100} />
        </button>
        <Search color="white" />
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/admin"}>Admin</Link>
        <Link to={"/cart"}>Cart</Link>
        <Link to={"/login"}>{isAuth?"Logout":"Login"}</Link>
      </Flex>
    </Box>
  );
}
