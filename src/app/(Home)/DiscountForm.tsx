"use client"

import React, { useEffect, useRef, useState } from 'react';
import EmailAction from '../(backend)/action/formAction';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

const DiscountForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [currentText, setCurrentText] = useState<string>('Avail 45% OFF');
  const texts = [
    'Get a Free Quote Now',
    'Our Experts Are Online',
    'Avail Flat 45% Discount Now',
    'We Accept All Subjects',
    'Urgent Deadline? Fill This Form',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((prevText) => {
        const currentIndex = texts.indexOf(prevText);
        return texts[(currentIndex + 1) % texts.length];
      });
    }, 4000); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {

    return () => {
      localStorage.removeItem("name");
      localStorage.removeItem("number")
    };
  }, []);

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [pending, setPending] = useState(false)
  const [errorObj, setErrorObj] = useState<any>({})
  const router = useRouter()


  const handleSubmit = (e: any) => {
    setPending(true)
    e.preventDefault()
    localStorage.setItem("name", name)
    localStorage.setItem("number", number)

    const sendData = async () => {
      const res = await EmailAction(name, email, number)
      setPending(false)
      if (res?.success) {
        formRef.current?.reset();
        router.push("/Thank")
      } else if (res?.error) {
        toast.error(res.error);
      } else if (res?.info) {
        setErrorObj(res.info)
      }
    }
    sendData()

  }


  return (
    <div className="max-w-sm mx-auto bg-background rounded-3xl shadow-lg scale-90 md:scale-100">
      <div className='rounded rounded-tr-3xl rounded-tl-3xl bg-orange-200 dark:bg-orange-500'>
        <h2 className="text-[21px]  font-bold p-5 typing-animation">
          {currentText}
        </h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 p-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='name'
          type="text"
          placeholder="Enter Your Full Name"
          className="w-full px-4 py-1 border border-orange-400 rounded-md focus:outline-none focus:border-orange-600"
        />
        {errorObj?.name?.map((item: any, i: any) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-1 border border-orange-400 rounded-md focus:outline-none focus:border-orange-600"
        />
        {errorObj?.email?.map((item: any, i: any) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          name='phone'
          type="number"
          placeholder="Enter Your Phone Number"
          className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-full px-4 py-1 border border-orange-400 rounded-md focus:outline-none focus:border-orange-600"
        />
        {errorObj?.phone?.map((item: any, i: any) => (
          <p key={i} className='text-red-600 text-sm'>{item}</p>
        ))}
        <div className="pt-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm">PROMO CODE</span>
            <span className="font-bold text-muted-foreground md:text-xl">EU-OFF45</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-bold text-orange-600">DISCOUNT</span>
            <span className="font-bold text-xl md:text-2xl text-orange-600">45%</span>
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 italic">Start a live chat to know about more ongoing discount offers!</p>

        <button
          onClick={handleSubmit}
          disabled={pending}
          className="w-full bg-orange-500 text-white flex justify-center items-center py-5 rounded rounded-bl-3xl rounded-br-3xl mt-6 font-semibold hover:bg-orange-600 transition ease-in duration-200 delay-200"
        >
          {pending ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" /> <p>Loading...</p>
            </>
          ) : (
            "ENJOY DISCOUNT NOW"
          )}
        </button>
      </form>
    </div>
  );
};

export default DiscountForm;

