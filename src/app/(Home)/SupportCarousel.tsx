import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSpacing() {
  return (
    <Carousel opts={{loop:true}} className=" w-full max-w-screen-xl">
      <CarouselContent className="-ml-1 mt-5">

          <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/1 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">RALPH STANLEY</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">6+ years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/2 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Isabella Grace</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">5+ years</span>  experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pl-1   lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/3 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Michael Cruz</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">5+ years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/4 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Daniel Barnes</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">6+ years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/1.webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">DYLAN BAILEY</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">6- years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/3.webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">FREYA LANEY</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">3- years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/7 (1).webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">SHAWN ELLIOT</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">4- years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1  lg:basis-1/3 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image loading='eager' src={'/imgs/2.webp'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">JOSHUA ARTHUR</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">4- years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>
      
     
    </Carousel>
  )
}
