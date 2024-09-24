import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCheckIcon, MessageCircleIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const tabContent = [
  {
    value: 'Homework',
    title: 'Homework',
    description: "We understand your academic career will be filled with complex homework tasks, but don't take stress to complete it efficiently.",
  },
  {
    value: 'Assignment',
    title: 'Assignment',
    description: 'We have a team of writers to complete your complex assignment before the deadline with quality, no matter the subject.',
  },
  {
    value: 'Research papers',
    title: 'Research Papers',
    description: 'Looking for a professional writer to deal with scientific research papers? Look, nowhere we are here to provide your best research paper writing.',
  },
  {
    value: 'Assignment Editing',
    title: 'Assignment Editing',
    description: "Completed assignment, but not sure if it is perfect or not? Don’t take the stress. We have a quality reviewer to check your assignment work and edit it accordingly.",
  },
  {
    value: 'Other',
    title: 'Other',
    description: `Stuck with your thesis or dissertation work? We at ${process.env.NEXT_PUBLIC_NAME} deal with all types of research writing projects. Give us the requirement, and get assistance.`,
  },
]

function ExpertSection() {
  const handleGetStartedClick = () => {
    // Ensure Tawk_API is loaded and available
    if (window.Tawk_API) {
      window.Tawk_API.toggle(); // This will toggle the chat widget
    }
  };
  return (
    <div id='service' className='max-w-screen-xl mx-auto mt-4 md:mt-10'>
      <div data-aos='fade-down' data-aos-duration="1500" className='grid lg:grid-cols-2 grid-cols-1 p-5 rounded-xl bg-slate-100 dark:bg-zinc-900 '>
        <div data-aos='zoom-in'>
          <h1 className='md:text-4xl text-xl text-center md:text-start scale-90 md:scale-100 font-extrabold pt-5'>What Our Experts Can Do</h1>
          <div className='md:pt-5 scale-90 md:scale-100'>
            <Tabs defaultValue="Homework">
              <TabsList>
                {tabContent.map(({ value }) => (
                  <TabsTrigger key={value} value={value}>{value}</TabsTrigger>
                ))}
              </TabsList>
              {tabContent.map(({ value, title, description }) => (
                <TabsContent key={value} className='p-4 ' value={value}>
                  <h1 className='text-xl font-extrabold text-zinc-800 dark:text-zinc-100 py-5'>{title}</h1>
                  <p className='font-medium text-muted-foreground lg:pr-44'>{description}</p>
                  <div className='flex items-center text-sm md:text-base mt-3 font-medium text-muted-foreground'>
                    <CheckCheckIcon className='mr-2 text-green-500' /> More than 50 subjects covered
                  </div>
                  <div className='flex items-center text-sm md:text-base mt-3 font-medium text-muted-foreground'>
                    <CheckCheckIcon className='mr-2 text-green-500' /> 24-7 services available
                  </div>
                  <div className='flex items-center text-sm md:text-base mt-3 font-medium text-muted-foreground'>
                    <CheckCheckIcon className='mr-2 text-green-500' /> Get unlimited revisions
                  </div>
                  <button onClick={handleGetStartedClick} className='flex items-center md:hover:scale-105 md:scale-100 scale-90 hover:scale-95 transition ease-in duration-200 bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-800 font-bold rounded-xl py-3 px-10 mt-10'>
                    <MessageCircleIcon className='mr-1' /> GET HELP
                  </button>
                  <div className='text-muted-foreground text-sm ml-4 pt-2'>It's <span className='font-bold'>100%</span> Confidential</div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        <div className='md:pt-5'>
          <div className='rounded-xl mt-5 scale-95 md:scale-100'>
            <Carousel>
              <CarouselContent>
                {['1', '2', '3', '4', '5'].map(num => (
                  <CarouselItem key={num}>
                    <Image loading='eager' src={`/imgs/messenger-slide-${num}.webp`} width={650} height={600} alt='tab' />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertSection