import {useState} from 'react'

const MultiPartForm = () => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        senha: "",
    });

    const previousStep = () => {
        setStep(step-1);
    }
    
    const nextStep = () => {
        setStep(step+1);
    }
    
    return (
        <form>
            { step === 1 && (
                <div>
                    <label>
                        <p>Nome:</p>
                        <input type="text" name='nome' />
                    </label>
                </div>
            )}
            {step === 2 && (
                <div>
                    <label>
                        <p>Email:</p>
                        <input type="email" name='email' />
                    </label>
                </div>
            )}
            {step === 3 && (
                <div>
                    <label>
                        <p>Senha:</p>
                        <input type="password" name='password' />
                    </label>
                </div>
            )}

            {step > 1 && <button type='button' onClick={previousStep}>Anterior</button> }
            {step < 3 && <button type='button' onClick={nextStep}>Próximo</button> }
            {step === 3 && <button type='submit'>Enviar</button> }
        </form>
    )
}

export default MultiPartForm