import styles from "./styles.module.css";

import { Icon } from "@mui/material";

const IconButton = ({ icon, btnStyle, iconStyle }) => {
    return (
        <button className={`${styles.button} ${btnStyle}`}>
            <Icon
                component={icon}
                className={`${styles.icon} ${iconStyle}`}
            />
        </button>
    );
}

export default IconButton;