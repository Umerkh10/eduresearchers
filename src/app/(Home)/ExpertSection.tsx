import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Check, CheckCheckIcon, MessageCircleDashed, MessageCircleIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function ExpertSection() {
  return (
    <div className='max-w-screen-xl mx-auto mt-10' >
        <div className='grid lg:grid-cols-2 grid-cols-1 p-5 rounded-xl bg-slate-100 dark:bg-zinc-900'>
            <div className=' '>
                <h1 className='text-4xl font-extrabold pt-5'>What Our Experts Can Do</h1>
                <div className='pt-5'>
                <Tabs defaultValue="Homework" className="">
                <TabsList>
                    <TabsTrigger value="Homework">Homework</TabsTrigger>
                    <TabsTrigger value="Assignment">Assignment</TabsTrigger>
                    <TabsTrigger value="Research papers">Research papers</TabsTrigger>
                    <TabsTrigger value="Assignment Editing">Assignment Editing</TabsTrigger>
                    <TabsTrigger value="Other">Other</TabsTrigger>
                </TabsList>

                <TabsContent className='p-4' value="Homework">
                    <h1 className='text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5 '>Homework</h1>
                    <p className=' font-medium text-muted-foreground lg:pr-44'>We understand your academic career will be filled with complex homework tasks, but don't take stress to complete it efficiently.</p>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>More than 50 subjects covered
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>24-7 services available
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>Get unlimited revisions
                    </div>
                    <button className='flex items-center bg-zinc-900 dark:bg-zinc-100 text-zinc-100 
                    dark:text-zinc-800 font-bold rounded-xl py-3 px-10 mt-10'>
                        <MessageCircleIcon className='mr-1'/>GET HELP
                    </button>
                    <div className='text-muted-foreground text-sm ml-4 pt-2'>its <span className='font-bold '>100%</span> Confidential</div>
                </TabsContent>


                <TabsContent className='p-4' value="Assignment">
                <h1 className='text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5 '>Assignment</h1>
                    <p className=' font-medium text-muted-foreground lg:pr-44'>We understand your academic career will be filled with complex homework tasks, but don't take stress to complete it efficiently.</p>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>More than 50 subjects covered
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>24-7 services available
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>Get unlimited revisions
                    </div>
                    <button className='flex items-center bg-zinc-900 dark:bg-zinc-100 text-zinc-100 
                    dark:text-zinc-800 font-bold rounded-xl py-3 px-10 mt-10'>
                        <MessageCircleIcon className='mr-1'/>GET HELP
                    </button>
                    <div className='text-muted-foreground text-sm ml-4 pt-2'>its <span className='font-bold '>100%</span> Confidential</div>
                </TabsContent>


                <TabsContent className='p-4' value="Research papers">
                <h1 className='text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5 '>Research Papers</h1>
                    <p className=' font-medium text-muted-foreground lg:pr-44'>We understand your academic career will be filled with complex homework tasks, but don't take stress to complete it efficiently.</p>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>More than 50 subjects covered
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>24-7 services available
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>Get unlimited revisions
                    </div>
                    <button className='flex items-center bg-zinc-900 dark:bg-zinc-100 text-zinc-100 
                    dark:text-zinc-800 font-bold rounded-xl py-3 px-10 mt-10'>
                        <MessageCircleIcon className='mr-1'/>GET HELP
                    </button>
                    <div className='text-muted-foreground text-sm ml-4 pt-2'>its <span className='font-bold '>100%</span> Confidential</div>
                </TabsContent>

                <TabsContent className='p-4' value="Assignment Editing">
                <h1 className='text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5 '>Assignment Editing</h1>
                    <p className=' font-medium text-muted-foreground lg:pr-44'>We understand your academic career will be filled with complex homework tasks, but don't take stress to complete it efficiently.</p>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>More than 50 subjects covered
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>24-7 services available
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>Get unlimited revisions
                    </div>
                    <button className='flex items-center bg-zinc-900 dark:bg-zinc-100 text-zinc-100 
                    dark:text-zinc-800 font-bold rounded-xl py-3 px-10 mt-10'>
                        <MessageCircleIcon className='mr-1'/>GET HELP
                    </button>
                    <div className='text-muted-foreground text-sm ml-4 pt-2'>its <span className='font-bold '>100%</span> Confidential</div>
                </TabsContent>

                <TabsContent className='p-4' value="Other">
                <h1 className='text-2xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5 '>Other</h1>
                    <p className=' font-medium text-muted-foreground lg:pr-44'>We understand your academic career will be filled with complex homework tasks, but don't take stress to complete it efficiently.</p>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>More than 50 subjects covered
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>24-7 services available
                    </div>
                    <div className='flex items-center mt-3 font-medium text-muted-foreground'>
                        <CheckCheckIcon className='mr-2 text-green-500'/>Get unlimited revisions
                    </div>
                    <button className='flex items-center bg-zinc-900 dark:bg-zinc-100 text-zinc-100 
                    dark:text-zinc-800 font-bold rounded-xl py-3 px-10 mt-10'>
                        <MessageCircleIcon className='mr-1'/>GET HELP
                    </button>
                    <div className='text-muted-foreground text-sm ml-4 pt-2'>its <span className='font-bold '>100%</span> Confidential</div>
                </TabsContent>

                </Tabs>
                </div>
            </div>
            <div className='pt-5'>
                <div className='rounded-xl mt-5'>
                <Carousel>
                <CarouselContent>
                    <CarouselItem>
                        <Image src={'/imgs/messenger-slide-1.png'} width={650} height={600} alt='tab'></Image>
                    </CarouselItem>
                    <CarouselItem>
                    <Image src={'/imgs/messenger-slide-2.png'} width={650} height={600} alt='tab'></Image>
                    </CarouselItem>
                    <CarouselItem>
                    <Image src={'/imgs/messenger-slide-3.png'} width={650} height={600} alt='tab'></Image>
                    </CarouselItem>
                    <CarouselItem>
                    <Image src={'/imgs/messenger-slide-4.png'} width={650} height={600} alt='tab'></Image>
                    </CarouselItem>
                    <CarouselItem>
                    <Image src={'/imgs/messenger-slide-5.png'} width={650} height={600} alt='tab'></Image>
                    </CarouselItem>
                </CarouselContent>
     
                </Carousel>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpertSection