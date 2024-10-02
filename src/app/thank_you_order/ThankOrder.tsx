"use client"
import { CheckIcon, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { HelpDesk } from '../(Home)/HomeBanner'

function ThankOrder() {

   const name = localStorage.getItem('name')
   const phone = localStorage.getItem('phone')
  return (
    <div className="flex  flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center">
      <div className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-primary-foreground">
        <CheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You for your Order</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
        Dear <span className=' font-bold'>{name || 'user'}</span>.
      </h1>
      <h1 className="mt-6 text-lg font-medium  text-foreground sm:text-xl">
      Thank you for your order! We appreciate your support and are excited to offer you a special 45% discount. Check your WhatsApp <span className='font-bold'>{phone} </span>for more details!  
      </h1>
      <p className="mt-4 text-muted-foreground">
        Thank you for your recent purchase. We hope you enjoy your new product. If you have any questions or concerns,
        please don't hesitate to contact us.
      </p>
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