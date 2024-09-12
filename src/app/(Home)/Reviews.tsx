import Image from 'next/image'
import React from 'react'

function Reviews() {
  return (
    <div className='mt-10'>
        <div className='mx-auto max-w-screen-xl'>
            <div className='grid lg:grid-cols-2 grid-cols-1 p-5'>
            <div className='p-10'>
                <h1 className='font-extrabold lg:text-5xl text-3xl '>SAVING YOUR GRADES IS OUR PRIORITY</h1>
                <p className='pt-5 text-muted-foreground font-medium'>We are serving students globally to help all students reach their goals. You can trust our expertise and fulfil your dream.</p>
                <div className='mt-10'>
                    <Image src={'/imgs/rating.svg'} width={120} height={120} alt='rating' ></Image>
                </div>
                <p className='text-muted-foreground font-medium pt-2 -ml-3'>“Excellent” - 9.7/10</p>
            </div>
            <div className=''></div>
            </div>
        </div>
    </div>
  )
}

export default Reviews