import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import UserAccount from "./pages/UserAccount";
import User from "./pages/User";
import SolarEnergyBudgetForm from "./pages/SolarEnergyBudgetForm";
import SignIn from "./pages/SignIn";

const Router = createBrowserRouter([
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

export default Router;