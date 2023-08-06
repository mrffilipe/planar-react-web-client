import styles from "./styles.module.css";

import IconLink from "../../components/IconLink";

import { Visibility, PersonAddAltRounded } from "@mui/icons-material";

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
                                <IconLink
                                    icon={Visibility}
                                    to="./user"
                                    iconStyle={styles.icon_style}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Jonatã</td>
                            <td>jonata@outlook.com</td>
                            <td>Desenvolvedor</td>
                            <td>Frontend</td>
                            <td>Ativo</td>
                            <td>
                                <IconLink
                                    icon={Visibility}
                                    to="./user"
                                    iconStyle={styles.icon_style}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Marcos</td>
                            <td>marcos@outlook.com</td>
                            <td>Designer</td>
                            <td>UX</td>
                            <td>Ativo</td>
                            <td>
                                <IconLink
                                    icon={Visibility}
                                    to="./user"
                                    iconStyle={styles.icon_style}
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