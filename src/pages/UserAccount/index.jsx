import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import axios from "axios";

import { Visibility, PersonAddAltRounded } from "@mui/icons-material";

import IconLink from "../../components/IconLink";
import TextButton from "../../components/TextButton";

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
                        <IconLink
                            icon={Visibility}
                            to={`/user-account/user/${e.id}`}
                            iconStyle={styles.icon_style}
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
                <div>
                    <h2>Usuários</h2>
                    <TextButton title="Novo" icon={PersonAddAltRounded} />
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
                        {users}
                    </tbody>
                </table>
            </section>
        </div>
    );
}

export default UserAccount;