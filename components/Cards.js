"use client";
import React, { useEffect, useState,useContext} from 'react'
import {CartContext} from '../context/cartContext.js';
import {SearchContext} from '../context/searchContext.js'


function Cards() {
  const [cards,setCards] = useState([])
  const [loader,setLoader] = useState(true)
  const {addToCart}=useContext(CartContext)
  const {search} = useContext(SearchContext)

  const moreInfo = (item) =>{
    return <div> 
      <p className=' bg-black'>{item.description}</p>
    </div>
  }


  useEffect(()=>{
    setLoader(true)
    const obtenerCards= async ()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const card = await res.json()
      setCards(card)
      
    }

    obtenerCards();
    setLoader(false)
  },[])



  return (
    <div className='grid grid-cols-4 gap-5 mt-5 mx-20 movil:grid-cols-1 movil:mx-2 tablet:grid-cols-2'>
      {
        loader ?  
          <svg className=' animate-spin absolute left-1/2 top-1/2' height="60" viewBox="0 0 24 24" width="60" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"/></svg>
        :""
      }
    {

      search !='' ? cards.map((card) => card.title.toLowerCase().includes(search.toLowerCase()) ? (
        <div key={card.id} className=' bg-whitegray rounded-3xl py-4 text-zinc-700'>
          
          <img src={card.image}  className=' max-w-xs m-auto max-h-60 tablet:max-w-xs tablet:max-h-20 movil:w-15 movil:h-20'/>
          <h1 className=' font-gothan font-bold mx-7 my-2'>{card.title}</h1>
          <p className=' font-bold mx-7 my-2'>${card.price}</p>
          <div className='flex justify-between mx-8 text-white'>
          <button className=' bg-bluewh p-2 rounded-lg font-roboto font-normal' onClick={()=>{
              addToCart(card)
            }} >Add to Cart </button>
          

          </div>
        </div>
      ): "")
      : cards.map((card) => (
        <div key={card.id} className=' bg-whitegray rounded-3xl py-4 text-zinc-700'>
          
          <img src={card.image}  className=' max-w-xs m-auto max-h-60 tablet:max-w-xs tablet:max-h-20 movil:w-15 movil:h-20'/>
          <h1 className=' font-gothan font-bold mx-7 my-2'>{card.title}</h1>
          <p className=' font-bold mx-7 my-2'>${card.price}</p>
          <div className='flex justify-between mx-8 text-white'>
          <button className=' bg-bluewh p-2 rounded-lg font-roboto font-normal' onClick={()=>{
              addToCart(card)
            }} >Add to Cart </button>
          

          </div>
        </div>
      ))
    }
    </div>
  )

}

export default Cards