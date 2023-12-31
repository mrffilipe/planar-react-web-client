import styles from "./styles.module.css";

import { Icon } from "@mui/material";

const Button = ({ icon, btnStyle, iconStyle }) => {
    return (
        <button className={`${styles.btn} ${btnStyle}`}>
            {
                icon &&
                <Icon component={icon} className={`${styles.icon} ${iconStyle}`} />
            }
        </button>
    );
}

export default Button;