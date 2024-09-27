import Image from 'next/image'
import React from 'react'

function HowItWorks() {
  return (
    <div id='howitworks' className='mx-auto max-w-screen-xl'>
        <div data-aos='fade-up' data-aos-duration="1500" className='mt-10'>
        <h1 className='text-center text-4xl md:text-7xl text-muted font-extrabold '>HOW IT WORKS</h1>
            <div className=' flex justify-center '>
            <h2 className='text-xl md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>GET 4 STEP EFFICIENT PROCESS</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-2 md:p-5 scale-95 md:scale-100 '>
                <div data-aos='flip-up' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-t from-orange-200 to-emerald-50 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900 p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/imgs/howitworks-1.webp'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>FILL FORM</h2>
                    <p className='mt-2 text-muted-foreground font-medium text-sm md:text-base '>Reach out to us via live chat, give us deadlines and requirements.</p>
                    </div>
                </div>

                <div data-aos='flip-down' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-t from-orange-200 to-emerald-50 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900 p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/imgs/howitworks-2.webp'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>GET QUOTATION</h2>
                    <p className='mt-2 text-muted-foreground font-medium text-sm md:text-base'>You will receive a quotation from our expert within a few hours according to your requirements.</p>
                    </div>
                </div>

                <div data-aos='flip-right' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-t from-orange-200 to-emerald-50 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900 p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/imgs/howitworks-3.webp'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>PROCEED WITH PAYMENT</h2>
                    <p className='mt-2 text-muted-foreground font-medium'>Pay amount for your services, as we have
                    reasonable packages for every service.</p>
                    </div>
                </div>

                <div data-aos='flip-left' className='group'>
                    <div className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] rounded-xl shadow-xl bg-gradient-to-t from-orange-200 to-emerald-50 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900 p-5'>
                    <div className='pt-5 flex items-center justify-around'>
                       <Image loading='eager' src={'/imgs/howitworks-4.webp'} width={80} height={80} alt='howitworks' ></Image>
                       <Image loading='eager' className='grayscale' src={'/imgs/arrow.webp'} width={20} height={20} alt='arrow'></Image>
                        
                    </div>
                    <h2 className=' mt-8 text-lg md:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>CLICK ON DOWNLOAD</h2>
                    <p className='mt-2 text-muted-foreground font-medium text-sm md:text-base'>Receive high-quality work on your mentioned deadline. Ask for amendments in case youfeel.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HowItWorks