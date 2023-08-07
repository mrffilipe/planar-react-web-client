import styles from "./styles.module.css";

const TextInput = ({ label, type, required }) => {
    return (
        <div className={styles.form_group}>
            <label>
                <input type={type || "text"} required={required && required} />
                <span>{label || TextInput.name}</span>
            </label>
        </div>
    );
}

export default TextInput;