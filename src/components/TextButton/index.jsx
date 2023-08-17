import styles from "./styles.module.css";

import { Icon } from "@mui/material";

const TextButton = ({ title, icon, btnStyle, iconStyle }) => {
    return (
        <button className={`${styles.btn} ${btnStyle}`}>
            {
                icon &&
                <Icon component={icon} className={`${styles.icon} ${iconStyle}`} />
            }
            <span>{title || TextButton.name}</span>
        </button>
    );
}

export default TextButton;