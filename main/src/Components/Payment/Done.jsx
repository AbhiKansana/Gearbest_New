import React, { useEffect } from 'react'
import PaymentMode from './PaymentMode'
import {Box , Flex, HStack, Text, VStack } from '@chakra-ui/react'
import {useSelector,useDispatch} from 'react-redux'
import { mainCartProductsSuccess } from '../../Redux/CartPage/actions'
import OurModal from './Modal'

function Done() {
    const state = useSelector(state=>state.cartPage.cartArr)
    const dispatch  = useDispatch()
    console.log(state)
    let totalPrice = 0
    let totalOff = 0
    let netPrice =0
    for(let i in state){
        console.log(i)
        totalPrice += state[i].strikedoffprice
        netPrice   += state[i].price
    }

        totalOff = totalPrice-netPrice


        useEffect(()=>{
            dispatch(mainCartProductsSuccess())
        },[])

  return (
    <>
    <HStack spacing='300px'>
        <PaymentMode/>
        <Box>
            <Flex boxSizing='border-box' w='250px' justifyContent='space-between'>
                <Text fontSize='22px' fontWeight='600' >Total Price</Text>
                <Text textDecor='line-through' fontSize='22px' fontWeight='600'>₹{totalPrice.toFixed(2)}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
                <Text fontSize='22px' fontWeight='600'>Discount</Text>
                <Text fontSize='22px' fontWeight='600'>₹{totalOff.toFixed(2)}</Text>
            </Flex>
            <Flex justifyContent='space-between'>
                <Text bg='yellow.200' p='0 4px' fontSize='22px' fontWeight='600'>Offer Price </Text>
                <Text bg='yellow.200' p='0 4px' fontSize='22px' fontWeight='600'>₹{netPrice.toFixed(2)}</Text>
            </Flex>
           
        </Box>
        
    </HStack>
    <OurModal/>
    </>
  )
}

export default Done