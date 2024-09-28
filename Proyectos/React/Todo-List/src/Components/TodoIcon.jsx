import { ReactComponent as CheckSVG } from '../imagenes/check.svg'
import { ReactComponent as DeleteSVG } from '../imagenes/delete.svg'
import '../Estilos-Componentes/TodoIcon.css'

const iconTypes = {
    "check": (color) => <CheckSVG className='Icon-svg'
        fill={color}
    />,
    "delete": (color) => <DeleteSVG  className='Icon-svg'
        fill={color}
    />
}


const TodoIcon = ({ type, color, onClick }) => {
  return (
    <span
        className={`Icon-container  Icon-container-${type}`}
        onClick={onClick}
    >
    {iconTypes[type](color)}        
    </span>
  )
}

export default TodoIcon
