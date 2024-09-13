import Image from 'next/image'
import React from 'react'

function SmallDivider() {
  return (
    <div data-aos='fade-down' data-aos-duration="1500" className='w-full py-5 bg-sky-200'>
        <div className='mx-auto max-w-screen-xl'>
            <div data-aos='fade-up'  className='grid lg:grid-cols-3 grid-cols-1 p-4'>
                <div className='col-span-2'>
                <h1 className='font-semibold text-lg md:text-xl text-zinc-800'>Invest Your Money In Quality</h1>
                <h2 className='pt-2 text-2xl md:text-4xl font-extrabold text-zinc-900'>GET OUTSTANDING DISCOUNT ON YOUR FIRST ORDER</h2>
                <div className='grid md:grid-cols-2 grid-cols-1 mt-4'>
                    <div className='mt-2 w-4/5 bg-white rounded-lg'><input className='py-4 outline-none w-full rounded-lg px-2' type="email" name='email' placeholder='Enter Your Email' /> </div>

                    <div className='mt-2'><button className='bg-orange-500 py-4 px-6 rounded-lg text-white font-medium w-1/2 scale-90 hover:scale-95 lg:scale-95 lg:hover:scale-100 transition ease-in duration-200 delay-200 hover:shadow-xl'> Get a Discount</button> </div>
                </div>

                </div>
                <div className='mt-4'>
                    <div className='flex items-center'>
                        <Image src={'/imgs/collector.png'} width={500} height={500} alt='collector'></Image>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SmallDivider