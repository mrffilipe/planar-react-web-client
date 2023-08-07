import styles from "./styles.module.css";

import { Cancel } from "@mui/icons-material";

import Button from "../../components/Button";
import FormLabel from "../../components/FormLabel";

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
                <form className={styles.form}>
                    <fieldset>
                        <legend>Cliente</legend>
                        <FormLabel title="Nome">
                            <input type="text" required />
                        </FormLabel>
                        <FormLabel title="Sobrenome">
                            <input type="text" required />
                        </FormLabel>
                        <FormLabel title="Email">
                            <input type="text" required />
                        </FormLabel>
                    </fieldset>
                    <fieldset>
                        <legend>Documento</legend>
                        <FormLabel title="Tipo">
                            <select>
                                <option value="1">RG</option>
                                <option value="2" selected>CPF</option>
                                <option value="3">CNPJ</option>
                            </select>
                        </FormLabel>
                        <FormLabel title="Número">
                            <input type="number" required />
                        </FormLabel>
                    </fieldset>
                </form>
            </section>
        </div>
    );
}

export default SolarEnergyBudgetForm;