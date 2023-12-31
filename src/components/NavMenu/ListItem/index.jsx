import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

import { Icon } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";

const ListItem = ({ title, to, icon }) => {
    return (
        <li>
            <NavLink
                to={to || "/"}
                className={({ isActive }) => isActive ? styles.active : ""}>
                <Icon component={icon || ErrorOutline} className={styles.icon} />
                <span>{title || ListItem.name}</span>
            </NavLink>
        </li>
    );
}

export default ListItem;