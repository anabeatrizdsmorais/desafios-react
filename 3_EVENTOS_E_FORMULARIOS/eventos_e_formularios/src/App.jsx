import './App.css';
import DynamicForm from './components/DynamicForm';
import RegistrationForm from './components/RegistrationForm';
import ValidationForm from './components/ValidationForm';

function App() {

  return (
    <>
      <h2>3 - EVENTOS E FORMULARIOS</h2>

      <h3>1- Formulario de registro</h3>
      <RegistrationForm />
      
      <h3>2- Formulario dinamico</h3>
      <DynamicForm />
      
      <h3>2- Validacao de Formulario </h3>
      <ValidationForm />
    </>
  )
}

export default App
