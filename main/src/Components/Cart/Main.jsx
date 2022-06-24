import React from "react";
import './cart.css'
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Center,
  VStack,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import {ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons'
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { mainCartProductsSuccess } from "../../Redux/CartPage/actions";
import { deleteCartItem } from "../../Redux/CartPage/actions";
import { updateCartItem } from "../../Redux/CartPage/actions";
import { useNavigate } from 'react-router-dom'

function Main() {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const state = useSelector((state) => state.cartPage);
  const load = state.isLoading
  let total = 0
  state.cartArr.forEach(e=>{
    let tempQ = +(e.qnty)+1
    let tempP = +(e.price)
    let tempT = tempQ*tempP
    total += tempT
  })
  const arr = state.cartArr.map((item) => {
    return <Unit key={item.id} data={item} />;
  });

  useEffect(() => {
    dispatch(mainCartProductsSuccess());
  }, []);

  return (
    <Box>
      <Text mb="30px" textAlign="center" fontWeight='500' fontSize="xx-large">
        Shopping Cart
      </Text>
      {load &&  arr.length<1 && (  <Spinner pos='relative' top='50%' left='50%' size="xl" zIndex='100' />)}
      { arr.length> 0 && <Flex gap='180px'>
      </Flex>}
      <Box mb='30px' borderBottom='.4px solid black'>
      {arr}
      </Box>
      <VStack   spacing='15px' w='280px' m='auto' >
        <Flex justifyContent='space-between' width='100%'>
        <Text fontSize='22px' fontWeight='500'>Subtotal</Text>
        <Text fontSize='24px' fontWeight='600'>₹{(total).toFixed(2)}</Text>
        </Flex>
        <Button w='280px' onClick={()=>Navigate('/payment')} colorScheme='whatsapp'>Proceed to payment <ArrowForwardIcon boxSize='20px'/></Button>
        <Button w='280px'  onClick={()=>Navigate('/products')} colorScheme='telegram'><ArrowBackIcon boxSize='20px' />Back to Product Page </Button>
      </VStack>
    </Box>

  );
}

export default Main;

function Unit({ data }) {
  const dispatch = useDispatch();
  
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

  function handleDelete(lid) {
    dispatch(deleteCartItem(lid));
  }

  return (
    <Flex className="cartUnit"
      boxSizing="border-box"
      p="20px"
      pl="0"
      justifyContent="space-between"
      gap='20px'
      alignItems="center"
      borderTop=".4px solid black"
    >
      <Image height="140px" src={data.image_url}></Image>
      <VStack  gap={8}>
        <Text>{data.name}</Text>
        <Button
          onClick={() => handleDelete(data.id)}
          colorScheme="red"
          variant="outline"
        >
          Remove
        </Button>
      </VStack>
      <Flex flexDirection='column'  >
      <Text textAlign='center' >Price</Text>
      <Text>₹{data.price}</Text>
      </Flex>
      <Box
        display="flex"
        justifyContent="space-between"
        borderRadius="8px"
        size="md"
        height="44px"
        width="140px"
        border="2px"
        borderColor="green.500"
      >
        <Button
          onClick={() => {
            if(data.qnty>0){
                dispatch(updateCartItem(data.id, data.qnty, -1));
            }
          }}
          fontSize="1.5rem"
        >
          -
        </Button>
        <Center>{data.qnty+1}</Center>
        <Button
          onClick={() => {
            if(data.qnty<9){
                dispatch(updateCartItem(data.id, data.qnty, 1));
            }
          }}
        >
          +
        </Button>
      </Box>
      <Center boxSizing="border-box" w='80px'>
      <Flex flexDir='column'>
       <Text textAlign='center' fontWeight='500'>Total</Text> 
      <Text  fontWeight="600"> ₹{((data.price)*(data.qnty+1)).toFixed(2)}</Text> 
      </Flex>
      </Center>
    </Flex>
  );
}
