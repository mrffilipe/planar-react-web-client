import styles from "./styles.module.css";

import { useState } from "react";
import axios from "axios";

import { TextInput, SubmitInput } from "../../components/Inputs";
import TopPage from "../../components/TopPage";

const NewUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        (async () => {
            try {
                const response = await axios.post(
                    "https://localhost:7104/api/useraccount/register-user",
                    {
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email,
                        "claims": [
                            {
                                "userClaim": {
                                    "type": "string",
                                    "value": "string"
                                }
                            }
                        ]
                    }
                );

                if (response.status !== 200) {
                    throw new Error();
                }
            } catch (err) {
                console.log(err);
            }
        })();
    };

    return (
        <section className={styles.new_user_section}>
            <TopPage title="Novo usuário" goBack="/user-account" />
            <div className={styles.form_container}>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <div className={styles.full_name}>
                        <TextInput
                            label="Nome"
                            value={firstName}
                            onChange={setFirstName}
                            required
                        />
                        <TextInput
                            label="Sobrenome"
                            value={lastName}
                            onChange={setLastName}
                            required
                        />
                    </div>
                    <TextInput
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        required
                    />
                    <SubmitInput value="Registrar" />
                </form>
            </div>
        </section>
    );
}

export default NewUser;