import '../Estilos-Componentes/TodoCounter.css';

function TodoCounter({total, completed}){   
    
    return(
      <h1 className={`TodoCounter ${completed === total && 'bold-text'}`}>
        {completed === total ? (
            "Haz completado todas tus tareas"
        ) : (
        <>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOS
        </>
      )}
      </h1>
    )
}

export default TodoCounter