import styles from "./styles.module.css";

import ListItem from "./ListItem";

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
                <ListItem
                    title="Dashboard"
                    to="/"
                    icon={DashboardIcon}
                />
                <ListItem
                    title="Atividades"
                    to="/activity"
                    icon={TaskIcon}
                />
                <ListItem
                    title="Energia solar"
                    to="/solar-energy"
                    icon={BriefcaseIcon}
                />
                <ListItem
                    title="Contas de usuário"
                    to="/user-account"
                    icon={UserAccountIcon}
                />
            </ul>
        </nav>
    );
}

export default SideMenu;