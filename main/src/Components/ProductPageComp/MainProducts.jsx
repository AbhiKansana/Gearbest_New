import React, { useEffect, useState } from 'react'
import { Box , Center, Grid , Button, Text, SimpleGrid} from '@chakra-ui/react'
import productsPageFetch from '../../Redux/ProductsPage/actions'
import { useSelector, useDispatch} from 'react-redux'
import UnitProduct from './UnitProduct'
import { pageNo } from '../../Redux/Filter/actions'
import './productPage.css'

function MainProducts() {

    const filterState = useSelector(state=>state.filterParams)
    const state = useSelector(state=>state.productPage)
    const dispatch = useDispatch()
    // console.log(filterState)
    const page = filterState.page
    const{ order, sort, brand} = filterState
    const arr = state.data
    const param = {
        page ,
        order,
        sort,
        brand

    }


    useEffect(() => {
      
        dispatch(productsPageFetch(param))
      
    }, [page,sort,order, brand])


    const arr1 = arr.map(item=>{
        return(
            <UnitProduct key={item.id} object={item}/>
        )
    })

    if(page===1){
        
    }
    

  return (
    
    <Box  className='lastAir'  minHeight='1299px'>
    <SimpleGrid  width='100%'  minChildWidth='250px' gap={6} p='1.25rem 1rem'  >
        {arr1}
    </SimpleGrid>
    <Center>
    <Button
        size='md'
        minH='48px'
        maxW='120px'
        border='2px'
        borderColor='green.500'
        disabled={page===1}
        onClick={()=>{
            if(page>1){
                // setPage(page-1)
                dispatch(pageNo(-1))
            }
        }}
        >
                 Prev
    </Button>

    <Center
        size='md'
        h='48px'
        w='80px'
        fontSize='1.5rem'
        >
           {page}
                 
    </Center>


    <Button
        size='md'
        minH='48px'
        maxW='120px'
        border='2px'
        disabled={page===3}
        borderColor='green.500'
        onClick={()=>{
            
            if(page<3){
                // setPage(page+1)
                dispatch(pageNo(+1))
            }
        }}
        >
                 Next
    </Button>
    </Center>
         </Box>
  )
}

export default MainProducts