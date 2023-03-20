import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config()


axios.defaults.baseURL = process.env.REACT_APP || "http://localhost:3002"

// process.env.REACT_APP ||

// https://instagram-back-sooty.vercel.app/

// https://instagram-frontend-three.vercel.app/



// process.env.REACT_APP_API || 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
