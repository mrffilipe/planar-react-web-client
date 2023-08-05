import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Activity = () => {
    return (
        <div className={styles.activity_container}>
            <section className={styles.activity_section}>
                <div>
                    <h2>Em progesso</h2>
                    <span />
                </div>
                <ul className={styles.activities_list}>
                    <li>
                        <Link>
                            <h3>Nome da atividade</h3>
                            <h4>Status</h4>
                            <h5>Última atualização</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <h3>Nome da atividade</h3>
                            <h4>Status</h4>
                            <h5>Última atualização</h5>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <h3>Nome da atividade</h3>
                            <h4>Status</h4>
                            <h5>Última atualização</h5>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Activity;