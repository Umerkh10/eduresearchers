import React from 'react'
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { Menu, MenuSquareIcon, MountainIcon, MountainSnowIcon } from 'lucide-react'
import { ModeToggle } from '@/components/ui/ThemeSwitch'

function Navbar() {

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow">
      <div className=" container mx-auto flex h-16 items-center justify-between px-4 xl:px-24">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <MountainSnowIcon className="h-6 w-6" />
          <span className="text-lg font-bold text-orange-500 ">Eduresearchers</span>
        </Link>
        <div className='flex flex-col items-center'>
            <Image src={'/imgs/rating.webp'} width={100} height={100} alt='reviews'></Image>
            <div className='text-center text-muted-foreground text-sm '>"Excellent" 9.7/10</div>
        </div>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          <Link href="#why-us" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Why Us?
          </Link>
          <Link href="#service" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Our Services
          </Link>
          <Link href="#howitworks" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            How it Works
          </Link>
          <Link href="#topexpert" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Top Experts
          </Link>
          <Link href="#review" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Reviews
          </Link>
          <Link href="#faq" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Frequently Asked Questions
          </Link>
          <ModeToggle/>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs bg-white dark:bg-muted p-6">
            <div className="grid gap-6">
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <MountainIcon className="h-6 w-6" />
                <span className="text-lg font-bold">Eduresearchers</span>
              </Link>
              <nav className="grid gap-4">
              <Link href="#why-us" className="text-muted-foreground hover:text-foreground text-sm font-medium" prefetch={false}>
            Why Us?
          </Link>
          <Link href="#service" className="text-muted-foreground hover:text-foreground text-sm font-medium" prefetch={false}>
            Our Services
          </Link>
          <Link href="#howitworks" className="text-muted-foreground hover:text-foreground text-sm font-medium" prefetch={false}>
            How it Works
          </Link>
          <Link href="#topexpert" className="text-muted-foreground hover:text-foreground text-sm font-medium" prefetch={false}>
            Top Experts
          </Link>
          <Link href="#review" className="text-muted-foreground hover:text-foreground text-sm font-medium" prefetch={false}>
            Reviews
          </Link>
          <Link href="#faq" className="text-muted-foreground hover:text-foreground text-sm font-medium" prefetch={false}>
            Frequently Asked Questions
          </Link>
          <ModeToggle/>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}


export default Navbar

