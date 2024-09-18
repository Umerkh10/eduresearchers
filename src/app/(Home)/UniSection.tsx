import Image from 'next/image'
import React from 'react'

function UniSection() {
  return (
    <div className='mx-auto max-w-screen-xl' data-aos='fade-up' data-aos-duration="1000">
        <div className='grid lg:grid-cols-7 grid-cols-2 lg:gap-0 gap-2 py-4 px-3 items-center'>
          <div className='col-span-2'>
            <p className=' font-semibold md:text-base text-sm'>90% Of our experts studied at top-rated Universities </p>
            </div>
            <div><Image loading='eager' src={'/imgs/uni_1.png'} width={130} height={100} alt='uni'></Image></div>
            <div><Image loading='eager' src={'/imgs/uni_2.png'} width={120} height={100} alt='uni'></Image></div>
            <div> <Image loading='eager' src={'/imgs/uni_3.png'} width={120} height={100} alt='uni'></Image></div>
           <div><Image loading='eager' src={'/imgs/uni_4.png'} width={120} height={100} alt='uni'></Image></div>
            <div className='hidden md:block'><Image loading='eager' src={'/imgs/uni_5.png'} width={120} height={100} alt='uni'></Image></div>
            
        </div>
    </div>
  )
}

export default UniSection