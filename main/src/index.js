import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import './Index.css'
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store';
import { Provider } from 'react-redux';
import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  base:'0px',
  md: '600px',
  lg: '900px',

}
const theme = extendTheme({ breakpoints })


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
    </BrowserRouter>
  </ChakraProvider>
  
);

