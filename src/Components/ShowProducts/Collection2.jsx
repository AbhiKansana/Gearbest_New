import React from 'react'
import { Box, Center, Flex, Grid, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'
import { BsBagPlus, BsFillXDiamondFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Collection2() {
  return (
    <Box m='50px 0'>
        <HStack ml='15px' gap='28px'>
        <Icon boxSize='20px' as={BsFillXDiamondFill} />
        <Text fontSize='1.35rem' fontWeight='bold'> NEW</Text>
        </HStack>
        <Grid gridTemplateColumns={['repeat(1,fr)','repeat(2,1fr)','repeat(4,1fr)']} gap='30px'  padding='24px'>

            <Single  url='https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16542/goods_thumb_220-v1/185db9573c5f.jpg' price='50' text='Drones' />
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16549/goods_thumb_220-v1/d87e35c0597d.jpg' price='70' text='Tablets'/>
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16522/goods_thumb_220-v1/bad4da8f65a9.jpg' price='80' text='Mobiles'/>
            <Single url='https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16550/goods_thumb_220-v1/b4a76d58b256.jpg' price='90' text='Gaming'/>

        </Grid>

    </Box>
  )
}

export default Collection2


function Single({url,price,text}){
    let num = +(price) + 10
    return(
        <Link to='/products'>
          <Box boxShadow='rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px'  cursor='pointer' >
                <Image pt='10px' ml='20px' w='55px' src="https://cdn-icons-png.flaticon.com/128/6213/6213166.png"/>
                <Image margin='auto'  w='160px' src={url}></Image>
               <Center><Text fontSize='1.13rem' fontWeight='bold' > {text}</Text></Center> 
               <Center><Text fontSize='1.33rem' fontWeight='bold' color='red.500' >$ {price}</Text></Center> 
               <Center><Text textDecor='line-through' fontSize='1.33rem' fontWeight='bold' color='red.500' >$ {num}</Text></Center> 
                
        </Box>
        </Link>
    )
}

// box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
// https://img.icons8.com/color/2x/discount--v3.gif