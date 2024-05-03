import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStateProvider from './context';
import FavouriteProvider from './Pages/favourites/Context'; // Import the correct provider component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStateProvider>
        {/* <FavouriteProvider> Wrap App with FavouriteProvider */}
          <App />
        {/* </FavouriteProvider> */}
      </GlobalStateProvider>
    </React.StrictMode>
  </BrowserRouter>
);
