import { MessageCircle } from 'lucide-react'
import React from 'react'
import DiscountForm from './DiscountForm'

function HomeBanner() {
  return (
    <div className=' w-full bg-gradient-to-b from-emerald-50 to-orange-200 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900'>
    <div className='mx-auto max-w-screen-xl'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 py-10 '>
            <div className='py-5 lg:pl-24'>
                <div className='flex flex-col md:flex-row '>
                    <span>Confidential</span>
                    <div className='hidden md:block h-[24px] w-[2px] bg-muted-foreground ml-4 '></div>
                    <span className='pl-2'>Fast</span>
                    <div className='hidden md:block h-[24px] w-[2px] bg-muted-foreground ml-4 '></div>
                    <span className='pl-2'>Simple Order Form</span>
                    <div className='hidden md:block h-[24px] w-[2px] bg-muted-foreground ml-4 '></div>
                    <span className='pl-2'>No Time Wasting</span>
                    </div>
                    <h1 className='font-bold pt-5 text-4xl '> Best Assignments Essay & Dissertation by PhD Experts</h1>
                    <p className='text-muted-foreground py-2 font-medium '>Here we are providing best assignment assistance to help
                    achieve top grades in your academic career.</p>
                    <button className='flex items-center justify-center mt-5 py-3 bg-zinc-900 w-[200px] text-white rounded-lg'>
                        <MessageCircle className='mr-1'/> Get Started
                    </button>
                    <div className='font-medium text-muted-foreground pt-1'>Prices start at just  <span className='text-black dark:text-white text-sm font-medium'>£11/page</span></div>
            </div>
            <div className=''>
                <div className='flex justify-center'>
                <DiscountForm/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeBanner