import { useContext } from 'react'
import './TodoSearch.css'
import { TodoContex } from '../TodoContext'


const TodoSearch = () => {   
  const {
    setSearchValue,
    searchValue,
  } = useContext(TodoContex)   

  return (
    <input className='TodoSearch'
        placeholder='Cortar Cebolla' 
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value)
        }}/>
  )
}

export default TodoSearch
