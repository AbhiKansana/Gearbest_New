import React from 'react'
import { Box, Text, Flex, Image, Button, Center } from '@chakra-ui/react'
import{ useSelector, useDispatch} from 'react-redux'

function Main() {
    const dispatch = useDispatch()
    const state  = useSelector(state=>state.cartPage)
    const arr = state.cartArr.map(item=>{
        return(
            <Unit key={item.id} data={item} />
        )
    })
    
  return (
    <Box>
        <Text mb='30px' textAlign='center' fontSize='xx-large' >Shopping Cart</Text>
        {arr}

    </Box>
  )
}

export default Main


function Unit({data}){

    //  const data = {
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
    return(
        <Flex p='20px' pl='0' justifyContent='space-between' alignItems='center' borderTop='.4px solid black'> 
            <Image height='140px' src={data.image_url}></Image>
            <Text>{data.name}</Text>
            <Text>{data.price}</Text>
            <Box
            display='flex'
            justifyContent='space-between'
            borderRadius='8px'
            size='md'
            height='44px'
            width='140px'
            border='2px'
            borderColor='green.500'
            >
                  <Button fontSize='1.5rem' >-</Button>
            <Center>1</Center>
             <Button  >+</Button>
            </Box>
            <Text fontWeight='600'> {data.price}</Text>
        </Flex>
    )
}