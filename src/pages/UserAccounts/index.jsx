import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import axios from "axios";


import { Visibility, PersonAddAltRounded } from "@mui/icons-material";
import LinkButton from "../../components/LinkButton";
import SimpleLinkButton from "../../components/SimpleLinkButton";
import TopPage from "../../components/TopPage";

const UserAccount = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const startFetching = async () => {
            const response = await axios.get("https://localhost:7104/api/useraccount/find-all-users");

            if (response.status !== 200) {
                throw new Error();
            }

            const mapUsers = response.data.map(e =>
                <tr id={e.id}>
                    <td>{`${e.firstName} ${e.lastName}`}</td>
                    <td>{e.email}</td>
                    <td>Desenvolvedor</td>
                    <td>Backend</td>
                    <td>Ativo</td>
                    <td>
                        <SimpleLinkButton
                            icon={Visibility}
                            to={`/user-account/user/${e.id}`}
                        />
                    </td>
                </tr>
            );

            setUsers(mapUsers);
        };

        startFetching();
    }, []);

    return (
        <div className={styles.user_account_container}>
            <section className={styles.user_account_session}>
                <TopPage title="Usuários">
                    <LinkButton
                        title="Novo"
                        icon={PersonAddAltRounded}
                        to="/user-account/new-user"
                    />
                </TopPage>
                {
                    users.length ?
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
                                {users}
                            </tbody>
                        </table> :
                        <h3>Nenhum usuário registrado</h3>
                }
            </section>
        </div>
    );
}

export default UserAccount;