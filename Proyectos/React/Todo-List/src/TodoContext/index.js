import React, { useState, createContext } from 'react'
import './useLocalStorage.js'

const TodoContex = createContext();

const TodoProvider = ({children}) => {
     
  /* Le pasamos el estado como inicial el local estorage */
  const {item: todos,  saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('');   
  

  /* Estados derivados */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 
  /* Filtramos la coincidencias */
  const searctedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  }); 
  
  /* Función para cambiar el estado de 'completed' */
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    
    if(newTodos[todoIndex].completed === true){
      newTodos[todoIndex].completed = false
      saveTodos(newTodos);
    }else{
      newTodos[todoIndex].completed = true
      saveTodos(newTodos);      
    }    
  };
  
  /* Función para eliminar un todo */
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    if(newTodos[todoIndex].completed === true){
      newTodos.splice(todoIndex, 1)    
      saveTodos(newTodos);
    }    
  };


  return (
    /* Se encapsula toda la logica de la aplicacion */
    <TodoContex.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searctedTodos,
        completeTodo,
        deleteTodo
      }}
    >
        {children}      
    </TodoContex.Provider>
  )
}

export  {TodoContex, TodoProvider}
