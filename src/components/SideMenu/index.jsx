import styles from "./styles.module.css";

import { FlightTakeoffOutlined } from "@mui/icons-material";
import { MenuOutlined } from "@mui/icons-material";
import { DashboardOutlined } from "@mui/icons-material";
import { AssignmentOutlined } from "@mui/icons-material";
import { SolarPowerOutlined } from "@mui/icons-material";
import { AdminPanelSettingsOutlined } from "@mui/icons-material";

import ListItem from "./ListItem";

const SideMenu = () => {
    return (
        <nav>
            <div className={styles.menu_header}>
                <div className={styles.logo}>
                    <FlightTakeoffOutlined className={styles.icon} />
                    <span className={styles.title}>Planar</span>
                </div>
                <MenuOutlined className={styles.menu_icon} />

            </div>
            <ul className={styles.menu_options}>
                <ListItem
                    title="Dashboard"
                    to="/"
                    icon={DashboardOutlined}
                />
                <ListItem
                    title="Atividades"
                    to="/activity"
                    icon={AssignmentOutlined}
                />
                <ListItem
                    title="Energia solar"
                    to="/solar-energy"
                    icon={SolarPowerOutlined}
                />
                <ListItem
                    title="Contas de usuário"
                    to="/user-account"
                    icon={AdminPanelSettingsOutlined}
                />
            </ul>
        </nav>
    );
}

export default SideMenu;