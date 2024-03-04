import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export default function FilterCategory() {
  return (
    <Flex justifyContent="space-around" bg="rgb(116, 157, 165)">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          ENGINE
        </MenuButton>
        <MenuList>
          <MenuItem>900 cc</MenuItem>
          <MenuItem>950 cc</MenuItem>
          <MenuItem>1000 cc</MenuItem>
          <MenuItem>1100 cc</MenuItem>
          <MenuItem>1200 cc</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          MODEL
        </MenuButton>
        <MenuList>
          <MenuItem>GHOST</MenuItem>
          <MenuItem>HUNT</MenuItem>
          <MenuItem>MAGATRON</MenuItem>
          <MenuItem>SKELETON</MenuItem>
          <MenuItem>FLY</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          PATNER COMPANY
        </MenuButton>
        <MenuList>
          <MenuItem>Above 12</MenuItem>
          <MenuItem>Below 12</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          BEST SELLER
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          RATING
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          COMPANY
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          bg="rgb(116, 157, 165)"
        >
          Average
        </MenuButton>
        <MenuList>
          <MenuItem>BELOW 12 Km/L</MenuItem>
          <MenuItem>ABOVE 12 Km/L</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
