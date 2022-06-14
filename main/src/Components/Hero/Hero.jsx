import React from 'react'
import { Text,Box,Flex } from '@chakra-ui/react'

function Hero() {
  return (
    <Box>
        <Flex>
            <Box bg='#ECF6FF' w='20%'>
                <Text bg='black' color='white' textAlign='center' fontWeight='bold' fontSize='1.45rem'>Category</Text>
                <Texty text="Consumer Electronics"/>
                <Texty text="Industrial & Scientific"/>
                <Texty text="Cell Phones & Accessories"/>
                <Texty text="Appliances"/>
                <Texty text="Outdoors, Fitness & Sports"/>
                <Texty text="Computers, Tablets & Office"/>
                <Texty text="Health & Personal Care"/>
                <Texty text="Home Improvement & Tools"/>
                <Texty text="Drones, Toys & Hobbies"/>
                <Texty text="Home & Garden"/>
            </Box>
        </Flex>
    </Box>
  )
}

export default Hero


function Texty({text}){
    return(
        <Text textAlign='left' padding='0 40px'  _hover={{fontWeight:'500',cursor:'pointer'}}>{text}</Text>
    )
}