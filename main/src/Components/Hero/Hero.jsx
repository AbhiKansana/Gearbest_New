import React from 'react'
import { Text,Box,Flex, HStack, Image } from '@chakra-ui/react'

function Hero() {
  return (
    <Box>
        <Flex>
            <Box bg='#ECF6FF' w='20%'>
                <Text h='40px' boxSizing='border-box' bg='black' p='3px 0' color='white' textAlign='center' fontWeight='bold' fontSize='1.45rem'>Category</Text>
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
                <Texty text="Motor's & Car Electronics"/>
                <Texty text="Men's Fashion"/>
                <Texty text="Watches & Jewellery"/>
                <Texty text="GearBest Promotion"/>
            </Box>
            <Box w='80%'>
                <HStack gap='100px' p='8px 0' pl='100px'  bg='#FFDA00'>
                    <Text fontWeight='bold' color='black'>SUPER DEALS</Text>
                    <Text fontWeight='bold' color='black'>APP ONLY</Text>
                    <Text fontWeight='bold' color='black'>NEW ARRIVAL</Text>
                </HStack>
                <Box>
                    <Image src='https://uidesign.gbtcdn.com/GB/image/9534/Smart+Watches+PC+1190X420+EN.jpg'></Image>
                    <Flex  justifyContent='space-between'>
                        <Image src='https://uidesign.gbtcdn.com/GB/image/8823/L900-230X120-en.jpg'></Image>
                        <Image src='https://uidesign.gbtcdn.com/GB/image/8823/C230X120-en.jpg'></Image>
                        <Image src='https://uidesign.gbtcdn.com/GB/image/7257/230_120_en.jpg'></Image>
                        <Image src='https://uidesign.gbtcdn.com/GB/image/6874/230x120b_en.jpg'></Image>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    </Box>
  )
}

export default Hero


function Texty({text}){
    return(
        <Text textAlign='left' padding='4.5px 0 '  _hover={{fontWeight:'500',cursor:'pointer'}}>{text}</Text>
    )
}