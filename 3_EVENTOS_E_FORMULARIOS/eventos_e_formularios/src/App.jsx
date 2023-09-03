import './App.css';
import DynamicForm from './components/DynamicForm';
import FileUploader from './components/FileUploader';
import MultiPartForm from './components/MultiPartForm';
import RegistrationForm from './components/RegistrationForm';
import ValidationForm from './components/ValidationForm';

function App() {

  return (
    <>
      <h2>EVENTOS E FORMULARIOS</h2>
      <hr/>

      <h3>1- Formulario de registro</h3>
      <RegistrationForm />
      <hr/>
      
      <h3>2- Formulario dinamico</h3>
      <DynamicForm />
      <hr/>
      
      <h3>3- Validacao de Formulario </h3>
      <ValidationForm />
      <hr/>
      
      <h3>4- Upload de arquivos </h3>
      <FileUploader />
      <hr/>
      
      <h3>5- Formulario multiplas etapas </h3>
      <MultiPartForm />
      <hr/>


    </>
  )
}

export default App
