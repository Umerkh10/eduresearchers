import { MountainSnowIcon, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const links = [
    { href: '/#why-us', label: 'Why Us?' },
    { href: '/#service', label: 'Our Services' },
    { href: '/#howitworks', label: 'How it Works' },
    { href: '/#topexpert', label: 'Top Experts' },
    { href: '/#review', label: 'Reviews' },
    { href: '/#faq', label: 'FAQs' },
    { href: '/Order', label: 'Order Now' },
  ];

function Footer() {
    return (
        <div className=' py-10 bg-gradient-to-b from-emerald-50 to-orange-200 dark:bg-gradient-to-t dark:from-orange-900  dark:to-zinc-950'>
            <div className='mx-auto max-w-screen-xl'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 px-4 pt-10'>
                    <div className=''>
                        <Link href="/" className="flex items-center gap-2" prefetch={false}>
                            <Image src={'/imgs/edu-logo.png'} width={32} height={32} alt='edu'></Image>
                            <span className="md:text-2xl text-lg font-bold text-orange-500 ">{process.env.NEXT_PUBLIC_NAME}</span>
                        </Link>
                        <p className='pt-4 text-muted-foreground font-medium text-sm'>© 2020 - 2024 {process.env.NEXT_PUBLIC_NAME} All rights reserved.</p>
                        <p className='pt-2 text-muted-foreground font-medium text-sm'>Terms & Condition | Privacy Policy <br /> support@eduresearchers.com </p>

                    </div>
                    <div>
                        <ul className='lg:pl-9 gap-2 font-medium text-sm md:text-base text-muted-foreground'>
                            {links.map((link, index) => (
                                <li key={index} className='p-2 hover:text-zinc-800 dark:hover:text-white'>
                                    <Link href={link.href}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=''>
                        <div className='pt-3 text-muted-foreground font-medium '>Follow Us</div>
                        <Image className='mt-4' src={'/imgs/footer-1.webp'} width={80} height={80} alt='likes'></Image>
                        <p className='bg-blue-500 flex w-3/4 text-center py-1 px-2 rounded-full text-white font-medium text-sm mt-2 '> <Twitter className='mr-1' /> Follow {process.env.NEXT_PUBLIC_NAME} </p>
                        <Image className='mt-4' src={'/imgs/dmca_protected_sml_120m.webp'} width={120} height={120} alt='dmca' ></Image>
                        <div className='pt-5 text-muted-foreground font-medium'> We accept</div>
                        <Image className='pt-3' src={'/imgs/pay-cards.webp'} width={120} height={100} alt='pay' ></Image>

                    </div>


                    <div className=''>
                        <Image className='mt-3' src={'/imgs/rating.webp'} width={120} height={120} alt='likes'></Image>
                        <div className='pt-3 text-muted-foreground font-medium'>"Excellent" 9.7/10 </div>

                        <Image className='mt-4 rounded-xl' src={'/imgs/a-rating.webp'} width={100} height={100} alt='dmca' ></Image>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer