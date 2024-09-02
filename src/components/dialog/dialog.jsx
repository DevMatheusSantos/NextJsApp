'use client'

import { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from 'lucide-react';

export const DialogComponent = ({isSmallScreen}) => {
  const [open, setOpen] = useState(false)

  const toggleDialog = () => {
    setOpen(!open)
  }

  return (
    <>
      <Dialog open={open} onOpenChange={toggleDialog}>
        <DialogTrigger asChild>
          <Button variant="link" className="text-sm font-medium text-sky-500 cursor-pointer h-2 w-36" onClick={toggleDialog}>Esqueci minha senha</Button>
        </DialogTrigger>
        <DialogContent className="flex flex-col sm:w-96 h-96 gap-5 lg:h-80 w-auto">
          <DialogHeader className="gap-5">
            <div className='flex flex-row gap-3 lg:gap-0'>
                { 
                isSmallScreen ? 
                <DialogClose asChild>
                    <ChevronLeft size={30} color='black' className='cursor-pointer'/>
                </DialogClose> 
                : 
                <div></div> 
                }
                <DialogTitle className="text-xl font-bold text-slate-700">Recuperar senha</DialogTitle>
            </div>
            <DialogDescription className="text-base font-medium text-slate-700">Para recuperar sua senha, digite o e-mail cadastrado.</DialogDescription>
          </DialogHeader>
          <form className="flex flex-col gap-20 lg:gap-7">
            <div className="flex flex-col gap-2">
              <label for="email" className="text-sm font-semibold text-slate-600">E-mail<span className="text-orange-600 text-base font-bold">*</span></label>
              <Input type={"email"} id={"email"} className={"py-6 rounded-xl"} />
            </div>
            <Button className="py-6 rounded-2xl text-base font-medium bg-orange-600">Enviar</Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
