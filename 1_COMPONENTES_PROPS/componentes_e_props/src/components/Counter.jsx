import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            Contador: {count}
            <button onClick={() => setCount(count+1)}>Aumentar</button>
        </div>
    )
}

export default Counter