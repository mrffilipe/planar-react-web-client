import styles from "./styles.module.css";

import { Icon } from "@mui/material";

const TextButton = ({ title, icon, btnStyle, iconStyle, onClick }) => {
    return (
        <button className={`${styles.btn} ${btnStyle}`} onClick={onClick}>
            {
                icon &&
                <Icon component={icon} className={`${styles.icon} ${iconStyle}`} />
            }
            <span>{title || TextButton.name}</span>
        </button>
    );
}

export default TextButton;