import styles from "./styles.module.css";

const FormLabel = ({ children, title }) => {
    return (
        <label className={styles.label}>
            <div>
                {children}
                <span>{title || FormLabel.name}</span>
            </div>
        </label>
    );
}

export default FormLabel;