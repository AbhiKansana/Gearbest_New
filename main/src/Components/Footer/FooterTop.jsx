import React from 'react'
import { Box, HStack, Image, Text, Icon, Center } from '@chakra-ui/react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsHandThumbsUp, BsStar} from 'react-icons/bs'
import {MdOutlineLocalShipping} from 'react-icons/md'
function FooterTop() {
  return (
    <Box >
        <HStack textAlign='center' gap='50px'>
            <Box  p='20px' >
                <Image w='200px'mb='15px' src='https://uidesign.gbtcdn.com/GB/images/promotion/2019/a_evan/Gearbest/logo_gearbest.png'></Image>
                <Text fontWeight='bold' fontSize='.9rem'>AFFORDABILITY QUALITY</Text>
                <Text fontWeight='bold' fontSize='.9rem'>FUN SHOPING</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='2.25rem' as={AiOutlineHome}/>
                </Center>
                <Text fontWeight='bold' >High Quality Selection</Text>
                <Text w='150px' fontSize='.8rem' margin='0px'>Total product quality control for peace of mind</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='2.25rem' as={BsHandThumbsUp}/>
                </Center>
                <Text fontWeight='bold' >Affordable Prices</Text>
                <Text w='150px' fontSize='.8rem' margin='0px'>Factory direct prices for maximum savings</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='2.25rem' as={MdOutlineLocalShipping}/>
                </Center>
                <Text fontWeight='bold' >Express Shipping</Text>
                <Text w='150px' fontSize='.8rem' margin='0px'>Fast, reliable delivery from global warehouses</Text>
            </Box>
            <Box>
                <Center>
                     <Icon boxSize='2.25rem' as={BsStar}/>
                </Center>
                <Text fontWeight='bold' >Worry-free After-sales</Text>
                <Text w='150px' fontSize='.8rem' margin='0px'>Instant access to professional support</Text>
            </Box>
        </HStack>
    </Box>
  )
}

export default FooterTop