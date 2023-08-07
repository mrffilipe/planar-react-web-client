import styles from "./styles.module.css";

import { useState } from "react";
import { Edit } from "@mui/icons-material";

import Button from "../../components/Button";
import { SubmitInput, TextInput } from "../../components/Inputs";

const User = () => {
    const [change, setChange] = useState(true);

    return (
        <div className={styles.user_container}>
            <div>
                <h2>Usuário</h2>
                <Button title="Alterar" icon={Edit} />
            </div>
            <section className={styles.user_section}>
                <form className={styles.form}>
                    <fieldset>
                        <legend>Informações do usuário</legend>
                        <TextInput label="Nome" required />
                        <TextInput label="Sobrenome" required />
                        <TextInput label="Email" required />
                    </fieldset>
                    {
                        change &&
                        <SubmitInput value="Atualizar" />
                    }
                </form>
            </section>
        </div >
    );
}

export default User;