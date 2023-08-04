import styles from "./styles.module.css";

import { NavLink } from "react-router-dom";

const ListItem = ({ title, to, icon }) => {
    return (
        <li>
            <NavLink
                to={to || "/"}
                className={({ isActive }) => isActive ? styles.active : ""}>
                <img src={icon} alt="" />
                <span>{title || ListItem.name}</span>
            </NavLink>
        </li>
    );
}

export default ListItem;