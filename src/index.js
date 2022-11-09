import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import BasketContextProvider from "./context/BasketContext";
import PhotoshootContextProvider from "./context/PhotoshootContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <PhotoshootContextProvider>
        <BasketContextProvider>
            <App />
        </BasketContextProvider>
    </PhotoshootContextProvider>

</BrowserRouter>

);


