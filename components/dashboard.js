import React from 'react'
import Search from './search'
import Carrito from './carrito'
import Categorys from './categorys'
import Link from 'next/link'

function Dahboard() {
  return (
    <div className=' bg-zinc-800 flex justify-between text-zinc-50 movil:py-3 movil:grid-cols-1 movil:grid tablet:grid-rows-3 tablet:grid tablet:w-auto tablet:justify-center' >
      <Link href="/" className='movil:flex movil:m-auto tablet:flex tablet:m-auto'><img src='https://i.ibb.co/vVVkkFm/loge.png'alt='logo' className=' h-16 movil:h-20' ></img></Link>
      
      <Categorys/>
      <div className='flex my-auto movil:w-auto movil:ml-6 tablet:flex tablet:m-auto movil:py-3 movil:flex movil:m-auto'>
      <Search/>
      <Carrito/>
      
      </div>
    </div>
  )
}

export default Dahboard