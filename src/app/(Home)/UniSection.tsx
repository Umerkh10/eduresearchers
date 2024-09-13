import Image from 'next/image'
import React from 'react'

function UniSection() {
  return (
    <div className='mx-auto max-w-screen-xl' data-aos='fade-up' data-aos-duration="1000">
        <div className='grid lg:grid-cols-7 grid-cols-2 lg:gap-0 gap-2 py-4 px-3'>
          <div className='col-span-2'>
            <p className=' font-semibold md:text-base text-sm'>90% Of our experts studied at top-rated Universities </p>
            </div>
            <div><Image src={'/imgs/princeton.png'} width={120} height={100} alt='uni'></Image></div>
            <div><Image src={'/imgs/stanford.png'} width={120} height={100} alt='uni'></Image></div>
            <div> <Image src={'/imgs/oxford-univ.png'} width={120} height={100} alt='uni'></Image></div>
           <div><Image src={'/imgs/british.png'} width={120} height={100} alt='uni'></Image></div>
            <div className='hidden md:block'><Image src={'/imgs/alberta.png'} width={120} height={100} alt='uni'></Image></div>
            
        </div>
    </div>
  )
}

export default UniSection