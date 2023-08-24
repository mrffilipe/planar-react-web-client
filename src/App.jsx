import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthContextProvider from "./contexts/AuthContext";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import UserAccount from "./pages/UserAccount";
import User from "./pages/User";
import SolarEnergyBudgetForm from "./pages/SolarEnergyBudgetForm";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/activity", element: <Activity /> },
      { path: "/user-account", element: <UserAccount /> },
      { path: "/user-account/user", element: <User /> },
      { path: "/solar-energy/budget-form", element: <SolarEnergyBudgetForm /> }
    ]
  }
]);

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;