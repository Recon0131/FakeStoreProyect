"use client";
import React, { useState } from 'react'
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

function Categorys() {
  const [movilShow,setmovilShow] =useState([])
  return (
    <div className=' my-auto right-0 text-white grid grid-cols-4 movil:grid-cols-2 movil:h-auto tablet:flex tablet:m-auto'>
          
            <Link href="/categorys/electronics" className='flex justify-center px-4 py-3 hover:text-zinc-800 hover:bg-zinc-200 transition-all'>Electronics</Link>
            <Link href="/categorys/jewelery" className='flex justify-center px-4 py-3 hover:text-zinc-800 hover:bg-zinc-200 transition-all'>Jewelery </Link>
            <Link href="/categorys/men's clothing" className='flex justify-center px-4 py-3 hover:text-zinc-800 hover:bg-zinc-200 transition-all'>Men's clothing</Link>
            <Link href="/categorys/women's clothing" className='flex justify-center px-4 py-3 hover:text-zinc-800 hover:bg-zinc-200 transition-all'>Women's clothing</Link>
            
      
    </div>
  )
}

export default Categorys