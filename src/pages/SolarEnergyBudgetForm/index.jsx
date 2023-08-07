import styles from "./styles.module.css";

import { Cancel } from "@mui/icons-material";

import Button from "../../components/Button";
import FormLabel from "../../components/FormLabel";
import InputSubmit from "../../components/InputSubmit";

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
                    <fieldset>
                        <legend>Telefone</legend>
                        <FormLabel title="DDD">
                            <input type="number" required />
                        </FormLabel>
                        <FormLabel title="Número">
                            <input type="number" required />
                        </FormLabel>
                    </fieldset>
                    <fieldset>
                        <legend>Endereço</legend>
                        <FormLabel title="CEP">
                            <input type="number" required />
                        </FormLabel>
                        <FormLabel title="Cidade">
                            <input type="text" required />
                        </FormLabel>
                        <FormLabel title="Estado">
                            <select>
                                <option value="1">GO</option>
                                <option value="2" selected>MG</option>
                                <option value="3">SP</option>
                            </select>
                        </FormLabel>
                        <FormLabel title="Logradouro">
                            <input type="text" required />
                        </FormLabel>
                        <FormLabel title="Rua">
                            <input type="text" required />
                        </FormLabel>
                        <FormLabel title="Complemento">
                            <input type="text" required />
                        </FormLabel>
                    </fieldset>
                    <InputSubmit value="" />
                </form>
            </section>
        </div>
    );
}

export default SolarEnergyBudgetForm;