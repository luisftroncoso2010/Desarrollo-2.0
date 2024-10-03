import TodoCounter  from '../TodoCounter'
import TodoItem  from '../TodoItem'
import TodoSearch  from '../TodoSearch'
import CreateTodoButton from '../CreateTodoButton'
import TodoList  from '../TodoList'
import TodosLoading from '../TodosLoading'
import TodosError from '../TodosError'
import EmptyTodos from '../EmptyTodos'
import { TodoContex } from '../TodoContext'


function AppUI(){  
    return (
        <>
          <TodoCounter />      
          <TodoSearch /> 

          <TodoContex.Consumer>
            {(
               loading,
               error,              
               searctedTodos,
               completeTodo,
               deleteTodo
            )=> (
                 <TodoList >
                 {loading && 
                   <>
                     <TodosLoading/>               
                     <TodosLoading />
                     <TodosLoading/>  
                   </> 
                 }
                 { error && <TodosError /> }
                 {(!loading && searctedTodos.length === 0) 
                 && <EmptyTodos />}
                         
                 {searctedTodos.map(todo => (
                     <TodoItem  key={todo.text}
                     text={todo.text}
                     completed={todo.completed}
                     onComplete ={ () => completeTodo(todo.text)}
                     onDelete ={ () => deleteTodo(todo.text)               
                 }
                     />
                 ))}
               </TodoList>

            )}
          </TodoContex.Consumer>

          <CreateTodoButton/>
        </>
      );
}

export default AppUI
