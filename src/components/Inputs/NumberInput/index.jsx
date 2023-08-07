import styles from "./styles.module.css";

const NumberInput = ({ label, type, required }) => {
    return (
        <div className={styles.form_group}>
            <label>
                <input type={type || "number"} required={required && required} />
                <span>{label || NumberInput.name}</span>
            </label>
        </div>
    );
}

export default NumberInput;