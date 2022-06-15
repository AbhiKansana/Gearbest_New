import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import Filters from '../Components/ProductPageComp/Fliters'
import MainProducts from '../Components/ProductPageComp/MainProducts'

function ProdutsPage() {
  return (
    <Flex >
       <Filters/>
       <MainProducts/>
    </Flex>
  )
}

export default ProdutsPage