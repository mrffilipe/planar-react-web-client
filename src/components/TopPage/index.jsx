import styles from "./styles.module.css";

import { ArrowBackOutlined } from "@mui/icons-material";
import SimpleLinkButton from "../SimpleLinkButton";

const TopPage = ({ children, title, goBack }) => {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                {
                    goBack &&
                    <SimpleLinkButton
                        to={goBack}
                        icon={ArrowBackOutlined}
                    />
                }
                <h2>{title || TopPage.name}</h2>
            </div>
            <div className={styles.options}>
                {children}
            </div>
        </div>
    );
}

export default TopPage;