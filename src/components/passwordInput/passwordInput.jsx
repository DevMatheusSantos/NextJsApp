'use client'

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

export const PasswordInput= () => {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = (event) => {
    event.preventDefault()
    setShowPassword(!showPassword)
  }

  return (
    <div className="relative">
      <Input type={showPassword ? 'text' : 'password'} className="pr-10 py-6 rounded-xl" />
      <Button variant="ghost" size="icon" onClick={togglePasswordVisibility} className="absolute inset-y-2 right-1 flex items-center px-3">
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </Button>
    </div>
  )
}
