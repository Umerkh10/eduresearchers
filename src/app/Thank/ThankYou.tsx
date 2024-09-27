"use client"
import Link from 'next/link'
import React from 'react'
import { HelpDesk } from '../(Home)/HomeBanner'
import { PhoneCall } from 'lucide-react'

function ThankYou() {
    const name = localStorage.getItem("name")
    const number = localStorage.getItem("number")
  return (
    <div className="flex  flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-screen-xl text-center">
      <div className="inline-flex items-center rounded-full bg-orange-500 px-4 py-2 text-primary-foreground">
        <CheckIcon className="mr-2 h-5 w-5" />
        <span>Thank You!</span>
      </div>
      <h1 className="mt-6 text-xl font-medium tracking-tight text-foreground sm:text-2xl">
        Dear <span className=' font-bold'>{name || "User"} </span>.
      </h1>
      <h1 className="mt-6 text-lg font-medium  text-foreground sm:text-xl">
        Please Check your whatsapp <span className='font-bold'>{number}</span>  we have sent 50% discount offer
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

export default ThankYou

function CheckIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    )
  }