import React from 'react'
import { Box, Center, Flex, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'
import { BsBagPlus, BsFillXDiamondFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Collection2() {
  return (
    <Box m='50px 0'>
        <HStack ml='15px' gap='28px'>
        <Icon boxSize='20px' as={BsFillXDiamondFill} />
        <Text fontSize='1.35rem' fontWeight='bold'> NEW</Text>
        </HStack>
        <SimpleGrid minChildWidth='160px' spacing='30px' padding='24px'>

            {/* <Image  objectFit='contain' cursor='pointer' src='https://uidesign.gbtcdn.com/GB/image/8823/MI+7.jpg'></Image> */}
            <Single  url='https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16542/goods_thumb_220-v1/185db9573c5f.jpg' price='50' text='Drones' />
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6898654298117435392/16549/goods_thumb_220-v1/d87e35c0597d.jpg' price='70' text='Tablets'/>
            <Single url='https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16522/goods_thumb_220-v1/bad4da8f65a9.jpg' price='80' text='Mobiles'/>
            <Single url='https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16550/goods_thumb_220-v1/b4a76d58b256.jpg' price='90' text='Gaming'/>

        </SimpleGrid>

    </Box>
  )
}

export default Collection2


function Single({url,price,text}){
    let num = +(price) + 10
    return(
        <Link to='/products'><Box  cursor='pointer' border='1px solid #CCCCCC'>
                <Image margin='auto'  w='160px' src={url}></Image>
               <Center><Text fontSize='1.13rem' fontWeight='bold' > {text}</Text></Center> 
               <Center><Text fontSize='1.33rem' fontWeight='bold' color='red.500' >$ {price}</Text></Center> 
               <Center><Text textDecor='line-through' fontSize='1.33rem' fontWeight='bold' color='red.500' >$ {num}</Text></Center> 
                
        </Box>
        </Link>
    )
}