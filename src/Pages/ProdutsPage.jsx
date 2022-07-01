import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Box, Flex } from '@chakra-ui/react'
import Filters from '../Components/ProductPageComp/Fliters'
import MainProducts from '../Components/ProductPageComp/MainProducts'
import '../Components/ProductPageComp/productPage.css'
import GoToTop from '../Components/GoToTop'

function ProdutsPage() {
  return (
    <Flex className='mainPP'  >
       <Filters/>
       <MainProducts/>
       <GoToTop/>
    </Flex>
  )
}

export default ProdutsPage