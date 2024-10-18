"use client"
import {  HelpingHandIcon, MessageCircle, RocketIcon } from 'lucide-react'
import React, { Suspense, useEffect, useLayoutEffect, useState } from 'react'
import DiscountForm from './DiscountForm'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Image from 'next/image';




export function HomeBanner(){
  const [highlightForm, setHighlightForm] = useState(false);



  const handleGetStartedClick = () => {
    setHighlightForm(true);
    setTimeout(() => {
      setHighlightForm(false);
    }, 2000); 
  };


  return (
    <>
    {/* <Tawkto/> */}
    <div
      id='banner'
      className='w-full bg-gradient-to-b from-emerald-50 to-orange-200 dark:bg-gradient-to-t dark:from-orange-900 dark:via-orange-950 dark:to-zinc-950'
    >
      <div className='mx-auto max-w-screen-xl'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 py-10'>
          {/* Left Section */}
          <div className='py-5 lg:pl-24 px-5 scale-90 md:scale-100'>
            <div className='grid lg:grid-cols-6 grid-cols-2 gap-4 ml-10 md:ml-0'>
              <div className='text-muted-foreground font-semibold md:text-base text-sm'>
                Confidential
              </div>
              <div className='lg:text-center lg:ml-5 text-muted-foreground font-semibold md:text-base text-sm'>
                Fast
              </div>
              <div className='lg:col-span-2 text-muted-foreground font-semibold md:text-base text-sm'>
                Simple Order Form
              </div>
              <div className='lg:col-span-2 text-muted-foreground font-semibold md:text-base text-sm'>
                No Time Wasting
              </div>
            </div>
            <h1 className='font-bold pt-5 text-center md:text-start text-2xl lg:text-4xl'>
              Best Assignments Essay & Dissertation by PhD Experts
            </h1>
            <p className='text-sm md:text-base text-muted-foreground py-2 font-medium text-center md:text-start'>
              Here we are providing best assignment assistance to help achieve top grades in your academic career.
            </p>
            <div className='md:flex-row md:justify-start gap-3 flex flex-col justify-center items-center scale-[.85] md:scale-100 mt-4'>
              <button
                className='flex items-center justify-center py-[13px] px-6 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-orange-500'
                onClick={handleGetStartedClick}
              >
                <RocketIcon className='mr-1' /> Get Started
              </button>
              <HelpDesk />
            
             
            </div>
            <div className='font-medium text-muted-foreground text-center md:text-start pt-1'>
              Prices start at just <span className='text-black dark:text-white text-sm font-medium'>£11/page</span>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className='flex justify-center px-3'>
              {/* Highlight the form when button is clicked */}
              <div
                className={`transition duration-200 ease-in  ${
                  highlightForm ? 'border-2 border-orange-500 shadow-xl scale-95 md:scale-105 rounded-3xl' : ''
                }`}
              >
                <DiscountForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}





export function HelpDesk() {
    // const handleGetStartedClick = () => {
    //     // Ensure Tawk_API is loaded and available
    //     if (window.Tawk_API) {
    //       window.Tawk_API.toggle(); // This will toggle the chat widget
    //     }
    //   };
  return (
    <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer" className='bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-200 flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-green-600'>
    <Image className='mr-2' src={'/imgs/whatsapp.png'} width={25} height={25} alt='whatsapp'></Image> Whatsapp Now
</Link>
  )
}

