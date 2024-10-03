import { useEffect, useState } from "react"

function useLocalStorage(itemName, initialValue) { 

    const [item, setItem] = useState(initialValue);      
    const [loading, setLoading] = useState(true);      
    const [error, setError] = useState(false);      

    useEffect(() => {

      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName)
          let parsedItem;
    
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue
          }else {
            parsedItem = JSON.parse(localStorageItem)
            setItem(parsedItem)
          }
          setLoading(false)      
         } catch (error) {
           setLoading(false)
           setError(true)
          console.log("Hubo un error: ", error);   
         }
      }, 2000)

    }, [])
    
    /* guardar los datos de los "to-dos" tanto en el localStorage del 
     navegador como en el estado local del componente */
    const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem)
    };     

    
    /* Se retorna la estructura que queramos trabajar, 
    actuliza el estado del custom Hooks y el del localStoraje */
    return {
      item,
      saveItem,
      loading,
      error 
    };
};

export { useLocalStorage } 