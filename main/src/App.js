import { Box } from '@chakra-ui/react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Carousel from './Components/Hero/HeroImageSlider';

function App() {
  return (
    <Box className="App">
     {/* <Navbar/> */}
     {/* <Footer/> */}
     <Hero/>
    </Box>
  );
}

export default App;
