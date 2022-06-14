import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import { Box } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider>
    <Box margin='auto' w='1200px' h='140px'  >
      <App />
    </Box>
  </ChakraProvider>
  
);

