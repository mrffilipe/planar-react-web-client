import styles from "./styles.module.css";

import NotificationIcon from "../../assets/icons/notification.svg";
import { useState } from "react";

const HeaderMenu = () => {
    const [showNotification, setShowNotification] = useState(false);

    return (
        <header>
            <span className={styles.tab_title}>Dashboard</span>
            <div className={styles.account_details}>
                {
                    showNotification ? (
                        <div className={styles.modal_notification}>
                            <span>Notificações</span>
                            <ul className={styles.list_notifications}>
                                <li>
                                    <h2>Energia solar</h2>
                                    <p>Texto da notificação que se refere a instalação de energia solar</p>
                                    <span>Enviado há 2h</span>
                                </li>
                                <li>
                                    <h2>Mensagem recebida</h2>
                                    <p>Texto da notificação que se refere a mensagem recebida</p>
                                    <span>Enviado há 1m</span>
                                </li>
                                <li>
                                    <h2>Mensagem recebida</h2>
                                    <p>Texto da notificação que se refere a mensagem recebida</p>
                                    <span>Enviado há 7d</span>
                                </li>
                                <li>
                                    <h2>Energia solar</h2>
                                    <p>Texto da notificação que se refere a instalação de energia solar</p>
                                    <span>Enviado há 2h</span>
                                </li>
                                <li>
                                    <h2>Mensagem recebida</h2>
                                    <p>Texto da notificação que se refere a mensagem recebida</p>
                                    <span>Enviado há 1m</span>
                                </li>
                                <li>
                                    <h2>Mensagem recebida</h2>
                                    <p>Texto da notificação que se refere a mensagem recebida</p>
                                    <span>Enviado há 7d</span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <></>
                    )
                }
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