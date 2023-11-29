/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Form, Field } from "react-final-form";

const required = (value) => (value ? undefined : "Campo obrigatório.");
const mustBeNumber = (value) => ( isNaN(value) ? "Deve ser número" : undefined);

const composeValidators = (...validators) => {
    return (...args) => 
        validators.reduce(
            (error, validator) => error || validator(...args), 
            undefined
        );
}

const minValue = (min) => (value, allValues) => {

    if(allValues.parentName) {
        return undefined;
    }

    return isNaN(value) || value >= min ? undefined : `Deve ser maior que ${min}` ;
}
const MyForm = () => {

    const onSubmit = (values) => {
        console.log(values);
    }
  return (
    <Form 
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nome:</label>
                    <Field name="firstname" validate={required}>

                        {
                            ({input, meta}) => (
                                <>
                                    <input {...input} type="text" placeholder="Seu nome"/>
                                    {meta.error && meta.touched && <p>{meta.error}</p>}
                                </>
                            )
                        }
                    </Field>
                </div>
                <div>
                    <label>Sobrenome:</label>
                    <Field name="lastname" validate={required}>

                        {
                            ({input, meta}) => (
                                <>
                                    <input {...input} type="text" placeholder="Seu sobrenome"/>
                                    {meta.error && meta.touched && <p>{meta.error}</p>}
                                </>
                            )
                        }
                    </Field>
                </div>
                <div>
                    <label>E-mail:</label>
                    <Field name="email" validate={required}>

                        {
                            ({input, meta}) => (
                                <>
                                    <input {...input} type="email" placeholder="Seu email"/>
                                    {meta.error && meta.touched && <p>{meta.error}</p>}
                                </>
                            )
                        }
                    </Field>
                </div>
                <div>
                    <label>Idade:</label>
                    <Field name="age" validate={composeValidators(required, mustBeNumber, minValue(18))}>

                        {
                            ({input, meta}) => (
                                <>
                                    <input {...input} type="text" placeholder="Sua idade"/>
                                    {meta.error && meta.touched && <p>{meta.error}</p>}
                                </>
                            )
                        }
                    </Field>
                </div>

                {values.age && values.age < 18 && (
                    <div>
                    <label>Nome do responsável:</label>
                    <Field name="parentName" validate={required}>

                        {
                            ({input, meta}) => (
                                <>
                                    <input {...input} type="text" placeholder="Responsável"/>
                                    {meta.error && meta.touched && <p>{meta.error}</p>}
                                </>
                            )
                        }
                    </Field>
                </div>
                )}

                <div className="buttons">
                    <button type="submit" disabled={submitting || pristine}>Enviar</button>
                    <button type="button" onClick={form.reset}>Resetar</button>
                </div>

            </form>
        )}
    />   
  )
}

export default MyForm