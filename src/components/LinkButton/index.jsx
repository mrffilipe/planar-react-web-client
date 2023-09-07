import styles from "./styles.module.css";

import { Link } from "react-router-dom";

import { Icon } from "@mui/material";

const LinkButton = ({ title, to, icon, linkStyle, iconStyle }) => {
    return (
        <Link to={to || "/"} className={`${styles.link} ${linkStyle}`}>
            <Icon
                component={icon}
                className={`${styles.icon} ${iconStyle}`}
            />
            {
                title &&
                <span>{title}</span>
            }
        </Link>
    );
}

export default LinkButton;