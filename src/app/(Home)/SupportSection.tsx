import Image from 'next/image'
import React from 'react'
import { CarouselSpacing } from './SupportCarousel'
import { MessageCircleIcon, Package } from 'lucide-react'
import Link from 'next/link'

function SupportSection() {
    return (
        <div className='pt-10'>
            <div data-aos='fade-down' data-aos-duration="1500" style={{ backgroundImage: "url('/imgs/support_bg.webp')", backgroundSize: 'cover' }} className='py-10'>
                <div className='mx-auto max-w-screen-xl'>
                    <div className='px-3 md:pt-10 scale-95 md:scale-100'>
                        <h1 className='text-center text-xl md:text-7xl  font-extrabold text-white text-opacity-10 '>Support</h1>
                        <div className=' flex justify-center '>
                            <h2 className='text-lg text-zinc-100 md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>FULFIL ALL THE UNIVERSITY GUIDELINES ACCURATELY TO SAVE YOUR GRADES</h2>
                        </div>
                        <p className='text-zinc-100 font-medium text-center -translate-y-3 md:text-base text-sm'>When your urgent deadline is approaching, and you don’t know how to fulfil all the instructions given by the tutor, buying professional assignment services will best approach.</p>
                        <h2 className='pt-4 font-semibold text-center text-zinc-100 text-lg md:text-3xl'>Why Your Should Hire {process.env.NEXT_PUBLIC_NAME}</h2>
                        <div className='grid lg:grid-cols-2 grid-cols-1 md:p-5 items-center '>
                            <div className=''>
                                
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image loading='eager' src={'/imgs/support-1.webp'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Get a quick and simple order placing method</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image loading='eager' className='lg:-ml-5' src={'/imgs/support-1.webp'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>We are providing one-stop-shop solutions</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image loading='eager' src={'/imgs/support-1.webp'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Get unmatched assignment writing services</p>
                                </div>
                            </div>
                            <div className=''>
                            <div className='pt-5 flex items-center justify-center '>
                                 <Image loading='eager' className='lg:-ml-5' src={'/imgs/support-1.webp'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>100% money-back guarantee and support</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image loading='eager' className='' src={'/imgs/support-1.webp'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Covering all disciplines, technical or complex</p>
                                </div>
                                <div className=' pt-5 flex items-center justify-center '>
                                 <Image loading='eager' className='lg:ml-5' src={'/imgs/support-1.webp'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100 md:text-base text-sm'>Meeting all the requirements as per guidelines</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos='flip-down' className='flex justify-center'>
                        <CarouselSpacing/>
                        </div>
                        <h2 className='pt-4 text-zinc-100 font-semibold text-lg md:text-2xl text-center '>NEED ASSISTANCE? WE'RE HERE FOR YOU 24/7!</h2>
                        <div className='md:flex-row  gap-3  flex flex-col justify-center items-center scale-[.85] md:scale-100 mt-4'>
                        <Link href={'/Order'} className='bg-background flex font-medium py-[13px] px-8 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-zinc-900 dark:border-zinc-300'>
                            <Package className='mr-1'/> Order Now
                        </Link>
                        <Link href={'https://wa.me/3197005034911?text=Hi, I urgently need academic assistance. Could you help me submit my assignment before the deadline?'} target="_blank" rel="noopener noreferrer" className='bg-background flex font-medium items-center py-[13px] px-6 rounded-lg md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 delay-200 border-[2px] border-green-600'>
                            <Image className='mr-2' src={'/imgs/whatsapp.png'} width={25} height={25} alt='whatsapp'></Image> Whatsapp Now
                        </Link>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection