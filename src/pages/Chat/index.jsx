import styles from "./styles.module.css";

import { PersonOutline, DoneAllOutlined } from "@mui/icons-material";

import ChatListItem from "./ChatListItem";
import TextBox from "./TextBox";

const Chat = () => {
    return (
        <div className={styles.chat_container}>
            <section className={styles.chat_section}>
                <div className={styles.side_panel}>
                    <ul>
                        <ChatListItem selected />
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
                            <li>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus sapien, consectetur faucibus nibh eget, viverra tempor odio. Donec ac consequat massa</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Etiam quis dignissim tortor. Sed tristique odio ac consectetur egestas. Aenean pellentesque lectus sit amet magna aliquet, a pharetra nibh scelerisque. Morbi quis commodo elit, sit amet porttitor lorem. Phasellus finibus quis ante et tempor. Donec eget quam laoreet augue</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Praesent velit magna, luctus ac arcu in, placerat vestibulum erat.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span> Pellentesque eget ipsum nec felis cursus imperdiet.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Ok!</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus sapien, consectetur faucibus nibh eget, viverra tempor odio. Donec ac consequat massa</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Etiam quis dignissim tortor. Sed tristique odio ac consectetur egestas. Aenean pellentesque lectus sit amet magna aliquet, a pharetra nibh scelerisque. Morbi quis commodo elit, sit amet porttitor lorem. Phasellus finibus quis ante et tempor. Donec eget quam laoreet augue</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Praesent velit magna, luctus ac arcu in, placerat vestibulum erat.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span> Pellentesque eget ipsum nec felis cursus imperdiet.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Ok!</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus sapien, consectetur faucibus nibh eget, viverra tempor odio. Donec ac consequat massa</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Etiam quis dignissim tortor. Sed tristique odio ac consectetur egestas. Aenean pellentesque lectus sit amet magna aliquet, a pharetra nibh scelerisque. Morbi quis commodo elit, sit amet porttitor lorem. Phasellus finibus quis ante et tempor. Donec eget quam laoreet augue</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Praesent velit magna, luctus ac arcu in, placerat vestibulum erat.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span> Pellentesque eget ipsum nec felis cursus imperdiet.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Ok!</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus sapien, consectetur faucibus nibh eget, viverra tempor odio. Donec ac consequat massa</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Etiam quis dignissim tortor. Sed tristique odio ac consectetur egestas. Aenean pellentesque lectus sit amet magna aliquet, a pharetra nibh scelerisque. Morbi quis commodo elit, sit amet porttitor lorem. Phasellus finibus quis ante et tempor. Donec eget quam laoreet augue</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li className={styles.contact}>
                                <div>
                                    <span>Praesent velit magna, luctus ac arcu in, placerat vestibulum erat.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span> Pellentesque eget ipsum nec felis cursus imperdiet.</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span>Ok!</span>
                                    <div>
                                        <h4>16:55</h4>
                                        <DoneAllOutlined />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <TextBox />
                </div>
            </section>
        </div>
    );
}

export default Chat;