import React from 'react'
import {
    Box, Center, Image, Text, Grid, Icon, HStack
} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {AiFillShop} from 'react-icons/ai'

// const obj = {
//     "rating": "★★",
//     "id": 1,
//     "image_url": "https://img.gkbcdn.com/p/2021-11-12/xiaomi-redmi-note-11-5g-smartphone-8gb-256gb-black-1636705048083._w280_p1_.jpg",
//     "name": "Xiaomi Redmi Note Ver. 5G Smartphone",
//     "price": 33763.72,
//     "strikedoffprice": 39260.26,
//     "brand": "Xiaomi",
//     "category": "cell",
//     "qnty": 0,
//     "description": "Redmi Note Ver. 5G Smartphone 2400x1080 FHD+ Display 5G Smartphone MediaTek Dimensity 1100 6GB 128GB Triple Rear Camera 5000mAh Battery MIUI 12.5 - Black"
//   }

function UnitProduct({object}) {
    const obj = object

  return (
    <Link to={`/products${obj.id}`}>
    <Box  className='boxShadowUnitProduct' borderRadius='14px' boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;'  cursor='pointer'  >
        <Center>
            <Image w='200px'  src={obj.image_url}></Image>
        </Center>
        <Box p={4}>
            <Text  fontSize='15.5px' letterSpacing='-.2px' noOfLines={2} fontWeight='500'>{obj.name}</Text>
            <Text mt='10px' color="#F30240" fontWeight='500' fontSize='1.2rem'>₹ {obj.price}</Text>
            <Text  mb='10px' color='darkgray' fontSize='.85rem' fontWeight='400' textDecor='line-through'>MRP: {obj.strikedoffprice}</Text>
            <HStack spacing={1}>
                <Center>
                    <Icon as={AiFillShop}></Icon>
                </Center>
            <Text fontSize='15px' >{obj.brand}</Text>
            </HStack>
            
        </Box>

    </Box>
    </Link>
  )
}

export default UnitProduct