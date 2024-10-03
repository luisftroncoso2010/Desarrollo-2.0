import { TodoProvider } from '../TodoContext/index.js';
import AppUI from './AppUI.js';

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'React Js', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'Ir al Gym', completed: false },
//   { text: 'Torres Del Estadio', completed: true },
//   { text: 'Torres Del La Fuente', completed: false }
// ]  
//   localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
//   localStorage.removeItem('TODOS_V1')

function App() { 
  return(
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
};

export default App;
