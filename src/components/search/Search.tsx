import React from 'react'
import  "./search.css"
import { MagnifyingGlass} from "phosphor-react";

export const Search = () => {
  return (

  <>
  <div className='container'>
    <input 
    className='Search'
    type="text"
    autoComplete="false"
    minLength={3}
    placeholder='Buscar'
    />
    <button type='button'
    className='boton-search'
    > 
        <MagnifyingGlass size={24} weight="thin" />
         </button>
         </div>
</>
  )
}
