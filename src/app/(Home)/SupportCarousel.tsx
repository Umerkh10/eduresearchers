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
    <Carousel className=" w-full max-w-sm">
      <CarouselContent className="-ml-1 mt-5">

          <CarouselItem  className="pl-1 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image src={'/imgs/1 (1).png'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">RALPH STANLEY</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">6+ years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pl-1 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image src={'/imgs/2 (1).png'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Isabella Grace</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">5+ years</span>  experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          <CarouselItem  className="pl-1 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image src={'/imgs/3 (1).png'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Michael Cruz</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">5+ years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

            <CarouselItem  className="pl-1 ">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center  px-3 py-3">
                  <div className="flex items-center w-20 h-20 rounded-full ">
                    <Image src={'/imgs/4 (1).png'} width={80} height={80} alt="support" ></Image>
                  </div>
                  <div className="flex flex-col items-center ml-2">
                    <p className="font-semibold ">Daniel Barnes</p>
                    <p className="font-medium text-muted-foreground"><span className="text-orange-500">6+ years</span> Experience in support </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

      </CarouselContent>
      
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
