import styles from "./styles.module.css";

import useAuthContext from "../../hooks/useAuthContext";

import ListItem from "./ListItem";

import {
    FlightTakeoffOutlined,
    MenuOutlined,
    DashboardOutlined,
    AssignmentOutlined,
    SolarPowerOutlined,
    AdminPanelSettingsOutlined,
    ChatOutlined
} from "@mui/icons-material";
import Button from "../Button";

const NavMenu = () => {
    const { logout } = useAuthContext();

    return (
        <nav>
            <div className={styles.menu_header}>
                <div className={styles.logo}>
                    <FlightTakeoffOutlined className={styles.icon} />
                    <span className={styles.title}>Planar</span>
                </div>
                <Button
                    icon={MenuOutlined}
                    btnStyle={styles.btn_menu}
                    iconStyle={styles.icon_menu}
                />
                <button onClick={logout}>Clique aqui</button>
            </div>
            <ul className={styles.menu_options}>
                <ListItem
                    title="Dashboard"
                    to="/"
                    icon={DashboardOutlined}
                />
                <ListItem
                    title="Chat"
                    to="/chat"
                    icon={ChatOutlined}
                />
                <ListItem
                    title="Atividades"
                    to="/activity"
                    icon={AssignmentOutlined}
                />
                <ListItem
                    title="Energia solar"
                    to="/solar-energy/budget-form"
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

export default NavMenu;