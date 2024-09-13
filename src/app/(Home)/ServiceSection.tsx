import Image from 'next/image'
import React from 'react'

function ServiceSection() {
  return (
    <div id="why-us" className='mx-auto max-w-screen-xl'>
        <div data-aos='fade-up' data-aos-duration="2000" className='mt-10'>
            <h1 className='text-center text-4xl md:text-7xl text-muted font-extrabold '>WHY US?</h1>
            <div className=' flex justify-center '>
            <h2 className='text-2xl md:text-4xl w-[500px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>HERE ARE YOUR BEST ACADEMIC SOLUTIONS COVERING ALL FIELDS</h2>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 p-5'>
                <div className='group'>
                    <div data-aos='flip-up' className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-gradient-to-b from-emerald-100 to-orange-200 dark:bg-gradient-to-t dark:from-orange-500 dark:to-zinc-900 rounded-xl'>
                        <Image src={'/imgs/flawless.svg'} width={60} height={60} alt='flawless'></Image>
                        <h2 className='pt-3 text-xl font-bold lg:pr-24 md:pr-16'>FLAWLESS ASSIGNMENTS</h2>
                        <p className=' font-medium pt-2'>Here you will get extremely affordable assignment assistance with excellent quality from top British writers in the UK.</p>
                    </div>
                </div>


                <div className='group'>
                    <div data-aos='flip-down' className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-gradient-to-b from-emerald-100 to-orange-200 dark:bg-gradient-to-t dark:from-orange-500 dark:to-zinc-900 rounded-xl'>
                        <Image src={'/imgs/secure.svg'} width={60} height={60} alt='flawless'></Image>
                        <h2 className='pt-3 text-xl font-bold lg:pr-24 md:pr-16'>100% SECURE SERVICES</h2>
                        <p className=' font-medium pt-2'>We take students' privacy seriously; that is why we have designed our assignment editing services to completely secure and maintain confidentiality.</p>
                    </div>
                </div>


                <div className='group'>
                    <div data-aos='flip-up' className='group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-gradient-to-b from-emerald-100 to-orange-200 dark:bg-gradient-to-t dark:from-orange-500 dark:to-zinc-900 rounded-xl'>
                        <Image src={'/imgs/247support.svg'} width={60} height={60} alt='flawless'></Image>
                        <h2 className='pt-3 text-xl font-bold lg:pr-24 md:pr-16'>24/7 ONLINE SUPPORT</h2>
                        <p className=' font-medium pt-2'>We have an efficient customer support system to help students whenever they want. No matter it is urgent or not, we will help you with your assignments.</p>
                    </div>
                </div>


                <div className='group'>
                    <div data-aos='flip-down' className=' group-hover:scale-105  group-hover:shadow-xl transition ease-in duration-200 delay-200 lg:h-[350px] flex flex-col justify-center p-5 bg-gradient-to-b from-emerald-100 to-orange-200 dark:bg-gradient-to-t dark:from-orange-500 dark:to-zinc-900 rounded-xl'>
                        <Image src={'/imgs/downloadyourwork.svg'} width={60} height={60} alt='flawless'></Image>
                        <h2 className='pt-3 text-xl font-bold lg:pr-24 md:pr-16'>DOWNLOAD YOUR WORK</h2>
                        <p className=' font-medium pt-2'>We never miss the deadline urgent or long project; you will receive your work before the deadline mentioned to us.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection