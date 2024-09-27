"use client"
import React from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useParams, useSearchParams } from "next/navigation";

export function Modal() {

    return (
      <div >
        <Dialog defaultOpen>

        <DialogContent style={{backgroundImage:"url('/imgs/bg-modal.jpg')",backgroundSize:'cover', backgroundPosition:'center'}}  className="sm:max-w-[425px] h-56 sm:max-h-60">
          <DialogHeader>
            <DialogTitle className='text-center font-bold text-2xl text-zinc-100'>Congratulations</DialogTitle>
            <DialogDescription className='text-center  py-4 font-semibold text-xl text-zinc-100'>
            45%-OFF Discount Applied
            </DialogDescription>
          </DialogHeader>
  
        </DialogContent>
      </Dialog>
      </div>
    )
  }
  
  