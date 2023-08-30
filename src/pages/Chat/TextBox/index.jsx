import styles from "./styles.module.css";

import { useState } from "react";
import { ArrowUpwardOutlined } from "@mui/icons-material";

const TextBox = () => {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className={styles.text_box}>
            <div>
                <textarea placeholder="Mensagem" rows={3} value={text} onChange={(e) => handleTextChange(e)} />
            </div>
            {
                text &&
                <button className={styles.send_btn}>
                    <ArrowUpwardOutlined />
                </button>
            }
        </div>
    );
}

export default TextBox;