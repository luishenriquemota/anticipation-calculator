import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from "./styles/index"
import App from './App';
import { CalculateProvider } from './providers/Calculate';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CalculateProvider>
      <GlobalStyle/>
      <App/>
    </CalculateProvider>
  </React.StrictMode>
);
