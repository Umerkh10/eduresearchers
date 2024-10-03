"use client"
import { CheckCheckIcon, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { HelpDesk } from '../(Home)/HomeBanner'

function ThankOrder() {

   const name = localStorage.getItem('name')
   const phone = localStorage.getItem('phone')
  return (
    <div style={{backgroundImage:"url('/imgs/bg-thank-order.webp')",backgroundSize:'cover',backgroundPosition:'center'}} className="flex  flex-col items-center justify-center h-screen bg-background px-4 pb-24 pt-32 md:pt-2 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center scale-90 md:scale-100">
      <div className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 font-semibold text-primary-foreground">
        <CheckCheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for your Order</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight text-zinc-100  sm:text-2xl">
        Dear <span className=' font-bold'>{name || 'user'}</span>.
      </h1>
      <h1 className="pt-3 lg:w-[610px] mx-auto text-lg font-medium text-zinc-100 sm:text-xl">
 Thank you for your order! Enjoy a special 45% discount. Check WhatsApp at <span className='font-bold'>{phone}</span> for details! 
      </h1>
      <p className="md:mt-4 mt-2 text-zinc-100">
      Thank you for your purchase! Feel free to reach out with any questions. </p>
      <div className="mt-6 flex flex-col items-center md:flex-row justify-center gap-4">
        <Link
          href=""
          className="flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 py-3 bg-green-500 w-[200px] text-white rounded-lg"
          prefetch={false}
        >
           <PhoneCall className='mr-2'/> Whatsapp Now
        </Link>
        <HelpDesk/>
      </div>
    </div>
  </div>
  )
}

export default ThankOrder