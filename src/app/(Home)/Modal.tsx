"use client";
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useSearchParams } from "next/navigation";

export default function Modal() {
  const [isParamMatched, setIsParamMatched] = useState(false);
  const searchParams = useSearchParams();
  const coupon = searchParams.get('coupon');

  useEffect(() => {
    if (coupon === 'off45') {
      setIsParamMatched(true);
    }
  }, [coupon]);

  return (
    isParamMatched ? (
      <div>
        <Dialog defaultOpen>
          <DialogContent
            style={{
              backgroundImage: "url('/imgs/bg-modal.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className="sm:max-w-[425px] h-56 sm:max-h-60"
          >
            <DialogHeader>
              <DialogTitle className="text-center font-bold text-2xl text-zinc-100">
                Congratulations
              </DialogTitle>
              <DialogDescription className="text-center py-4 font-semibold text-xl text-zinc-100">
                45%-OFF Discount Applied
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    ) : null
  );
}
