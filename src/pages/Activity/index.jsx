import styles from "./styles.module.css";

import { useEffect, useState } from "react";
import axios from "axios";

import ActivityCard from "./ActivityCard";

const Activity = () => {
    const [activitiesInProgress, setActivitiesInProgress] = useState([]);
    const [activitiesFinished, setActivitiesFinished] = useState([]);

    useEffect(() => {
        try {
            const startFetching = async () => {
                const response = await axios.get("https://localhost:7280/api/activity/find-activities");

                if (response.status !== 200) {
                    throw new Error();
                }

                const activities = response.data;

                let inProgress = activities.filter(e => e.status === 0);
                let fineshed = activities.filter(e => e.status !== 0);

                inProgress = inProgress.map(e =>
                    <ActivityCard
                        id={e.id}
                        title={e.relationship.type}
                        status={e.status}
                        updatedOn={e.updatedOn}
                    />
                );
                setActivitiesInProgress(inProgress);

                fineshed = fineshed.map(e =>
                    <ActivityCard
                        id={e.id}
                        title={e.relationship.type}
                        status={e.status}
                        updatedOn={e.updatedOn}
                    />
                );
                setActivitiesFinished(fineshed);
            };

            startFetching();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <div className={styles.activity_container}>
            <section className={styles.activity_section}>
                <div>
                    <h2>{`Em progesso (${activitiesInProgress.length || 0})`}</h2>
                    <span />
                </div>
                <ul className={styles.activities_list}>
                    {activitiesInProgress}
                </ul>
            </section>
            <section className={styles.activity_section}>
                <div>
                    <h2>{`Finalizadas (${activitiesFinished.length || 0})`}</h2>
                    <span />
                </div>
                <ul className={styles.activities_list}>
                    {activitiesFinished}
                </ul>
            </section>
        </div>
    );
}

export default Activity;