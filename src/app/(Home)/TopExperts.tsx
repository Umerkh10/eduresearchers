import { MessageCircleIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function TopExperts() {
    return (
        <div className='mx-auto max-w-screen-xl'>
            <div className='mt-10'>
                <h1 className='text-center text-4xl md:text-7xl text-muted font-extrabold '>TOP EXPERTS</h1>
                <div className=' flex justify-center '>
                    <h2 className='text-xl md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>MEET URGENT DEADLINE WITH PROFESSIONAL ASSISTANCE</h2>
                </div>
                <p className='text-muted-foreground font-medium text-center -translate-y-3 md:-translate-y-7  text-sm lg:px-56 '>WE HAVE WRITERS AND EDITORS FROM DIFFERENT DISCIPLINES TO MEET STUDENTS' UNIQUE REQUIREMENTS. WHETHER IT IS SCIENCE OR ACCOUNTING, OUR EXPERTS WILL DEAL WITH IT.</p>

                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 p-4'>
                    <div className='py-3 pr-5'>
                        <div className='h-[600px] md:h-[800px] bg-sky-50 dark:bg-transparent border-[2px] border-dashed rounded rounded-tr-full rounded-br-full  '>
                            <div className='rounded-full w-16 h-16 bg-yellow-400 -translate-y-5 translate-x-3'>
                                <Image src={'/imgs/10.png'} width={64} height={64} alt='top expert'></Image>
                            </div>
                            <div className='rounded-full w-20 h-20 bg-yellow-400 translate-y-12 translate-x-60 
                             lg:translate-x-60 xl:translate-x-64 md:translate-x-[575px] '>
                                <Image src={'/imgs/9.png'} width={80} height={80} alt='top expert'></Image>
                            </div>
                            <div className='rounded-full w-28 h-28 bg-yellow-400 translate-y-32 md:translate-y-40 translate-x-64 lg:translate-x-64 xl:translate-x-80 md:translate-x-[635px] '>
                                <Image src={'/imgs/8.png'} width={120} height={120} alt='top expert'></Image>
                            </div>
                            <div className='rounded-full w-20 h-20 bg-yellow-400 translate-y-48 md:translate-y-80 translate-x-60 lg:translate-x-64 xl:translate-x-72 md:translate-x-[600px] '>
                                <Image src={'/imgs/7.png'} width={80} height={80} alt='top expert'></Image>
                            </div>
                            <div className='rounded-full w-16 h-16 bg-yellow-400 translate-y-[225px] md:translate-y-[420px] translate-x-3'>
                                <Image src={'/imgs/6.png'} width={64} height={64} alt='top expert'></Image>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='pt-10 lg:pt-64 lg:ml-5 px-5 '>
                            <div className='flex justify-between items-center'>
                                <span className='text-2xl font-extrabold text-zinc-800 dark:text-zinc-100'>JERRY GENTRY</span>
                                <span className='rounded-full px-3 py-1 bg-sky-100 dark:bg-zinc-800 dark:text-white font-medium'>Master's</span>
                            </div>
                            <p className='pt-10 font-medium text-muted-foreground '>Math, Statistics, Engineering</p>
                            <div className='pt-5 flex items-center text-muted-foreground font-medium '>
                                <Image className='mr-2' src={'/imgs/thumbsup.svg'} width={20} height={20} alt='thumb' ></Image>
                                809 completed orders
                            </div>
                            <div className='pt-2 flex items-center text-muted-foreground font-medium '>
                                <Image className='mr-2' src={'/imgs/eye.svg'} width={20} height={20} alt='thumb' ></Image>
                                714 reviews
                            </div>
                            <button className='bg-zinc-800 dark:bg-zinc-100 flex items-center justify-center 
                            py-4 w-full rounded-lg mt-5 text-white dark:text-zinc-900 font-medium'>
                              <MessageCircleIcon className='mr-1'/>  Get Started</button>
                              <div className='text-muted-foreground font-medium text-center pt-2'>Prices start at just <span className='text-bold'>£11/page.</span></div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='pt-10 lg:pt-64 lg:ml-5 px-5'>
                            <div className='bg-sky-50 dark:bg-transparent rounded-lg p-5'>
                            <h2 className='text-center text-xl text-orange-500 font-bold '>IMPORTANT FACTS</h2>
                            <div className='mt-4 flex items-center'>
                                <Image src={'/imgs/fact-1.svg'} width={25} height={25} alt='fact' ></Image>
                                <p className='text-muted-foreground font-medium text-sm ml-2'>All of our experts hold MAs, MBAs & PhDs</p>
                            </div>
                            <div className='mt-4 flex items-center'>
                                <Image src={'/imgs/fact-2.svg'} width={25} height={25} alt='fact' ></Image>
                                <p className='text-muted-foreground font-medium text-sm ml-2'>We hire only graduates with exceptional records</p>
                            </div>
                            <div className='mt-4 flex items-center'>
                                <Image src={'/imgs/fact-3.svg'} width={25} height={25} alt='fact' ></Image>
                                <p className='text-muted-foreground font-medium text-sm ml-2'>Our youngest expert has 6-
                                year experience</p>
                            </div>
                            <div className='mt-4 flex items-center'>
                                <Image src={'/imgs/fact-4.svg'} width={25} height={25} alt='fact' ></Image>
                                <p className='text-muted-foreground font-medium text-sm ml-2'>We have at least 250
                                available experts 24/7</p>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopExperts