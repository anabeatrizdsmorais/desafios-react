import './App.css'
import Button from './components/Button'
import Form from './components/Form'
import Greeting from './components/Greeting'

function App() {


    return (
        <>
            <hr />
            {/* 1- Teste em componente */}
            <h2>1- Teste em componente</h2>
            <Greeting name="Victoria"/>
            
            <hr />
            {/* 2- Teste com eventos */}
            <h2>2- Teste com eventos</h2>
            <Button/>
            
            <hr />
            {/* 3- Teste em formularios */}
            <h2>3- Teste em formularios</h2>
            <Form/>
        </>
    )
}

export default App
