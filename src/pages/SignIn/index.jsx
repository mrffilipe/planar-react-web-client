import styles from "./styles.module.css";

import { SubmitInput, TextInput } from "../../components/Inputs";

const SignIn = () => {
    return (
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
        </div>
    );
}

export default SignIn;