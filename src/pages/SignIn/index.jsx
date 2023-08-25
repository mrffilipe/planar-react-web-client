import styles from "./styles.module.css";

import { useState } from "react";
import { Navigate } from "react-router-dom";

import useAuthContext from "../../hooks/useAuthContext";

import { SubmitInput, TextInput } from "../../components/Inputs";

const SignIn = () => {
    const { authenticated, setAuth } = useAuthContext();

    const [email, setEmail] = useState("mrffilipe@outlook.com");
    const [password, setPassword] = useState("Teste@123");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email == "" || password == "") {
            throw new Error("Email or password invalid!");
        }
        // aguarda resposta e setAuth
        setAuth({ authenticated: true });

        setEmail("");
        setPassword("");
    };

    return (
        !authenticated ?
            <div className={styles.sign_in_container}>
                <section className={styles.sign_in_section}>
                    <div className={styles.form_container}>
                        <h2>Login</h2>
                        <h3>Para prosseguir, realize primeiro o login!</h3>
                        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                            <TextInput label="Email" type="text" required value={email} />
                            <TextInput label="Senha" type="password" required value={password} />
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