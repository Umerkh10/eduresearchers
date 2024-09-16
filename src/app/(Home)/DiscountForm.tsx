"use client "

import React, { useEffect, useRef } from 'react';
import EmailAction from '../(backend)/action/formAction';
import { useFormState, useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const DiscountForm: React.FC = () => {
  const [state, dispatch] = useFormState(EmailAction, null)
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
    <div className="max-w-sm mx-auto bg-background rounded-3xl  shadow-lg ">
      <h2 className="text-xl md:text-3xl font-bold text-center p-5">Avail Flat 45% OFF</h2>

      <form ref={formRef} action={dispatch} className="space-y-3 p-4">
        <input
          name='name'
          type="text"
          placeholder="Enter Your Full Name"
          className="w-full px-4 py-1 border border-red-500 rounded-md focus:outline-none focus:border-red-600"
        />
        {state?.info?.name?.map((item, i) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <input
          name='email'
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-1 border border-red-500 rounded-md focus:outline-none focus:border-red-600"
        />
        {state?.info?.email?.map((item, i) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <input
          name='phone'
          type="number"
          placeholder="Enter Your Phone Number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-4 py-1 border border-red-500 rounded-md focus:outline-none focus:border-red-600"
        />
        {state?.info?.phone?.map((item, i) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <div className="pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">PROMO CODE</span>
            <span className="font-bold text-muted-foreground md:text-xl">EU-OFF15</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-red-600">DISCOUNT</span>
            <span className="font-bold text-xl md:text-2xl text-red-600">15%</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 italic ">Start a live chat to know about more ongoing discount offers!</p>


        <CustomButton />
      </form>

    </div>
  );
};

export default DiscountForm;




function CustomButton() {
  const { pending } = useFormStatus()
  return (
    <button
      disabled={pending}
      className="w-full bg-orange-500 text-white flex justify-center items-center py-5 rounded rounded-bl-3xl rounded-br-3xl mt-6 font-semibold hover:bg-orange-600">
      {pending ? <><Loader2 className='animate-spin mr-2 h-5 w-5 ' /> <p>Loading...</p></> : "ENJOY DISCOUNT NOW"}
    </button>
  )
}

