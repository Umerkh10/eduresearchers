import Image from 'next/image'
import React from 'react'
import ReviewCarousel from './ReviewCarousel'

function Reviews() {
  return (
    <div id='review' className='mt-10'>
        <div data-aos='fade-down' data-aos-duration="1500" className='mx-auto max-w-screen-xl'>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-2'>
            <div data-aos='flip-down' className='p-3 lg:p-10'>
                <h1 className='font-extrabold lg:text-5xl text-2xl text-center md:text-start '>SAVING YOUR GRADES IS OUR PRIORITY</h1>
                <p className='pt-5 text-muted-foreground font-medium text-center md:text-start'>We are serving students globally to help all students reach their goals. You can trust our expertise and fulfil your dream.</p>
                <div className='md:block flex justify-center items-center mt-10'>
                    <Image src={'/imgs/rating.svg'} width={120} height={120} alt='rating' ></Image>
                </div>
                <p className='text-muted-foreground font-medium text-center md:text-start pt-2 -ml-3'>“Excellent” - 9.7/10</p>
            </div>
            <div data-aos='flip-up' className='p-3 lg:p-10'>
                <ReviewCarousel/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews