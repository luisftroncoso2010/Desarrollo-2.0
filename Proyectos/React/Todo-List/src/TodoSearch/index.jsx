import './TodoSearch.css'

const TodoSearch = ({searchValue, setSearchValue}) => {   
    

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
