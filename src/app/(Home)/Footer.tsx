import { MountainSnowIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='mt-5 py-10 bg-gradient-to-b from-emerald-50 to-orange-200 dark:bg-gradient-to-t dark:from-orange-900 dark:to-zinc-900'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 pt-10'>
                    <div className=''>
                        <Link href="/" className="flex items-center gap-2" prefetch={false}>
                            <MountainSnowIcon className="h-6 w-6" />
                            <span className="text-2xl font-bold text-orange-500 ">{process.env.NEXT_PUBLIC_NAME}</span>
                        </Link>
                        <p className='pt-4 text-muted-foreground font-medium text-sm'>© 2020 - 2023 {process.env.NEXT_PUBLIC_NAME} All rights reserved.</p>
                        <p className='pt-2 text-muted-foreground font-medium text-sm'>Terms & Condition | Privacy Policy <br /> support@eduresearchers.com </p>

                    </div>
                    <div className=''>
                        <ul className='pl-9 gap-2 font-medium  text-muted-foreground '>
                            <li className='p-2 hover:text-zinc-800 dark:hover:text-white ' >Assignment</li>
                            <li className='p-2 hover:text-zinc-800 dark:hover:text-white ' >Homework</li>
                            <li className='p-2 hover:text-zinc-800 dark:hover:text-white ' >Essay</li>
                            <li className='p-2 hover:text-zinc-800 dark:hover:text-white ' >Research Paper</li>
                            <li className='p-2 hover:text-zinc-800 dark:hover:text-white ' >Dissertation</li>
                            <li className='p-2 hover:text-zinc-800 dark:hover:text-white ' >Other</li>
                        </ul>
                    </div>
                    <div className=''>
                        <div className='pt-3 text-muted-foreground font-medium'>Follow Us</div>
                        <Image className='mt-3' src={'/imgs/footer-1.svg'} width={80} height={80} alt='likes'></Image>
                        <p className='bg-blue-500 flex w-2/3 text-center py-1 px-2 rounded-full text-white font-medium text-sm mt-2 '> <Twitter className='mr-1'/> Follow {process.env.NEXT_PUBLIC_NAME} </p>
                        <Image className='mt-4' src={'/imgs/dmca_protected_sml_120m.png'} width={120} height={120} alt='dmca' ></Image>
                        <div className='pt-5 text-muted-foreground font-medium'> We accept</div>
                        <Image className='pt-3' src={'/imgs/pay-cards.png'} width={120} height={100} alt='pay' ></Image>

                    </div>


                    <div className=''>
                        <Image className='mt-3' src={'/imgs/rating.svg'} width={120} height={120} alt='likes'></Image>
                    <div className='pt-3 text-muted-foreground font-medium'>"Excellent" 9.7/10 </div>
                 
                        <Image className='mt-4' src={'/imgs/a-rating.png'} width={100} height={100} alt='dmca' ></Image>
       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer