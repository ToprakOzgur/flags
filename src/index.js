import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './context/darkMode/darkModeContext';
import { CountriesContextProvider } from './context/countries/countriesContext';

import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CountriesContextProvider>
      <DarkModeContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DarkModeContextProvider>
    </CountriesContextProvider>
  </React.StrictMode>
);

