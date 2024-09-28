import React, {useState} from 'react';
import TodoCounter  from './Components/TodoCounter'
import  TodoItem  from './Components/TodoItem'
import  TodoSearch  from './Components/TodoSearch'
import  CreateTodoButton from './Components/CreateTodoButton'
import  TodoList  from './Components/TodoList'


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true },
  { text: 'React Js', completed: false },
  { text: 'Llorar con la llorona', completed: true },
  { text: 'Ir al Gym', completed: false },
  { text: 'Torres Del Estadio', completed: true },
  { text: 'Torres Del La Fuente', completed: false }
]


function App() {

  const [todos, setTodos] = useState(defaultTodos);
  const [searchValue, setSearchValue] = useState('');

  /* Estados derivados */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  
 
  /* Filtramos la coincidencias */
  const searctedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  })


  /* Función para cambiar el estado de 'completed' */
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    
    if(newTodos[todoIndex].completed === true){
      newTodos[todoIndex].completed = false
      setTodos(newTodos);
    }else{
      newTodos[todoIndex].completed = true
      setTodos(newTodos);      
    }
    
  };
  


  /* Función para eliminar un todo */
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    if(newTodos[todoIndex].completed === true){
      newTodos.splice(todoIndex, 1)    
      setTodos(newTodos);
    }    
  };


  return (
    <>
      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />  

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList >
        {         
          searctedTodos.map(todo => (
            <TodoItem  key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete ={ () => completeTodo(todo.text)}
            onDelete ={ () => deleteTodo(todo.text) 
              
            }
            />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
};

export default App;
