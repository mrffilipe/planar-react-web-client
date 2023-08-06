import Button from "../../components/Button";
import styles from "./styles.module.css";

import { Edit } from "@mui/icons-material";

const User = () => {
    return (
        <div className={styles.user_container}>
            <section className={styles.user_section}>
                <div>
                    <h2>Usuário</h2>
                    <Button title="Alterar" icon={Edit} />
                </div>
            </section>
        </div>
    );
}

export default User;