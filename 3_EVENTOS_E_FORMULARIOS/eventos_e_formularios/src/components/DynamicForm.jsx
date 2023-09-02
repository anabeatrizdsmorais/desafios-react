import {useState} from 'react'

const DynamicForm = () => {

    const [fields, setFields] = useState([""]);

    const handleChange = (i, event) => {
        const values = [...fields];
        values[i] = event.target.value;
        setFields(values);
    }

    const handleAdd = () => {
        const values = [...fields];
        values.push("");
        setFields(values);
    }

    const handleSubimt = (event) => {
        event.preventDefault();
        console.log(fields);
    }

    return (
        <>
            <form onSubmit={handleSubimt}>
                {
                    fields.map((field, i) => (
                        <div key={i}>
                            <input 
                                type='text' 
                                value={field}
                                onChange={
                                    (event) => handleChange(i, event)
                                } 
                            />
                        </div>
                    ))
                }
                <input type='submit' value='Enviar' />
            </form>
            <button onClick={handleAdd}>Novo Campo</button>
        </>
    )
}

export default DynamicForm