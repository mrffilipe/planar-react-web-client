import styles from "./styles.module.css";

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
                    <img src={DashboardIcon} alt="" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src={TaskIcon} alt="" />
                    <span>Atividades</span>
                </li>
                <li>
                    <img src={BriefcaseIcon} alt="" />
                    <span>Energia solar</span>
                </li>
                <li>
                    <img src={UserAccountIcon} alt="" />
                    <span>Contas de usuário</span>
                </li>
                <li>
                    <img src={DashboardIcon} alt="" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src={TaskIcon} alt="" />
                    <span>Atividades</span>
                </li>
                <li>
                    <img src={BriefcaseIcon} alt="" />
                    <span>Energia solar</span>
                </li>
                <li>
                    <img src={UserAccountIcon} alt="" />
                    <span>Contas de usuário</span>
                </li>
                <li>
                    <img src={DashboardIcon} alt="" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src={TaskIcon} alt="" />
                    <span>Atividades</span>
                </li>
                <li>
                    <img src={BriefcaseIcon} alt="" />
                    <span>Energia solar</span>
                </li>
                <li>
                    <img src={UserAccountIcon} alt="" />
                    <span>Contas de usuário</span>
                </li>
                <li>
                    <img src={DashboardIcon} alt="" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src={TaskIcon} alt="" />
                    <span>Atividades</span>
                </li>
                <li>
                    <img src={BriefcaseIcon} alt="" />
                    <span>Energia solar</span>
                </li>
                <li>
                    <img src={UserAccountIcon} alt="" />
                    <span>Contas de usuário</span>
                </li>
                <li>
                    <img src={DashboardIcon} alt="" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src={TaskIcon} alt="" />
                    <span>Atividades</span>
                </li>
                <li>
                    <img src={BriefcaseIcon} alt="" />
                    <span>Energia solar</span>
                </li>
                <li>
                    <img src={UserAccountIcon} alt="" />
                    <span>Contas de usuário</span>
                </li>
                <li>
                    <img src={DashboardIcon} alt="" />
                    <span>Dashboard</span>
                </li>
                <li>
                    <img src={TaskIcon} alt="" />
                    <span>Atividades</span>
                </li>
                <li>
                    <img src={BriefcaseIcon} alt="" />
                    <span>Energia solar</span>
                </li>
                <li>
                    <img src={UserAccountIcon} alt="" />
                    <span>Contas de usuário</span>
                </li>
            </ul>
        </nav>
    );
}

export default SideMenu;