import { useState } from "react"


const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const [filter, setFilter] = useState("");

    const addTodo = () => {
        setTodos([...todos, {id: Math.random(), task: task}]);
        setTask("");
    }

    return (
        <>
            <input 
                type="text"
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button onClick={addTodo}>Adicionar tarefa</button>

            {/* <ul>
                {todos.map((todo, key) => (
                    <li key={key}>{todo.task}</li>
                ))}
            </ul> */}

            <h4>5- Filtro</h4>
            <input 
                type="text" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Procure sua tarefa"
            />
            <ul>
                {todos
                .filter((todo) => todo.task.includes(filter))
                .map((todo, key) => (
                    <li key={key}>{todo.task}</li>
                ))}
            </ul>
        </>
    )
}

export default TodoList