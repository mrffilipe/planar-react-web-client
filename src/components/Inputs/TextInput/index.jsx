import styles from "./styles.module.css";

const TextInput = ({ label, type, required, value, onChange }) => {
    return (
        <div className={styles.form_group}>
            <label>
                <input
                    type={type || "text"}
                    required={required && required}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <span>{label || TextInput.name}</span>
            </label>
        </div>
    );
}

export default TextInput;