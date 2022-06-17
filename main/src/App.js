import { Box } from '@chakra-ui/react'
import HomePage from './Pages/HomePage';
import ProdutsPage from './Pages/ProdutsPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Description from './Pages/Description';
import CartPage from './Pages/CartPage';
import Payment from './Pages/Payment';
import Login from './Pages/Signup';
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
        <Route path='/products:id' element={<Description/>}/>
        <Route path='/cart' element={<CartPage/>}/>   
        <Route path='/payment' element={<Payment/>}/>   
        <Route path='/signup' element={<Login/>}/>   
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
