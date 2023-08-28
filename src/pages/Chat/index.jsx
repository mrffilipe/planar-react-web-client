import styles from "./styles.module.css";

import { PersonOutline, DoneAllOutlined } from "@mui/icons-material";

const Chat = () => {
    return (
        <div className={styles.chat_container}>
            <section className={styles.chat_section}>
                <div className={styles.side_panel}>
                    <ul>
                        <li>
                            <div className={styles.profile}>
                                <PersonOutline className={styles.icon} />
                            </div>
                            <div className={styles.conversation_summary}>
                                <div>
                                    <h3>Usuário</h3>
                                    <h5>16:55</h5>
                                </div>
                                <div className={styles.message_details}>
                                    <DoneAllOutlined />
                                    <span>Este é o resumo da mensagem...</span>
                                    <div className={styles.unread}>
                                        <span>!</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div style={styles.main}>
                    <div className={styles.user}>
                        <div className={styles.profile}>
                            <PersonOutline />
                        </div>
                        <h2>Usuário</h2>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Chat;