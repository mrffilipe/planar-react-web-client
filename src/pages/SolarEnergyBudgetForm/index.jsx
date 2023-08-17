import styles from "./styles.module.css";

import { Cancel } from "@mui/icons-material";

import TextButton from "../../components/TextButton";
import {
    NumberInput,
    SelectInput,
    SubmitInput,
    TextInput
} from "../../components/Inputs";

const SolarEnergyBudgetForm = () => {
    return (
        <div className={styles.budget_form_container}>
            <div>
                <h2>Formulário para orçamento</h2>
                <TextButton
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
                        <TextInput label="Nome" required />
                        <TextInput label="Sobrenome" required />
                        <TextInput label="Email" required />
                    </fieldset>
                    <fieldset>
                        <legend>Documento</legend>
                        <SelectInput label="Tipo" required />
                        <NumberInput label="Número" required />
                    </fieldset>
                    <fieldset>
                        <legend>Telefone</legend>
                        <NumberInput label="DDD" required />
                        <NumberInput label="Número" required />
                    </fieldset>
                    <fieldset>
                        <legend>Endereço</legend>
                        <NumberInput label="CEP" required />
                        <TextInput label="Cidade" required />
                        <SelectInput label="Estado" required />
                        <NumberInput label="Logradouro" required />
                        <NumberInput label="Rua" required />
                        <NumberInput label="Complemento" required />
                    </fieldset>
                    <SubmitInput value="Realizar orçamento" />
                </form>
            </section>
        </div>
    );
}

export default SolarEnergyBudgetForm;