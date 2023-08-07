import styles from "./styles.module.css";

const FormLabel = ({ children, title }) => {
    return (
        <label className={styles.label}>
            {children}
            <span>{title || FormLabel.name}</span>
        </label>
    );
}

export default FormLabel;