import styles from "./styles.module.css";

import ActivityCard from "./ActivityCard";

const Activity = () => {
    return (
        <div className={styles.activity_container}>
            <section className={styles.activity_section}>
                <div>
                    <h2>Em progesso</h2>
                    <span />
                </div>
                <ul className={styles.activities_list}>
                    <ActivityCard
                        title={"Título da atividade"}
                        status={"Status"}
                    />
                </ul>
            </section>
            <section className={styles.activity_section}>
                <div>
                    <h2>Finalizadas</h2>
                    <span />
                </div>
                <ul className={styles.activities_list}>
                    <ActivityCard
                        title={"Título da atividade"}
                        status={"Status"}
                    />
                </ul>
            </section>
        </div>
    );
}

export default Activity;