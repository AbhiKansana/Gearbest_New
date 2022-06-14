import React from 'react'
import { Box, Center, Container, Flex, Image, Text, Icon, Input, Button } from '@chakra-ui/react'
import { AiOutlineShoppingCart, AiOutlineHeart, AiFillHeart, AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';


function Navbar() {
  return (
    
    <Box  display='flex' gap='150px'>
        <Center bg='white' w='230px' h='108px'>
        <Image w='230px' h='50px' src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png' ></Image>
        </Center>
        <Box  flexGrow='1'>
            <Flex p='10px' gap='20px' flexDir='row-reverse'   backgroundColor='white'>
                <Text>Country Website</Text>
                <Text>Language</Text>
                <Text>Support Center</Text>
                <Text>Ship to</Text>
                <Text>Mobile Offer</Text>
            </Flex>
            <Flex p='10px' gap='40px' flexDir='row-reverse'  >
                <Center gap='10px'><Icon boxSize='1.5rem' as={AiOutlineShoppingCart}/><Text fontSize='1.25rem'>Cart</Text></Center>
                <Center gap='10px'><Icon boxSize='1.5rem' as={AiOutlineHeart}/><Text fontSize='1.25rem'>Favourites</Text></Center>
                <Center gap='10px'><Icon boxSize='1.5rem' as={CgProfile}/><Text fontSize='1.25rem'>Sing In</Text></Center>
                <Flex border='2.2px solid #3a86ff'  borderRadius='25px' >
                    <Input  w='300px' borderLeftRadius='25px' borderWidth='0px' fontSize='1.1rem' placeholder="mobile phone"></Input>
                    <Button borderRightRadius='25px'><Center><Icon boxSize='1.3rem' as={AiOutlineSearch}></Icon></Center></Button>

                </Flex>
            </Flex>
        </Box>
    </Box>
  )
}

export default Navbar