import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react' ;
import {theme} from './resources/theme/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
<ChakraProvider theme={theme}>
  <React.StrictMode>
      <App />
    </React.StrictMode>
</ChakraProvider>
)
