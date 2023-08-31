import styles from "./styles.module.css";

import { PersonOutline, DoneAllOutlined } from "@mui/icons-material";

const ChatListItem = ({ selected }) => {
    return (
        <li className={`${styles.chat_li} ${selected ? styles.selected : ""}`}>
            <div className={styles.profile}>
                <PersonOutline className={styles.icon} />
            </div>
            <div className={styles.conversation_summary}>
                <div>
                    <h3>Usuário</h3>
                    <h5>16:55</h5>
                </div>
                <div className={styles.message_details}>
                    <span>
                        <DoneAllOutlined />
                        <span>Este é o resumo da mensagem...</span>
                    </span>
                    <div className={styles.unread}>
                        <span>3</span>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ChatListItem;