import React, { useEffect } from 'react'
import { Box , Grid} from '@chakra-ui/react'
import productsPageFetch from '../../Redux/ProductsPage/actions'
import { useSelector, useDispatch} from 'react-redux'
import UnitProduct from './UnitProduct'

function MainProducts() {

    const dispatch = useDispatch()
    const state = useSelector(state=>state.productPage)
    const arr = state.data

    useEffect(() => {
      
        dispatch(productsPageFetch())
      
    }, [])


    const arr1 = arr.map(item=>{
        return(
            <UnitProduct key={item.id} object={item}/>
        )
    })
    

  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6} p='1.25rem 1rem'   w='70%'>
        {arr1}
    </Grid>
  )
}

export default MainProducts