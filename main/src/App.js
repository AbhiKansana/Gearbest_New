import { Box } from '@chakra-ui/react'
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Collection from './Components/Collection';
import Collection2 from './Components/Collection2';

function App() {
  return (
    <Box className="App">
     <Navbar/>
     <Hero/>
     <Collection/>
     <Collection2/>
     <Footer/>
    </Box>
  );
}

export default App;
