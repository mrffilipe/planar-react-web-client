import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

import LogoIcon from "../../assets/icons/logo.svg";
import MenuAltRightIcon from "../../assets/icons/menu-alt-right.svg";
import DashboardIcon from "../../assets/icons/dashboard.svg";
import TaskIcon from "../../assets/icons/task.svg";
import BriefcaseIcon from "../../assets/icons/briefcase.svg";
import UserAccountIcon from "../../assets/icons/user-account.svg";

const SideMenu = () => {
    return (
        <nav>
            <div className={styles.menu_header}>
                <div className={styles.logo}>
                    <img src={LogoIcon} alt="Logo" />
                    <span className={styles.title}>Planar</span>
                </div>
                <img src={MenuAltRightIcon} alt="Menu alt right" />
            </div>
            <ul className={styles.menu_options}>
                <li>
                    <NavLink to={"/"}>
                        <img src={DashboardIcon} alt="" />
                        <span>Dashboard</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/t1">
                        <img src={TaskIcon} alt="" />
                        <span>Atividades</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/t2">
                        <img src={BriefcaseIcon} alt="" />
                        <span>Energia solar</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/t3">
                        <img src={UserAccountIcon} alt="" />
                        <span>Contas de usuário</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/t1">
                        <img src={TaskIcon} alt="" />
                        <span>Atividades</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/t2">
                        <img src={BriefcaseIcon} alt="" />
                        <span>Energia solar</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/t3">
                        <img src={UserAccountIcon} alt="" />
                        <span>Contas de usuário</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default SideMenu;