import React from "react";
import "./Navbar.css";
import {
  Box,
  Center,
  Container,
  Flex,
  Image,
  Text,
  Icon,
  Input,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
  return (
    <Box
      p="10px"
      maxw="1000px"
      className="navbarBox"
      display="flex"
      gap="40px"
      justifyContent="space-between"
    >
      <Center maxWidth="300px" minW="150px" h="108px">
        <Link to="/">
          <Image
            cursor="pointer"
            w="80%"
            src="https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png"
          ></Image>
        </Link>
      </Center>
      <Box className="navSecondBox" flexGrow="60%">
        <Flex p="10px" gap="20px" flexDir="row-reverse" backgroundColor="white">
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Country Website
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Language
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Support Center
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Ship to
          </Text>
          <Text fontSize="14px" fontWeight="300" cursor="pointer">
            Mobile Offer
          </Text>
        </Flex>
        <Flex p="10px" gap="40px" flexDir="row-reverse">
          <Center cursor="pointer" gap="10px">
            {" "}
            <Link to="/cart">
              {" "}
              <Icon boxSize="1.5rem" as={AiOutlineShoppingCart} />
            </Link>
            <Link to="/cart">
              <Text fontSize="1.05rem">Cart</Text>
            </Link>
          </Center>
          <Center cursor="pointer" gap="10px">
            <Icon boxSize="1.5rem" as={AiOutlineHeart} />
            <Link to="/wishlist">
              <Text fontSize="1.15rem">Favourites</Text>
            </Link>
          </Center>
          <Center cursor="pointer" gap="10px">
            <Icon boxSize="1.5rem" as={CgProfile} />
            <Link to="/signup">
              <Text fontSize="1.05rem">Sign In</Text>
            </Link>
          </Center>
          <Flex border="2.2px solid #3a86ff" borderRadius="25px">
            <Input
              className="NavInput"
              maxW="300px"
              borderLeftRadius="25px"
              borderWidth="0px"
              fontSize="1.1rem"
              placeholder="mobile phone"
            ></Input>
            <Button borderRadius="25px">
              <Center>
                <Icon boxSize="1.3rem" as={AiOutlineSearch}></Icon>
              </Center>
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box className="NavMenu">
      <Center >
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
        <Link to='/signup'><MenuItem>Sign up</MenuItem></Link>
        <Link to='/wishlist'><MenuItem>Wish List</MenuItem></Link>
        <Link to='/cart'><MenuItem>Cart</MenuItem></Link>
        <Link to='/products'><MenuItem>Mobiles</MenuItem></Link>
        </MenuList>
      </Menu>
      </Center>
      </Box>
    </Box>
  );
}

export default Navbar;
