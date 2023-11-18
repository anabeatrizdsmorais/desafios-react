
import './App.css'
import HelloWorld from './components/HelloWorld'
import Button from './components/Button'
import ThemeToggle from './components/ThemeToggle'
import StyledComponentExample from './components/StyledComponentExample'
import Card from './components/Card'

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
        <br></br>
        <StyledComponentExample />
        
        <hr />
        5- Sass com React
        <br></br>
        <Card title="Titulo do Card" body="A descrição do card é essa." />


    </>
    )
}

export default App
