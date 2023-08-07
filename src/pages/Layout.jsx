import { Outlet } from "react-router-dom";

import SideMenu from "../components/SideMenu";
import HeaderMenu from "../components/HeaderMenu";

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