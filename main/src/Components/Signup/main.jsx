import React from 'react'
import { Box, Button, Center, Input, VStack} from '@chakra-ui/react'

function MainSign() {
  return (

    <VStack w='40%' minW='400px' m='auto' spacing={3} padding='50px' bg={'#FAF9F6'}  borderRadius='px' mt='30px'>
        <Input placeholder='Enter your Email id'></Input>
        <Input placeholder='Enter your User name'></Input>
        <Input placeholder='Enter your password'></Input>
        <Center>
        <Button colorScheme='teal' size='md'>
            Signup
        </Button>
        </Center>
    </VStack>
  
  )
}

export default MainSign