import styles from "./styles.module.css";

import { ArrowBackOutlined } from "@mui/icons-material";
import LinkButton from "../../components/LinkButton";

const NewUser = () => {
    return (
        <div className={styles.new_user_container}>
            <section className={styles.new_user_section}>
                <div>
                    <h2>Novo usuário</h2>
                    <LinkButton
                        title="Voltar"
                        icon={ArrowBackOutlined}
                        to="/user-account"
                    />
                </div>
            </section>
        </div>
    );
}

export default NewUser;