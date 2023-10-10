"use client"
import React from 'react'

import { cn } from '@/lib/utils'
import { Button } from "@/components/ui/button"
import MainNav from '@/components/main-nav'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

interface SibarNavProps{
    className: string,
  }

const SidebarNav: React.FC<SibarNavProps> = ({className}) => {
  return (
        <div className={cn("sm:hidden", className)}>
            <Sheet >
                <SheetTrigger asChild>
                    <span className="p-1 hover:bg-slate-800/75 cursor-pointer"><Menu className="h-8 w-8 cursor-pointer"/></span>
                </SheetTrigger>
                <SheetContent side={'right'}>
                <SheetHeader>
                    <SheetTitle><h5 className="text-2xl">MyBranches</h5></SheetTitle>
                </SheetHeader>
                    <div>
                        <MainNav className="text-3xl space-y-5 mt-10 flex flex-col "/>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
  )
}

export default SidebarNav