import styles from "./styles.module.css";

import { Navigate } from "react-router-dom";

import useAuthContext from "../../hooks/useAuthContext";

import { SubmitInput, TextInput } from "../../components/Inputs";

const SignIn = () => {
    const { authenticated } = useAuthContext();

    return (
        <>
            {
                !authenticated ?
                    <div className={styles.sign_in_container}>
                        <section className={styles.sign_in_section}>
                            <div className={styles.form_container}>
                                <h2>Login</h2>
                                <h3>Para prosseguir, realize primeiro o login!</h3>
                                <form className={styles.form}>
                                    <TextInput label="Email" type="text" required />
                                    <TextInput label="Senha" type="password" required />
                                    <SubmitInput value="Entrar" />
                                </form>
                            </div>
                            <div className={styles.banner} />
                        </section>
                    </div> :
                    <Navigate replace to="/" />
            }
        </>
    );
}

export default SignIn;