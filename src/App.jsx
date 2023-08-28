import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "./hooks/useAuthContext";

import SideMenu from "./components/SideMenu";
import HeaderMenu from "./components/HeaderMenu";

const App = () => {
  const { authenticated } = useAuthContext();
  
  return (
    authenticated ?
      <div id="container">
        <HeaderMenu />
        <SideMenu />
        <main>
          <Outlet />
        </main>
      </div> :
      <Navigate replace to="/sign-in" />
  );
};

export default App;