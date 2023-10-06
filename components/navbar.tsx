"use client"

import MainNav from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";


export default function Navbar() {

  return (
    <nav className="sticky bg-background z-10 top-0 shadow-md dark:border-b dark:border-zinc-700/80">
      <div className="container flex h-20 items-center px-4">
        <div>
            <Link
              href='/'
            >
              <h2 className="text-3xl font-semibold">Branches</h2>
            </Link>
        </div>
        <div className="w-full flex justify-end">
          <MainNav className="mx-6" />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}