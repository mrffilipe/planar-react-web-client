import styles from "./styles.module.css";

import { useState } from "react";

import {
    NumberInput,
    SelectInput,
    SubmitInput,
    TextInput
} from "../../components/Inputs";
import TopPage from "../../components/TopPage";
import TextButton from "../../components/TextButton";

const Step1 = () => {
    return (
        <>
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
        </>
    );
};

const Step2 = () => {
    return (
        <>
            <fieldset>
                <legend>Usina</legend>
                <NumberInput label="Produção extra" required />
                <NumberInput label="Transformador" required />
                <TextInput label="Observações" required />
            </fieldset>
            <fieldset>
                <legend>#1 - Unidade consumidora</legend>
                <TextInput label="Referência" required />
                <NumberInput label="Tipo da rede" required />
                <NumberInput label="Consumo (kWh)" required />
                <NumberInput label="Preço (kWh)" required />
            </fieldset>
        </>
    );
};

const Step3 = () => {
    return (
        <>
            <fieldset>
                <legend>Endereço para instalação</legend>
                <NumberInput label="CEP" required />
                <TextInput label="Cidade" required />
                <SelectInput label="Estado" required />
                <NumberInput label="Logradouro" required />
                <NumberInput label="Rua" required />
                <NumberInput label="Complemento" required />
            </fieldset>
        </>
    );
};

const SolarEnergyBudgetForm = () => {
    const [step, setStep] = useState(1);

    const handleNextStep = () => {
        setStep(prevStep => prevStep + 1)
    };

    const handlePreviousStep = () => {
        setStep(prevStep => prevStep - 1)
    };

    console.log("Step: ", step)

    return (
        <section className={styles.budget_form_section}>
            <TopPage title="Formulário para orçamento" />
            <div className={styles.form_container}>
                <form className={styles.form}>
                    {step === 1 && <Step1 />}
                    {step === 2 && <Step2 />}
                    {
                        step === 3 && (
                            <>
                                <Step3 />
                                <SubmitInput value="Realizar orçamento" />
                            </>
                        )
                    }
                    <div className={styles.form_control}>
                        {
                            step !== 1 &&
                            <TextButton
                                title="Voltar"
                                onClick={handlePreviousStep}
                            />
                        }
                        {
                            step !== 3 &&
                            <TextButton
                                title="Próximo"
                                onClick={handleNextStep}
                            />
                        }
                    </div>
                </form>
            </div>
        </section>
    );
}

export default SolarEnergyBudgetForm;