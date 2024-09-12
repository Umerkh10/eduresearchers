import Image from 'next/image'
import React from 'react'
import { CarouselSpacing } from './SupportCarousel'
import { MessageCircleIcon } from 'lucide-react'

function SupportSection() {
    return (
        <div className='pt-10'>
            <div style={{ backgroundImage: "url('/imgs/support_bg.jpg')", backgroundSize: 'cover' }} className='py-10'>
                <div className='mx-auto max-w-screen-xl'>
                    <div className='pt-10'>
                        <h1 className='text-center text-4xl md:text-7xl  font-extrabold text-white text-opacity-10 '>Support</h1>
                        <div className=' flex justify-center '>
                            <h2 className='text-xl text-zinc-100 md:text-3xl w-[600px] -translate-y-6 md:-translate-y-10  font-extrabold text-center'>FULFIL ALL THE UNIVERSITY GUIDELINES ACCURATELY TO SAVE YOUR GRADES</h2>
                        </div>
                        <p className='text-zinc-100 font-medium text-center -translate-y-3'>When your urgent to fulfil all the instructions given by the tutor, buying professional assignment services will best approach.</p>
                        <h2 className='pt-4 font-semibold text-center text-zinc-100 text-3xl'>Why Your Should Hire {process.env.NEXT_PUBLIC_NAME}</h2>
                        <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
                            <div className=''>
                                
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image src={'/imgs/support-1.svg'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100'>Get a quick and simple order placing method</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image className='lg:-ml-5' src={'/imgs/support-1.svg'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100'>We are providing one-stop-shop solutions</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image src={'/imgs/support-1.svg'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100'>Get unmatched assignment writing services</p>
                                </div>
                            </div>
                            <div className=''>
                            <div className='pt-5 flex items-center justify-center '>
                                 <Image className='lg:-ml-5' src={'/imgs/support-1.svg'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100'>100% money-back guarantee and support</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image className='' src={'/imgs/support-1.svg'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100'>Covering all disciplines, technical or complex</p>
                                </div>
                                <div className='pt-5 flex items-center justify-center '>
                                 <Image className='lg:ml-5' src={'/imgs/support-1.svg'} width={30} height={30} alt='support'></Image>
                                 <p className='ml-2 font-medium text-zinc-100'>Meeting all the requirements as per guidelines</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center'>
                        <CarouselSpacing/>
                        </div>
                        <h2 className='pt-4 text-zinc-100 font-semibold text-2xl text-center '>NEED ASSISTANCE? WE'RE HERE FOR YOU 24/7!</h2>
                        <div className='flex justify-center items-center mt-4'>
                        <button className='bg-zinc-900 flex text-white py-3 px-6 rounded-lg'>
                            <MessageCircleIcon className='mr-1'/> Get Started
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SupportSection