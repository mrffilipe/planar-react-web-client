import styles from "./styles.module.css";

import NotificationIcon from "../../assets/icons/notification.svg";

const HeaderMenu = () => {
    return (
        <header>
            <span className={styles.tab_title}>Dashboard</span>
            <div className={styles.account_details}>
                <img className={styles.notification} src={NotificationIcon} alt="Notification" />
                <div className={styles.user_details}>
                    <div className={styles.profile_picture}></div>
                    <div className={styles.profile}>
                        <h1>Filipe</h1>
                        <span>Desenvolvedor</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderMenu;