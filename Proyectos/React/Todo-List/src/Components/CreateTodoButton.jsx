import '../Estilos-Componentes/CreateTodoButton.css'

const CreateTodoButton = () => {
  return (
    <button className='CreateTodoButton'
    onClick={(event) => {
        console.log('Clic!')
        console.log(event);        
        console.log(event.target);        
    }}
    >
         + 
    </button>
  )
}

export default CreateTodoButton
