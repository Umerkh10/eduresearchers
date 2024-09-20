import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

function ReviewCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop:true
      }}
      orientation="vertical"
      className="w-full max-w-xl shadow-xl"
    >
      <CarouselContent className="-mt-1 h-[300px] md:h-[230px] ">

          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' src={'/imgs/8 (1).webp'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex flex-col p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-blue-400'>Giulio Arcuri</span> recommends our service</div>
                     <div className='text-muted-foreground font-bold'> june 14 at 10:39  </div>
                     </div>
                     </div>
                     <div className='pt-2 text-sm text-muted-foreground font-medium'>Hello! I like this service. I ordered several drafts from the same expert and they were pretty cool, but the prices for urgent help are a bit high in my opinion.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


       
          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' src={'/imgs/6 (1).webp'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex flex-col p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-blue-400'>Eric Aikens</span> reviewed our service -</div>
                     <div className='text-muted-foreground font-bold'> April 14 at 9:09  </div>
                     </div>
                     </div>
                     <div className='pt-2 text-sm text-muted-foreground font-medium'>I recommend their editing services, because when I availed their proofreading and editing services, they improved my paper very well. They have reviewed thoroughly and eliminated errors from my assignment and also added more relevant information and enhance overall quality.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' src={'/imgs/2 (1).webp'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex flex-col p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-blue-400'>Nicole Jones</span>  reviewed our service -</div>
                     <div className='text-muted-foreground font-bold'> May 12 at 11:05  </div>
                     </div>
                     </div>
                     <div className='pt-2 text-sm text-muted-foreground font-medium'>I hired several experts here, and they were always professional. I hired another expert like a week ago, and the support told me I have bonus money on my balance with the website that pretty much covered their assistance. That was such a delight! Thanks!</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' src={'/imgs/5.webp'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex flex-col p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-blue-400'>Gail Farmer</span>   recommends our service</div>
                     <div className='text-muted-foreground font-bold'> April 18 at 15:05  </div>
                     </div>
                     </div>
                     <div className='pt-2 text-sm text-muted-foreground font-medium'>I was looking for my psychology assignment help, and found {process.env.NEXT_PUBLIC_NAME} very helpful and efficient to get assistance for my assignment. I am happy with their quick responses and immediate solutions.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>


          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' src={'/imgs/5 (1).webp'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex flex-col p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-blue-400'>Shan Lei</span> reviewed our service -</div>
                     <div className='text-muted-foreground font-bold'> July 20 at 18:05  </div>
                     </div>
                     </div>
                     <div className='pt-2 text-sm text-muted-foreground font-medium'>I used {process.env.NEXT_PUBLIC_NAME} several times for editing and paraphrasing papers. The service was fast and the price was okay. They delivered all papers on time. One part of the last paper slightly differed from instructions, had to ask for corrections.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pt-1 ">
            <div className="p-1">
              <Card>
                <CardContent className=" p-6">
                  <div className='flex items-center gap-3'>
                  <div className='w-16 h-16 rounded-full flex items-center'>
                    <Image loading='eager' src={'/imgs/4.webp'} width={80} height={80} alt='testimonial' ></Image>
                  </div>
                  <div className='flex flex-col p-2'>
                    <div className=' text-muted-foreground font-medium'>
                     <span className='text-blue-400'>Arata Ochi</span>  recommends our service</div>
                     <div className='text-muted-foreground font-bold'> August 10 at 16:10  </div>
                     </div>
                     </div>
                     <div className='pt-2 text-sm text-muted-foreground font-medium'>Thanks for a great draft! You have awesome experts that really save people when they are in trouble. Thank you for completing my drafts within really short deadlines.</div>
                  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>

  )
}

export default ReviewCarousel