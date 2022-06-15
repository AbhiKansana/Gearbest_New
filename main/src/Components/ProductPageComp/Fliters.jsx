import React from 'react'
import { Box, Select } from '@chakra-ui/react'

function Fliters() {
  return (
    <Box p='1.25rem 1rem' w='30%'>
        <Box>
            <Select placeholder='Sort By Price'>
                <option value='h2l'>High to low</option>
                <option value='l2h'>Low to high</option>
            </Select>
        </Box>

    </Box>
  )
}

export default Fliters