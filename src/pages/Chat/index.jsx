import styles from "./styles.module.css";

import { PersonOutline } from "@mui/icons-material";
import ChatListItem from "./ChatListItem";

const Chat = () => {
    return (
        <div className={styles.chat_container}>
            <section className={styles.chat_section}>
                <div className={styles.side_panel}>
                    <ul>
                        <ChatListItem />
                        <ChatListItem />
                        <ChatListItem />
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
    );
}

export default Chat;