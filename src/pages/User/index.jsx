import styles from "./styles.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Edit } from "@mui/icons-material";

import TextButton from "../../components/TextButton";
import { SubmitInput, TextInput } from "../../components/Inputs";

const User = () => {
    const [change, setChange] = useState(true);
    const [user, setUser] = useState({});

    const { userId } = useParams();

    useEffect(() => {
        const startFetching = async () => {
            const response = await axios.get(`https://localhost:7104/api/useraccount/find-user-by-id?id=${userId}`);

            if (response.status !== 200) {
                throw new Error();
            }

            setUser(response.data);
        };

        startFetching();
    }, []);

    return (
        <div className={styles.user_container}>
            <div>
                <h2>Usuário</h2>
                <TextButton title="Alterar" icon={Edit} />
            </div>
            <section className={styles.user_section}>
                <form className={styles.form}>
                    <fieldset>
                        <legend>Informações do usuário</legend>
                        <TextInput label="Nome" value={user.firstName} required />
                        <TextInput label="Sobrenome" value={user.lastName} required />
                        <TextInput label="Email" value={user.email} required />
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