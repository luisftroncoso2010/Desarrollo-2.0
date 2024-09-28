import React from 'react';
import CompleteIcon from './CompleteIcon';
import DeleteIcon from './DeleteIcon';
import '../Estilos-Componentes/TodoItem.css';


function TodoItem(props){
    return(
      <li className="TodoItem">
        <CompleteIcon
          completed={props.completed}
          onComplete={props.onComplete} 
        />

        {/* <span className={`Icon
            Icon-check 
            ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}          
            
        >V</span> */}

        <p className={`TodoItem-p 
            ${props.completed && "TodoItem-p--complete"}`}>{props.text}
        </p>

        <DeleteIcon 
          onDelete = {props.onDelete} 
          />

        {/* <span className="Icon Icon-delete"
            onClick={props.onDelete}
        >X</span> */}
      </li>
    )
}

export default TodoItem