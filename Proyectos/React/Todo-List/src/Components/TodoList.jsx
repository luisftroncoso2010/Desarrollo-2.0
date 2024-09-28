import '../Estilos-Componentes/TodoList.css'

const TodoList = ({children}) => {
  return (
    <ul className='TodoList'>
      {children}
    </ul>
  )
}

export default TodoList
