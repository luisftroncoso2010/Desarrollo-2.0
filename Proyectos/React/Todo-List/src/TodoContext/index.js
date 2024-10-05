import React, { useState, createContext } from 'react'
import { useLocalStorage } from './useLocalStorage'

const TodoContex = createContext();

const TodoProvider = ({ children }) => {
     
  /* Le pasamos el estado como inicial el local estorage */
  const {item: todos,  saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);


  /* Estados derivados */
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 
  /* Filtramos la coincidencias */
  const searctedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText)
  }); 

  /* Agregar nuevos todos */
  const addTodo = (text) => {  
    const newTodos = [...todos]
    newTodos.push({
      text,
      completed : false,
    })
    saveTodos(newTodos)
  }
  
  
  /* Función para cambiar el estado de 'completed' true o false */
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

  /* Para cambiar el estado de Modal */ 
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
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo
      }}
    >
      {children}      
    </TodoContex.Provider>
  )
}

export  {TodoContex, TodoProvider}
