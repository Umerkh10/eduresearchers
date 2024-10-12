"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React, { useState } from 'react'

import Image from 'next/image'
import { useTopic } from '../TopicContext'

import dynamic from 'next/dynamic'
import PaperType from './PaperType'
import PaperInstruction from './PaperInstruction'
import ContactDetails from './ContactDetails'
const Modal = dynamic(() => import('./Modal'), {
  ssr: false, 
  loading: () => <p>Loading...</p>,
});

function Order() {
    const { topic,selectedValue ,wordCount,quality,deadline,referencing,pricePerPage,totalPrice,currency} = useTopic(); // Get topic from context
    const [activeTab, setActiveTab] = useState('type');  

    const handleNext = () => {
      setActiveTab('instruction');  
    };
  
    const handleNextToDetails = () => {
      setActiveTab('details');  
    };
  
    const handlePreviousToInstruction = () => {
      setActiveTab('instruction');  
    };
  
    const handlePreviousToType = () => {
      setActiveTab('type');  
    };
    return (
    <div className='mx-auto max-w-screen-xl'>
    <div className='my-10 text-4xl font-bold text-center'>Place Your Order In Simple Steps</div>
    <Modal/>
    
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-4'>
        <div className='col-span-2'>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="">
      <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
        <TabsTrigger value="type">Paper Type</TabsTrigger>
        <TabsTrigger value="instruction">Paper Instruction</TabsTrigger>
        <TabsTrigger value="details">Contact Details</TabsTrigger>
      </TabsList>
      <TabsContent value="type">
        <PaperType onNext={handleNext}/>
      </TabsContent>
      <TabsContent value="instruction">
        <PaperInstruction onNext={handleNextToDetails} onPrevious={handlePreviousToType}/>
      </TabsContent>
      <TabsContent value='details'>
        <ContactDetails  onPrevious={handlePreviousToInstruction}/>
      </TabsContent>
    </Tabs>
        </div>

        <div>
            <div className='py-5 px-2 bg-gradient-to-b from-emerald-50 to-orange-200 dark:bg-gradient-to-t dark:from-orange-900 dark:via-orange-950 dark:to-zinc-950 rounded-2xl overflow-hidden'>
                <div className='text-xl md:text-3xl text-center py-3 font-bold '>Order Summary</div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Topic Of Paper</div>
                    <div>{topic || '------------------------'}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Referencing Style</div>
                    <div>{referencing}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Paper Standard</div>
                    <div>{quality}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Deadline</div>
                    <div>{deadline}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>No Of Pages</div>
                    <div>{selectedValue}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Word Count</div>
                    <div>{wordCount}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Price Per Page</div>
                    <div>{currency} {pricePerPage}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Total Price</div>
                    <div>{currency} {totalPrice}</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Turnitin Report</div>
                    <div>Free</div>
                </div>
                <div className='flex justify-center py-3 px-3'>
                    <Image src={'/imgs/card-dissertationist.webp'} width={400} height={200} alt='card'></Image>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Order