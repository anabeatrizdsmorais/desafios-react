import {useState} from 'react'

const MultiPartForm = () => {
    const [step, setStep] = useState(1);
    const [formValues, setFormValues] = useState({
        nome: "",
        email: "",
        senha: "",
    });
    
    const nextStep = () => {
        if(step === 1 && formValues.nome === ""){
            alert('Por favor, preencha o campo.');
        } else if(step === 2 && formValues.email === "") {
            alert('Por favor, preencha o campo.');
        } else {
            setStep(step+1);
        }
    }

    const previousStep = () => {
        setStep(step-1);
    }

    const handleChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValues.senha === "") {
            alert('Por favor, preencha o campo senha.');
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            { step === 1 && (
                <div>
                    <label>
                        <p>Nome:</p>
                        <input type="text" name='nome' onChange={handleChange}/>
                    </label>
                </div>
            )}
            {step === 2 && (
                <div>
                    <label>
                        <p>Email:</p>
                        <input type="email" name='email' onChange={handleChange}/>
                    </label>
                </div>
            )}
            {step === 3 && (
                <div>
                    <label>
                        <p>Senha:</p>
                        <input type="password" name='senha' onChange={handleChange}/>
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