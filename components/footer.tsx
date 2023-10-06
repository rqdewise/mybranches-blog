import React from 'react'
import { Separator } from './ui/separator'

const Footer = () => {
  return (
    <footer className="w-full h-full bg-slate-800 p-20">
      <div className="container ">
        <div className="flex items-center justify-start">
            <h3 className="text-3xl text-white tracking-tight">Branches</h3>
            <nav className="ml-10">
                <ul className="flex items-center justify-start space-x-3">
                  <li> About </li>
                  <li> Pricing </li>
                  <li> Terms & Condition </li>
                  <li> Privacy Policy </li>
                </ul>
            </nav>
        </div>
      </div>
      <div className="flex justify-between mt-10">
        <div>
          <p>rqdeleon@mybranches.net</p>
          <p>Santa Rosa City, Laguna, Philippines</p>
        </div>

      </div>
      <Separator className="my-5 bg-slate-600/70" />
      <div>
        <span>&copy; myBranches {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export default Footer