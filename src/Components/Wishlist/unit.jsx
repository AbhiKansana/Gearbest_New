import React from "react";
import { Box, Flex, HStack, chakra, Image, Stack, useColorModeValue, Button } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { deleteWishListItem } from "../../Redux/WishList/actions";
import { useDispatch } from 'react-redux'

function Unit({obj}) {
    // console.log("obj",obj.rating)
     const dispatch = useDispatch()

      const starArr = obj.rating.split("")
      const starNum = starArr.length
      const DarkStarArr = []
      for(let i in starArr){
        DarkStarArr.push(<DarkStar key={Math.floor(Math.random()*1000)}/>)
      }
      while(DarkStarArr.length<5){
        DarkStarArr.push(<LightStar key={Math.floor(Math.random()*1000)} />)
      }

      function handleRemove(){
        dispatch(deleteWishListItem(obj.id))
      }

  return (
    <Box>
      
        <Flex
          maxW="md"
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          shadow="lg"
          rounded="lg"
          overflow="hidden"
        >
          <Box w={1 / 3} minW='120px'>
            <Image src={obj.image_url} />
          </Box>

          <Box
            w={2 / 3}
            p={{
              base: 4,
              md: 4,
            }}
          >
            <chakra.h1
              fontSize="2xl"
              fontWeight="bold"
              color="gray.800"
              _dark={{
                color: "white",
              }}
            >
              {obj.brand}
            </chakra.h1>

            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              {obj.name}
            </chakra.p>

            <HStack spacing={1} display="flex" alignItems="center" mt={2}>
              {DarkStarArr}
            </HStack>

            <Flex mt={3} alignItems="center" justifyContent="space-between">
              <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                $220
              </chakra.h1>
              <chakra.button
                px={2}
                py={1}
                onClick={handleRemove}
                bg="white"
                fontSize=".9rem"
                color="gray.900"
                fontWeight="bold"
                rounded="lg"
                textTransform="uppercase"
                _hover={{
                  bg: "red.200",
                }}
                _active={{
                  bg: "red.500",
                }}
              >
                Remove
              </chakra.button>
             
            </Flex>
          </Box>
        </Flex>
    </Box>
  )
}

export default Unit;


function DarkStar(){
    return(
        <StarIcon
        color="gray.700"
        _dark={{
          color: "gray.300",
        }}
        />
    )
}

function LightStar(){
    return(
        <StarIcon color="gray.500" />
    )
}