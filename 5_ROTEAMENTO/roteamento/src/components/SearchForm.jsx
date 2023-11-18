import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchForm = () => {

    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/search?query=${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Procurar..."/>
            <br></br>
            <br></br>
            <button type="submit">Buscar</button>
        </form>
    )
}

export default SearchForm