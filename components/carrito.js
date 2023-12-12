"use client"
import React, { useContext, useEffect, useState } from 'react'
import { FaBagShopping } from "react-icons/fa6";
import {CartContext ,total} from '../context/cartContext.js';
import { FaTrash } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Carrito() {
  const [show,setShow] = useState(false);
  const {cart,deleteToCart,total}=useContext(CartContext)
  
 
  
  
  return (
    <div className=' px-4 ' >
        <FaBagShopping className=' text-4xl cursor-pointer' onClick={()=>setShow(!show)}/>
        {
          show ? <div className=' bg-zinc-900 fixed left-0 h-screen w-screen top-0 opacity-50' onClick={()=>setShow(!show)
          }></div>: <div></div>
        }
        {
          show ? 
          <ul className='fixed overflow-scroll bg-white text-zinc-800 h-full w-cart movil:w-full tablet:w-full right-0 top-0 rounded-l-xl pt-5 transition-all duration-300'><IoClose className=' text-3xl  absolute right-5 cursor-pointer' onClick={()=>setShow(!show) }/>
          {
            cart.length === 0 || cart==[] ? <p className=' font-gothan font-bold text-2xl text-center my-60'>No hay ITEMS</p>: <div></div>
          }
          
          {
            cart.map((item)=>(
              <li key={item.id} className=' grid grid-cols-4 movil:grid-cols-4 text-center mx-5 items-center my-3'>
              <img src={item.image} className=' max-h-16 max-w-xs'></img>
              <h1 className='font-semibold'>{item.title}</h1>
              <div className=' text-bluewh'>
              <p className=' font-semibold'>Cantidad</p>
              <p>{item.cantidad} x ${item.price}</p>
              </div>
              <button className=' m-auto text-red-600' onClick={()=>{
                deleteToCart(item)
                setShow(!show)
                setTimeout(() => {
                  setShow(true)
                }, 400);
                
                }} ><FaTrash/></button>
            </li>
          ))}<div className=' font-bold absolute right-1/2 pt-5'> Total price: ${total.toFixed(2)}</div></ul> : 
          <ul className='fixed bg-zinc-800 h-full w-cart -right-full top-0 rounded-b-xl transition-all duration-300'>
            {cart.map((item)=>(
            <li key={item.id} className=' grid grid-cols-4 movil:grid-cols-4 text-center mx-5 items-center my-3'>
              <img src={item.image} className=' max-h-16 max-w-xs'></img>
              <h1 className='font-semibold'>{item.title}</h1>
              <div className=' text-bluewh'>
              <p className=' font-semibold'>Cantidad</p>
              <p>{item.cantidad} x ${item.price}</p>
              </div>
              <button className=' m-auto text-red-600' onClick={()=>{
                deleteToCart(item)
                setShow(!show)
                setTimeout(() => {
                  setShow(true)
                }, 3000);
                }} ><FaTrash/></button>
            </li>
          ))}</ul>
          
        }
    </div>
  )
}

export default Carrito