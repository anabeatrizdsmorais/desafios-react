import './App.css'
import Clock from './components/Clock'
import DataFetcher from './components/DataFetcher'
import TodoList from './components/TodoList'
import Toggle from './components/Toggle'
import ToggleMultiplo from './components/ToggleMultiple'
import WindowWidthChecker from './components/WindowWidthChecker'

function App() {
 
  return (
    <>
      <h2>
        1- usando estado
      </h2>
      <Toggle />
      
      <h2>
        2- multiplos estados
      </h2>
      <ToggleMultiplo />

      <h2>3- relogio em tempo real</h2>
      <Clock />
      
      <h2>4- todo list</h2>
      <TodoList />

      <h2>Ver a largura da tela</h2>
      <WindowWidthChecker />

      <h2>Simulação de busca de dados</h2>
      <DataFetcher />

    </>
  )
}

export default App
