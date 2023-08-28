import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";

import Router from "./Router";
import AuthContextProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="container">
      <AuthContextProvider>
        <RouterProvider router={Router} />
      </AuthContextProvider>
    </div>
  </React.StrictMode>,
)