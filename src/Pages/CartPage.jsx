import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Box, Text, } from '@chakra-ui/react'
import Main from '../Components/Cart/Main'
import GoToTop from '../Components/GoToTop'

function CartPage() {
  return (
    <Box mt='40px'>
        <Main/>
        <GoToTop/>
    </Box>
  )
}

export default CartPage