
import './App.css'
import MultiSelectList from './components/MultiSelectList'
import NestedListComponent from './components/NestedListComponent'
import SwitchCaseComponent from './components/SwitchCaseComponent'
import TernaryComponent from './components/TernaryComponent'
import TimeBasedComponent from './components/TimeBasedComponent'

function App() {

    return (
        <>
            {/* 1- renderização de ternario */}
            <h3>1- renderização de ternario</h3>
            <TernaryComponent condition={false}/>
            <hr />
            
            {/* 2- renderização com switch */}
            <h3>2- renderização com switch</h3>
            <SwitchCaseComponent value="3"/>
            <hr />

            {/* 3- listas aninhadas */}
            <h3>3- listas aninhadas</h3>
            <NestedListComponent />
            <hr />
           
            {/* 4- Renderização baseada no tempo */}
            <h3>4- Renderização baseada no tempo</h3>
            <TimeBasedComponent />
            <hr />
            
            {/* 5- Multi seleção */}
            <h3>5- Multi seleção</h3>
            <MultiSelectList />
            <hr />


        </>
    )
}

export default App
