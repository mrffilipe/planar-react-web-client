import styles from "./styles.module.css";

import { Link } from "react-router-dom";

const ActivityCard = ({ to, id, title, status, updatedOn }) => {
    return (
        <li id={id} className={styles.list_item}>
            <Link to={to || "/"}>
                <h3>{title || ActivityCard.name}</h3>
                <h4>{status || "Not defined"}</h4>
                <div>
                    <h5>Última atualização:</h5>
                    <h6>{updatedOn || "-/-/-/"}</h6>
                </div>
            </Link>
        </li>
    );
}

export default ActivityCard;