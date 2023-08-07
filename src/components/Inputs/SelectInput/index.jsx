import styles from "./styles.module.css";

const SelectInput = ({ label, required }) => {
    return (
        <div className={styles.form_group}>
            <label>
                <span>{label || SelectInput.name}</span>
                <select required={required && required}>
                    <option value="1" selected>CPF</option>
                    <option value="2">CNPJ</option>
                    <option value="3">RG</option>
                </select>
            </label>
        </div>
    );
}

export default SelectInput;