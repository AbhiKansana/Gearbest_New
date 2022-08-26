import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Center,
    Spinner,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
  import { Link as Link1 } from "react-router-dom";
  import axios from "axios";
  import { useDispatch, useSelector} from 'react-redux';
  import { useNavigate } from 'react-router-dom';
  import { useEffect } from "react";
  import Error from '../Components/Login/Error';
  import Success from '../Components/Login/Success';



  
  export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const[correct,setCorrect] = useState(false)
    const[error,setError] = useState(false)
  
    // const dispatch = useDispatch()
    // const nav = useNavigate()
    // const state = useSelector(state=>state.signup)
  
    // const isSigned = state.isSigned
    // const isLoading = state.isLoading
    // const isError = state.isError

    // useEffect(()=>{
       
    //   if(isSigned){
    //     dispatch(signupStatusFalse())
    //     nav('/login')
    //   }

    // },[isSigned])
  
    function ValidateEmail(mail) {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)
      ) {
        return true;
      }
      return false;
    }
  
    function handleSave() {
      if (name && email && password) {
        const obj = { name, email, password };
            setError(false)
            setCorrect(true)
        //    console.log(obj)
      }
      else{
            setCorrect(false)
            setError(true)
      }
    }
  
    return (
      <>
      {/* {isError && <Center mb='-6rem' mt='2rem'>?
      <Error/>
      </Center>} */}
      <Flex
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py='30px' px={6}>
          <Stack align={"center"}>
            <Heading fontWeight={'500'} fontSize={"3xl"} textAlign={"center"}>
              Sign up
            </Heading>
            {correct && <Success/>}
             {error && <Error/>}
            {/* {isLoading && <Center>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
/>
            </Center>} */}
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            width="400px"
            p={8}
          >
            <Stack spacing={4}>
              <HStack>
                <Box w={"100%"}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel> Name</FormLabel>
                    <Input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"}
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={handleSave}
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link1 to="/login">
                    <span style={{ color: "blue" }}>Login</span>
                  </Link1>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </>
    );
  }
  