
import './App.css'
import Counter from './components/Counter'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { TaskProvider } from './context/TaskContext';
import store from './store';
import { Provider } from 'react-redux';

import postStore from './context/posts/store';
import PostsList from './components/PostsList';

function App() {
 
  return (
    <>
      {/* 1- Contador com Redux */}
      <h2>1- Contador com Redux</h2>
      <Provider store={store}>
        <Counter />
      </Provider>

      <hr />
      {/* 2- Todo com context API */}
      <h2>2- Todo com context API</h2>
      <TaskProvider>
        <TaskForm />
        <TaskList />
      </TaskProvider>

      <hr />
      {/* 3- Paginação com Redux */}
      <h2>3- Paginação com Redux</h2>
      <Provider store={postStore}>
        <PostsList />
      </Provider>
    </>
  )
}

export default App
