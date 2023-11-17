
import './App.css'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import ThemeToggle from './components/ThemeToggle'
import StyledComponentExample from './components/StyledComponentExample'

function App() {

    return (
    <>
        <h2>
            Estilização
        </h2>
        <hr />
        1- CSS inline
        <HelloWorld/>
        <hr />

        2- CSS externo
        <br></br>
        <br></br>
        <Button />

        <hr />

        3- CSS module - tema light e darkTheme
        <br />
        <ThemeToggle />

        <hr />
        4- Styled components
        <StyledComponentExample />


    </>
    )
}

export default App
