import styles from "./styles.module.css";

import { Cancel } from "@mui/icons-material";

import Button from "../../components/Button";

const SolarEnergyBudgetForm = () => {
    return (
        <div className={styles.budget_form_container}>
            <div>
                <h2>Formulário para orçamento</h2>
                <Button
                    title="Cancelar"
                    icon={Cancel}
                    btnStyle={styles.btn_style}
                    iconStyle={styles.icon_style}
                />
            </div>
            <section className={styles.budget_form_section}>

            </section>
        </div>
    );
}

export default SolarEnergyBudgetForm;