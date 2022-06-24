import React from 'react'
import { Box, Center, Flex, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'
import { BsBagPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Collection() {
  return (
    <Box m='5 0px 0'>
        <HStack ml='15px' gap='28px'>
        <Icon boxSize='20px' as={BsBagPlus} />
        <Text fontSize='1.35rem' fontWeight='bold'> COLLECTION</Text>
        </HStack>
        <SimpleGrid minChildWidth='160px' spacing='10px' padding='24px'>
          <Link to='/products'><Box cursor='pointer'   border='1px solid #CCCCCC'>
                <Image margin='auto'  w='160px' src="https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16430/goods_thumb_220-v3/e7514f266988.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link>
             <Link to='/products'><Box cursor='pointer'  border='1px solid #CCCCCC' >
                <Image margin='auto' w='160px' src="https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_thumb_220-v3/ad519caeb82f.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link>
             <Link to='/products'><Box cursor='pointer'   border='1px solid #CCCCCC'>
                <Image margin='auto' w='160px' src="https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16474/goods_thumb_220-v3/1c950ba055da.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link>
             <Link to='/products'><Box cursor='pointer' border='1px solid #CCCCCC' >
                <Image margin='auto'  w='160px' src="https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16425/goods_thumb_220-v5/2f4aab099de4.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link>
             <Link to='/products'><Box  cursor='pointer' border='1px solid #CCCCCC' >
                <Image  margin='auto' w='160px' src="https://gloimg.gbtcdn.com/soa/gb/item/6899292126182567936/16466/goods_thumb_220-v1/5c46946213f9.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link>
             <Link to='/products'><Box cursor='pointer'  border='1px solid #CCCCCC' >
                <Image margin='auto' w='160px' src="https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v7/b87b9802f084.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link>
             {/* <Link to='/products'><Box cursor='pointer'  border='1px solid #CCCCCC' >
                <Image  w='160px' src="https://gloimg.gbtcdn.com/soa/gb/item/6507287161137004544/16412/goods_thumb_220-v1/4cbb3a1e4642.jpg"></Image>
                <Center height='40px'>Asseso Go Store</Center>
             </Box></Link> */}
           
        </SimpleGrid>

    </Box>
  )
}

export default Collection