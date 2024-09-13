import { MessageCircle } from 'lucide-react'
import React from 'react'
import DiscountForm from './DiscountForm'

function HomeBanner() {
  return (
    <div id='banner' className=' w-full bg-gradient-to-b from-emerald-50 to-orange-200 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900'>
    <div className='mx-auto max-w-screen-xl'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 py-10 '>
            <div className='py-5 lg:pl-24 px-5 '>
                <div className='grid md:grid-cols-2 grid-cols-2 gap-2'>
                    <div>
                    <span className='font-semibold text-sm text-muted-foreground md:text-base pl-2  '>Confidential</span>
                    </div>

                    <div>
                    <span className='font-semibold text-sm text-muted-foreground md:text-base pl-2  '>Fast</span>
                    </div>

                    <div>
                    <span className='font-semibold text-sm text-muted-foreground md:text-base pl-2  '>Simple Order Form</span>
                    </div>
                    <div>
                    <span className='font-semibold text-sm text-muted-foreground md:text-base pl-2  '>No Time Wasting</span>
                    </div>
                    </div>
                    <h1 className='font-bold pt-5 text-center md:text-start text-2xl lg:text-4xl '> Best Assignments Essay & Dissertation by PhD Experts</h1>
                    <p className='text-sm md:text-base text-muted-foreground py-2 font-medium text-center md:text-start '>Here we are providing best assignment assistance to help
                    achieve top grades in your academic career.</p>
                    <div className='md:block  flex justify-center items-center scale-90 md:scale-100 '>
                    <button className='flex items-center justify-center hover:scale-105 transition ease-in duration-200 delay-200 mt-5 py-3 bg-zinc-900 w-[200px] text-white rounded-lg'>
                        <MessageCircle className='mr-1'/> Get Started
                    </button>
                    
                    </div>
                    <div className='font-medium text-muted-foreground text-center md:text-start pt-1'>Prices start at just  <span className='text-black dark:text-white text-sm font-medium'>£11/page</span></div>
            </div>
            <div className=''>
                <div className='flex justify-center px-3'>
                <DiscountForm/>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HomeBanner