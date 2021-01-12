import Todos from './components/Todos'
import './App.css';
import FormTodo from './components/FormTodo'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'


function App() {
  const [todos, setTodos] = useState([])
  

  const addToList = newTask => {
    setTodos([...todos, newTask])
  }

  const ifChecked = newList => {
    setTodos(newList)
  }
  return (
    <div className="App">
      
      <FormTodo newItem={ addToList }  />
      <Todos isChecked={ ifChecked } setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
