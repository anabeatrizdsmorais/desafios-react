import { Link } from "react-router-dom"
import SearchForm from "./SearchForm"

const Home = () => {
    return (
        <div>
            <h3>Home</h3>
            {/* Links de navegação */}
            <ul>
                <li>
                    <Link to="/usuarios/1">Usuário 1</Link>
                </li>
                <li>
                    <Link to="/usuarios/2">Usuário 2</Link>
                </li>
                <li>
                    <Link to="/usuarios/3">Usuário 3</Link>
                </li>
            </ul>

            <hr />

            <SearchForm />

        </div>
    )
}

export default Home