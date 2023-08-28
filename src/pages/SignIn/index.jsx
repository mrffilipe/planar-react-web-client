import styles from "./styles.module.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import useAuthContext from "../../hooks/useAuthContext";

import { SubmitInput, TextInput } from "../../components/Inputs";

const SignIn = () => {
    const { authenticated, setAuth } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email == "" || password == "") {
            throw new Error("Email or password invalid!");
        }

        (async () => {
            try {
                const response = await axios.post(
                    "https://localhost:7200/api/authentication/sign-in",
                    {
                        userName: "string",
                        password: "Teste@123"
                    }
                );

                if (response.status !== 200) {
                    setEmail("");
                    setPassword("");

                    throw new Error();
                }

                setAuth(response.data); // adicionar authenticated na api
            } catch (err) {
                console.log(err);
            }
        })();
    };

    return (
        !authenticated ?
            <div className={styles.sign_in_container}>
                <section className={styles.sign_in_section}>
                    <div className={styles.form_container}>
                        <h2>Login</h2>
                        <h3>Para prosseguir, realize primeiro o login!</h3>
                        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                            <TextInput label="Email" type="text" required value={email} onChange={setEmail} />
                            <TextInput label="Senha" type="password" required value={password} onChange={setPassword} />
                            <SubmitInput value="Entrar" />
                        </form>
                    </div>
                    <div className={styles.banner} />
                </section>
            </div> :
            <Navigate replace to="/" />
    );
}

export default SignIn;