import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import axios from "axios";


axios.defaults.baseURL = "https://instagram-back-sooty.vercel.app" || "http://localhost:3002"

// https://instagram-back-sooty.vercel.app/

// https://instagram-frontend-three.vercel.app/



// process.env.REACT_APP || 

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
