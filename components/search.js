"use client";
import React, { useContext } from 'react'

import {SearchContext} from '../context/searchContext.js'


function Search() {
    
    const {Seached} = useContext(SearchContext)


    
  return (
    
        <input className=' rounded-xl text-black w-96 px-2 movil:w-auto movil:p-2' placeholder='Buscar producto' onChange={ev=>{
          Seached(ev.target.value);
        }} id='search'></input>
        
        
        
    
  )

  }

export default Search