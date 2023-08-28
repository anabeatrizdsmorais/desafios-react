
import './App.css'
import Counter from './components/Counter'
import Family from './components/Family'
import HelloName from './components/HelloName'
import HelloWord from './components/HelloWord'
import Profile from './components/Profile'
import ProfileClass from './components/ProfileClass'

function App() {
 
  const members = [
    {name: "Ana",       age: 26, job: "Programadora"},
    {name: "Victoria",  age: 25, job: "Advogata"},
    {name: "Beatriz",   age: 26, job: "Desenvolvedora"}
  ];

  return (
    <>
      <h2>1- criando um componente simples</h2>
      <HelloWord/>
      
      <h2>2- usando props</h2>
      <HelloName name="Ana"/>

      <h2>3- multiplas props </h2>
      <Profile name="Ana" age="26" job="Programador" />
      
      <h2>4- composição de componentes </h2>
      <Family members={members} />
      
      <h2>5- componente de class</h2>
      <ProfileClass name="Victoria" age="25" job="Advogata"/>
      
      <h2>6- componente de estado</h2>
      <Counter/>



    </>
  )
}

export default App
