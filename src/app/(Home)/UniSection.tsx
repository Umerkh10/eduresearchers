import Image from 'next/image'
import React from 'react'

function UniSection() {
  return (
    <div className='mx-auto max-w-screen-xl' data-aos='fade-up' data-aos-duration="1000">
        <div className='flex flex-col lg:flex-row items-center justify-evenly lg:gap-0 gap-4 py-4'>
            <p className='w-[250px] font-semibold md:text-base text-sm'>90% Of our experts studied at top-rated Universities </p>
            <Image src={'/imgs/princeton.png'} width={120} height={100} alt='uni'></Image>
            <Image src={'/imgs/stanford.png'} width={120} height={100} alt='uni'></Image>
            <Image src={'/imgs/oxford-univ.png'} width={120} height={100} alt='uni'></Image>
            <Image src={'/imgs/british.png'} width={120} height={100} alt='uni'></Image>
            <Image src={'/imgs/alberta.png'} width={120} height={100} alt='uni'></Image>
        </div>
    </div>
  )
}

export default UniSection