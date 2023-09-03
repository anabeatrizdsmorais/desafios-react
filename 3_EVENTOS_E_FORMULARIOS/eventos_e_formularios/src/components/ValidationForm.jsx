import { useState } from "react"

const ValidationForm = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (event) => {

        const {name, value} = event.target;
        
        validate(name, value);

        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
        console.log(errors);
        setErrors({...errors, [name]: validate(name, value)})
    }

    const handleSubimt = (event) => {
        event.preventDefault();

        let validationErrors = {};

        Object.keys(values).forEach(key => {
            const errorMessage = validate(key, values[key]);
            validationErrors = {...validationErrors, [key]: errorMessage}
        });

        setErrors(validationErrors);

        if( Object.values(validationErrors).some((x) => x !== "") ) {
            console.log("Formulario invalido");
        } else { 
            console.log(values);
        }

    }

    const validate = (name, value) => {
        let errorMessage = "";
        switch (name) {
            case "name":
                errorMessage = value ? ""  : "O nome não pode estar em branco.";
                break;
            case "email":
                errorMessage = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 
                "" : "Email invalido.";
                break;
            case "password":
                errorMessage = value.length >= 6 ? ""  : "A senha não pode ser menor que 6 digitos.";
                break;
            default:
                break;
        }
        return errorMessage;
    }



    return (
        <form onSubmit={handleSubimt}>
            <div>
                <label>Nome: </label>
                <input type="text" name="name" value={values.name} onChange={handleChange}/> 
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" value={values.email} onChange={handleChange}/> 
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Senha: </label>
                <input type="password" name="password" value={values.password} onChange={handleChange}/> 
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default ValidationForm