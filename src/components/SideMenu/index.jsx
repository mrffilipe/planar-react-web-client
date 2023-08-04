import styles from "./styles.module.css";

import ListItem from "./ListItem";

import {
    FlightTakeoffOutlined,
    MenuOutlined,
    DashboardOutlined,
    AssignmentOutlined,
    SolarPowerOutlined,
    AdminPanelSettingsOutlined
} from "@mui/icons-material";
import IconButton from "../IconButton";

const SideMenu = () => {
    return (
        <nav>
            <div className={styles.menu_header}>
                <div className={styles.logo}>
                    <FlightTakeoffOutlined className={styles.icon} />
                    <span className={styles.title}>Planar</span>
                </div>
                <IconButton
                    icon={MenuOutlined}
                    btnStyle={styles.btn_menu}
                    iconStyle={styles.icon_menu}
                />
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