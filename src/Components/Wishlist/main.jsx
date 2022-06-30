import React from "react";
import { Box, Center, Flex, Grid, Spinner, Text } from "@chakra-ui/react";
import Unit from "./unit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainWishListProductsSuccess } from "../../Redux/WishList/actions";

function Main() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.wishList);
  const load = state.isLoading;
  const error = state.isError;
  // console.log(state.wishListArr)
  const arr = state.wishListArr.map((item) => {
    return <Unit key={item.id} obj={item} />;
  });

  useEffect(() => {
    dispatch(mainWishListProductsSuccess());
  }, []);

  return (
    <Box>
      <Text textAlign="center" fontSize="2rem" fontWeight="500" my="40px">
        WishList
      </Text>
      <Center>
        {load && <Spinner mb='50px' size="xl" color="red.500" />}
      </Center>
      <Center>
        {error && <Text fontSize='1.2rem '>Error in loading wishlist</Text>}
      </Center>
      <Grid
        display={{base:'flex',md:'flex',lg:'grid'}}
        flexDirection={{base:'column'}}
        alignItems={{base:'flex-start',md:'center'}}
        gridTemplateColumns="repeat(2,1fr)"
        gap="60px"
        bg={{
            base:'#edf3f8',
          
        }}
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
      >
        {arr}
      </Grid>
    </Box>
  );
}

export default Main;
