import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Home} from './components/Home/Home';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
);