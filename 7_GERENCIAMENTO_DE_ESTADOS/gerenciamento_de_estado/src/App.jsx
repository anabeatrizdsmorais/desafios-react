
import './App.css'
import Counter from './components/Counter'
import store from './store';
import { Provider } from 'react-redux';

function App() {
 
  return (
    <>
      {/* 1- Contador com Redux */}
      <h2>1- Contador com Redux</h2>
      <Provider store={store}>
        <Counter />
      </Provider>


    </>
  )
}

export default App
