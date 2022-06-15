import { Box } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import ProdutsPage from './Pages/ProdutsPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Box  margin='auto' w='1200px' h='140px' className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProdutsPage/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
