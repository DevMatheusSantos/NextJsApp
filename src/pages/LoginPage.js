'use client'

import Image from "next/image";
import trajetonOne from "@/assets/trajetonOne.png";
import trajetonTwo from "@/assets/trajetonTwo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogComponent } from "@/components/dialog/dialog";
import { PasswordInput } from "@/components/passwordInput/passwordInput";
import { useEffect, useState } from 'react'

export default function LoginPage() {

  const [ isSmallScreen, setIsSmallScreen ] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <main className="flex flex-col items-center justify-between gap-10 pb-12 lg:flex-row-reverse lg:justify-evenly h-screen lg:items-stretch">
      <figure className="flex place-items-center pt-32 lg:flex-1 lg:bg-amber-50 items-center justify-center lg:h-full">
        <Image
          src={isSmallScreen ? trajetonTwo : trajetonOne}
          alt="Trajeton Logo"
          width={isSmallScreen ? 300 : 500}
          priority
        />
      </figure>
      <div className="flex flex-col gap-7 lg:flex-1 lg:justify-center lg:items-center">
        <form className="flex flex-col gap-7 w-96">
          <div className="flex flex-col gap-2">
            <label for="email" className="text-sm font-semibold text-slate-600">E-mail<span className="text-orange-600 text-base font-bold">*</span></label>
            <Input type={"email"} id={"email"} className={"py-6 rounded-xl"} />
          </div>
          <div className="flex flex-col gap-2">
            <label for="password" className="text-sm font-semibold text-slate-600">Senha<span className="text-orange-600 text-base font-bold">*</span></label>
            <PasswordInput />
          </div>
        </form>
        <div className="flex flex-col justify-start gap-14 lg:w-96">
          <DialogComponent isSmallScreen={isSmallScreen} />
          <Button className={"py-6 rounded-2xl text-lg font-medium bg-orange-600"}>Entrar</Button>
        </div>
      </div>
    </main>
  );
}