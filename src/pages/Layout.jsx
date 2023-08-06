import SideMenu from "../components/SideMenu";
import HeaderMenu from "../components/HeaderMenu";

import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div id="container">
            <HeaderMenu />
            <SideMenu />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;