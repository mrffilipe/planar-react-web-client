import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "./hooks/useAuthContext";

import SideMenu from "./components/SideMenu";
import HeaderMenu from "./components/HeaderMenu";

const App = () => {
  const { authenticated } = useAuthContext();

  return (
    authenticated ?
      <>
        <HeaderMenu />
        <SideMenu />
        <main>
          <Outlet />
        </main>
      </> :
      <Navigate replace to="/sign-in" />
  );
};

export default App;