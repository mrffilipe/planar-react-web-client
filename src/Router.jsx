import { createBrowserRouter } from "react-router-dom";

import App from './App';
import Dashboard from "./pages/Dashboard";
import Activity from "./pages/Activity";
import UserAccount from "./pages/UserAccount";
import User from "./pages/User";
import SolarEnergyBudgetForm from "./pages/SolarEnergyBudgetForm";
import SignIn from "./pages/SignIn";
import Chat from "./pages/Chat";

const Router = createBrowserRouter([
    {
        element: <App />,
        children: [
            { path: "/", element: <Dashboard /> },
            { path: "/activity", element: <Activity /> },
            { path: "/user-account", element: <UserAccount /> },
            { path: "/user-account/user/:userId", element: <User /> },
            { path: "/solar-energy/budget-form", element: <SolarEnergyBudgetForm /> },
            { path: "/chat", element: <Chat /> }
        ]
    },
    { path: "/sign-in", element: <SignIn /> }
]);

export default Router;