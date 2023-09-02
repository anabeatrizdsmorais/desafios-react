import { useState } from "react"

const ValidationForm = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    });

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

export default ValidationForm