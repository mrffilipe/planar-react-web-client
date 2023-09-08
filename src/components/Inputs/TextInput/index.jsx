import styles from "./styles.module.css";

const TextInput = ({ label, type, required, value, onChange }) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value)
        }
    };

    return (
        <div className={styles.form_group}>
            <label>
                <input
                    type={type || "text"}
                    required={required && required}
                    value={value || ""}
                    onChange={handleChange}
                />
                <span>{label || TextInput.name}</span>
            </label>
        </div>
    );
}

export default TextInput;