import styles from "./styles.module.css";

import { Edit } from "@mui/icons-material";

import Button from "../../components/Button";
import { useState } from "react";

const User = () => {
    const [change, setChange] = useState(true);

    return (
        <div className={styles.user_container}>
            <section className={styles.user_section}>
                <div>
                    <h2>Usuário</h2>
                    <Button title="Alterar" icon={Edit} />
                </div>
                <form className={styles.form}>
                    <label>
                        <input type="text" required />
                        <span>Nome</span>
                    </label>
                    <label>
                        <input type="text" required />
                        <span>Sobrenome</span>
                    </label>
                    <label>
                        <input type="text" required />
                        <span>Email</span>
                    </label>
                    {
                        change &&
                        <input type="submit" value="Atualizar" />
                    }
                </form>
            </section>
        </div>
    );
}

export default User;