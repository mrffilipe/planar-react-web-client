import styles from "./styles.module.css";

const InputSubmit = ({ value }) => {
  return (
    <input
      type="submit"
      value={value || InputSubmit.name}
      className={styles.input_submit}
    />
  );
}

export default InputSubmit;