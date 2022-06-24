import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import Filters from '../Components/ProductPageComp/Fliters'
import MainProducts from '../Components/ProductPageComp/MainProducts'
import '../Components/ProductPageComp/productPage.css'

function ProdutsPage() {
  return (
    <Flex className='mainPP'  >
       <Filters/>
       <MainProducts/>
    </Flex>
  )
}

export default ProdutsPage