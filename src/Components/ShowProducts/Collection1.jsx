import React from 'react'
import { Box, Center, Flex, Grid, HStack, Icon, Image, SimpleGrid, Text} from '@chakra-ui/react'
import { BsBagPlus} from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Collection() {

   // Data for each child box
   const arr = [
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16430/goods_thumb_220-v3/e7514f266988.jpg",
         text: "Asseso Go Store"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_thumb_220-v3/ad519caeb82f.jpg",
         text: "Amazing Bags"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16474/goods_thumb_220-v3/1c950ba055da.jpg",
         text: "Smart Phones"
      },
      {
         url : "https://gloimg.gbtcdn.com/soa/gb/store/6878399324569661440/16425/goods_thumb_220-v5/2f4aab099de4.jpg",
         text: "Fitness Freak"
      },
      // {
      //    url : "https://gloimg.gbtcdn.com/soa/gb/item/6899292126182567936/16466/goods_thumb_220-v1/5c46946213f9.jpg",
      //    text: "Hitech Inverters"
      // },
      // {
      //    url : "https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v7/b87b9802f084.jpg",
      //    text: "Variety of Laptops"
      // },
   ]

   const childs = arr.map(ele=>{
      return (
         <Unit key={ele.text} data={ele}/>
      )
   })


  return (
    <Box m='5 0px 0' my='40px'>
        <HStack ml='15px' gap='28px'>
        <Icon boxSize='20px' as={BsBagPlus} />
        <Text fontSize='1.35rem' fontWeight='bold'> COLLECTION</Text>
        </HStack>
        <Grid gridTemplateColumns={['repeat(1,fr)','repeat(2,1fr)','repeat(4,1fr)']} gap='30px' padding='24px'>
            {childs}   
        </Grid>

    </Box>
  )
}

export default Collection


function Unit({data}){

   return(
      <Link to='/products'>
         <Box cursor='pointer'  boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' >
                <Image margin='auto' w='160px' src={data.url}></Image>
                <Center height='40px'>{data.text}</Center>
             </Box>
      </Link>
   )
}

// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;