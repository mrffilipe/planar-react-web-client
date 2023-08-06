import styles from "./styles.module.css";

import IconButton from "../../components/IconButton";
import { Edit, PersonAddAltRounded } from "@mui/icons-material";

const UserAccount = () => {
    return (
        <div className={styles.user_account_container}>
            <section className={styles.user_account_session}>
                <div>
                    <h2>Usuários</h2>
                    <button className={styles.icon_btn}>
                        <PersonAddAltRounded className={styles.icon} />
                        <span>Novo</span>
                    </button>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Função</th>
                            <th>Tipo</th>
                            <th>Status</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Filipe</td>
                            <td>mrffilipe@outlook.com</td>
                            <td>Desenvolvedor</td>
                            <td>Backend</td>
                            <td>Ativo</td>
                            <td>
                                <IconButton
                                    icon={Edit}
                                    btnStyle={styles.btnStyle}
                                    iconStyle={styles.iconStyle}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Jonatã</td>
                            <td>Jonatã@outlook.com</td>
                            <td>Desenvolvedor</td>
                            <td>Frontend</td>
                            <td>Ativo</td>
                            <td>
                                <IconButton
                                    icon={Edit}
                                    btnStyle={styles.btnStyle}
                                    iconStyle={styles.iconStyle}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Marcos</td>
                            <td>Marcos@outlook.com</td>
                            <td>Designer</td>
                            <td>UX</td>
                            <td>Ativo</td>
                            <td>
                                <IconButton
                                    icon={Edit}
                                    btnStyle={styles.btnStyle}
                                    iconStyle={styles.iconStyle}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default UserAccount;