import { useState } from "react"

const RegistrationForm = () => {

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
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubimt = (event) => {
        event.preventDefault();
        console.log(values);
    }

    // const validate = (name, value) => {
    //     let errorMessage = "";
    //     switch (name) {

    //     }
    // }

    return (
        <form onSubmit={handleSubimt}>
            <div>
                <label>Nome: </label>
                <input type="text" name="name" value={values.name} onChange={handleChange}/> 
                {values.name}
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" value={values.email} onChange={handleChange}/> 
                {values.email}
            </div>
            <div>
                <label>Senha: </label>
                <input type="password" name="password" value={values.password} onChange={handleChange}/> 
                {values.password}
            </div>
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default RegistrationForm