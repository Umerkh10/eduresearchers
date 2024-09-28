import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import PaperType from './PaperType'
import PaperInstruction from './PaperInstruction'
import ContactDetails from './ContactDetails'
import Image from 'next/image'

function Order() {
  return (
    <div className='mx-auto max-w-screen-xl'>
    <div className='my-10 text-4xl font-bold text-center'>Place Your Order In Simple Steps</div>
    <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 p-4'>
        <div className='col-span-2'>
        <Tabs defaultValue="type" className="">
      <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
        <TabsTrigger value="type">Paper Type</TabsTrigger>
        <TabsTrigger value="instruction">Paper Instruction</TabsTrigger>
        <TabsTrigger value="details">Contact Details</TabsTrigger>
      </TabsList>
      <TabsContent value="type">
        <PaperType/>
      </TabsContent>
      <TabsContent value="instruction">
        <PaperInstruction/>
      </TabsContent>
      <TabsContent value='details'>
        <ContactDetails/>
      </TabsContent>
    </Tabs>
        </div>

        <div>
            <div className='py-5 px-2 bg-orange-500 rounded-2xl'>
                <div className='text-xl md:text-3xl text-center py-3 font-bold '>Order Summary</div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Topic Of Paper</div>
                    <div>------------------------</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Referencing Style</div>
                    <div>Harvard Referencing</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Paper Standard</div>
                    <div>Standard Quality</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Deadline</div>
                    <div>12 Hours</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>No Of Pages</div>
                    <div>1</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Word Count</div>
                    <div>250</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Price Per Page</div>
                    <div>£ 24.00</div>
                </div>
                <div className='flex justify-between items-center px-3 py-3 font-semibold'>
                    <div>Total Price</div>
                    <div>£ 24.00</div>
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