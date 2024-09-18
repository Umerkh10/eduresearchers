import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { useFormState } from 'react-dom'
import EmailAction2 from '../(backend)/action/emailAction2'
import { toast } from 'sonner'
import { useFormStatus } from 'react-dom'
import { Loader } from 'lucide-react'

function SmallDivider() {
    const [state, dispatch] = useFormState(EmailAction2, null)
    const formRef = useRef<HTMLFormElement>(null)
    useEffect(() => {
        if (state?.success) {
            formRef.current?.reset()
            toast.success(state.success)
        }
        else if (state?.error) {
            toast.error(state.error)
        }
    }, [state])
    return (
        <div data-aos='fade-down' data-aos-duration="1500" className='w-full py-5 bg-sky-200'>
            <div className='mx-auto max-w-screen-xl'>
                <div data-aos='fade-up' className='grid lg:grid-cols-3 grid-cols-1 p-4'>
                    <div className='col-span-2'>
                        <h1 className='font-semibold text-lg md:text-xl text-center md:text-start text-zinc-800'>Invest Your Money In Quality</h1>
                        <h2 className='pt-2 text-xl md:text-4xl font-extrabold text-zinc-900 text-center md:text-start '>GET OUTSTANDING DISCOUNT ON YOUR FIRST ORDER</h2>

                        <form ref={formRef} action={dispatch}>
                            <div className='grid md:grid-cols-2 grid-cols-1  mt-4'>
                                <div className='mt-2 w-4/5 bg-white rounded-lg md:ml-0 ml-10'>
                                <input className='py-4 outline-none w-full rounded-lg px-2' type="email" name='email' placeholder='Enter Your Email' />
                                    {state?.info?.email?.map((item, i) => (
                                        <p key={i} className='text-red-600 text-sm'>{item}</p>
                                    ))} </div>

                                <div className='mt-2 md:ml-0 ml-20'><DividerButton /> </div>
                            </div>
                        </form>


                    </div>
                    <div className='mt-4'>
                        <div className='flex items-center'>
                            <Image loading='eager' src={'/imgs/collector.webp'} width={500} height={500} alt='collector'></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallDivider

function DividerButton() {
    const { pending } = useFormStatus()
    return (
        <button
            disabled={pending}
            className='flex justify-center bg-orange-500 py-4 px-6 rounded-lg text-white font-medium w-3/4 md:w-1/2 md:-ml-5 scale-90 hover:scale-95 lg:scale-95 lg:hover:scale-100 transition ease-in duration-200 delay-200 hover:shadow-xl'> {pending ? <><Loader className='animate-spin mr-2 h-5 w-5 ' /> <p>Loading...</p></> : "Get A Discount"}</button>
    )
}
