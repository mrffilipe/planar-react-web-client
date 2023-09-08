import styles from "./styles.module.css";

import { Link } from "react-router-dom";
import { Icon } from "@mui/material";

const SimpleLinkButton = ({ to, icon, style }) => {
    return (
        <Link to={to || "/"} className={`${styles.link} ${style}`}>
            <Icon
                component={icon}
                className={styles.icon}
            />
        </Link>
    );
}

export default SimpleLinkButton;