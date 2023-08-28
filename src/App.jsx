import { Navigate, Outlet } from "react-router-dom";

import useAuthContext from "./hooks/useAuthContext";

import NavMenu from "./components/NavMenu";
import Header from "./components/Header";

const App = () => {
  const { authenticated } = useAuthContext();

  return (
    authenticated ?
      <>
        <NavMenu />
        <div id="content-container">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </> :
      <Navigate replace to="/sign-in" />
  );
};

export default App;