import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import Success from './Success';
import Error from './Error';
import {Link as Link1} from 'react-router-dom'



export default function Login() {
  const[correct,setCorrect] = useState(false)
  const[error,setError] = useState(false)
  const[email,setEmail] = useState("")
  const[password,setPassword] =  useState("")
      function handleClick(e){
        e.preventDefault()
        if(email.length>5 && password){
           setError(false)
            setCorrect(true)
        }
        else{
          setCorrect(false)
          setError(true)
        }

      }
  return (
    <>
     
    <Flex 
      minH={'80vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} fontWeight='400'>Log in</Heading>
         {correct && <Success/>}
         {error && <Error/>}
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
           <form>
          <Stack spacing={4}>
            
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={e=>setEmail(e.target.value)} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={e=>setPassword(e.target.value)}  required type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
              type='submit'
              onClick={(e)=>{handleClick(e)}}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                  Don't have a account? <Link1 to='/register'><span style={{color:"blue"}}>Singup</span></Link1> 
                </Text>
              </Stack>
          </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  
    </>
  );
}