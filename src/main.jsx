import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";

import App from './App';
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import UserAccount from "./pages/UserAccount";
import User from "./pages/User";
import SolarEnergyBudgetForm from "./pages/SolarEnergyBudgetForm";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/activity", element: <Activity /> },
      { path: "/user-account", element: <UserAccount /> },
      { path: "/user-account/user", element: <User /> },
      { path: "/solar-energy/budget-form", element: <SolarEnergyBudgetForm /> }
    ]
  },
  { path: "/sign-in", element: <SignIn /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>,
)