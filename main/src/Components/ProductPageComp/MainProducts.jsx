import React, { useEffect, useState } from 'react'
import { Box , Center, Grid , Button, Text} from '@chakra-ui/react'
import productsPageFetch from '../../Redux/ProductsPage/actions'
import { useSelector, useDispatch} from 'react-redux'
import UnitProduct from './UnitProduct'
import { pageNo } from '../../Redux/Filter/actions'

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
    
    <Box  w='70%' minHeight='1299px'>
    <Grid  templateColumns='repeat(3, 1fr)' gap={6} p='1.25rem 1rem'  >
        {arr1}
    </Grid>
    <Center>
    <Button
        size='md'
        height='48px'
        width='120px'
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
                 Previous
    </Button>

    <Center
        size='md'
        height='48px'
        width='80px'
        fontSize='1.5rem'
        >
           {page}
                 
    </Center>


    <Button
        size='md'
        height='48px'
        width='120px'
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