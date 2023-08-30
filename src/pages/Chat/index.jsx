import styles from "./styles.module.css";

import { PersonOutline } from "@mui/icons-material";

import ChatListItem from "./ChatListItem";
import TextBox from "./TextBox";

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
                <div className={styles.main}>
                    <div className={styles.user}>
                        <div className={styles.profile}>
                            <PersonOutline />
                        </div>
                        <h3>Usuário</h3>
                    </div>
                    <div className={styles.talk}>
                        <ul>
                            <li>Mensagem 1</li>
                            <li>Mensagem 1</li>
                            <li>Mensagem 1</li>
                            <li>Mensagem 1</li>
                        </ul>
                    </div>
                    <TextBox />
                </div>
            </section>
        </div>
    );
}

export default Chat;