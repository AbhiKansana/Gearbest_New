import React, { useState } from 'react'
import { Box, Button, Checkbox, CheckboxGroup, Select, Stack, Text, VStack } from '@chakra-ui/react'
import { useDispatch} from 'react-redux'
import {sort,order, brand} from '../../Redux/Filter/actions'
import './productPage.css'

function Fliters() {

    const[sortByPrice,setSortByPrice]= useState(null)
    const[brandValues,setBrandValues] = useState([])
    const dispatch = useDispatch()

    function handelBrandValues(val){
      setBrandValues(val)
      dispatch(brand(val))
    }


    function handleSortByPrice(e){
      setSortByPrice(e.target.value)
      if(e.target.value==="l2h"){
        dispatch(order("asc"))
        dispatch(sort("price"))
      }
      else if(e.target.value==="h2l"){
         dispatch(order("desc"))
        dispatch(sort("price"))
      }
      else{
        dispatch(order(""))
        dispatch(sort(""))
      }

    }

    // console.log("sortByPrice",sortByPrice)

  return (
    <Box className='filters' p='1.25rem 1rem' >
        <Box>
            <Select textAlign='center' cursor='pointer' onChange={(e)=>handleSortByPrice(e)} placeholder='Sort By Price'>
                <option  value='l2h'>Low to high</option>
                <option  value='h2l'>High to low</option>
            </Select>
        </Box>
        <Box mt='30px'>
            <Text as={Button} mb='20px' textAlign='left'  cursor='default' w='100%'  >      
            Sort By Brand       
            </Text>
              <CheckboxGroup  onChange={handelBrandValues} colorScheme='green' defaultValue={brandValues}>
                <Stack  spacing={[1, 5]} direction={['column']}>
                  <Checkbox value='Xiaomi'>Xiaomi</Checkbox>
                  <Checkbox value='Realme'>Realme</Checkbox>
                  <Checkbox value='Mpow'>Mpow</Checkbox>
                  <Checkbox value='POCO'>POCO</Checkbox>
                  <Checkbox value='OPPO'>OPPO</Checkbox>
                  <Checkbox value='OnePlus'>OnePlus</Checkbox>
                </Stack>
              </CheckboxGroup>
        </Box>

    </Box>
  )
}

export default Fliters