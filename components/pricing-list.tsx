import React from 'react'

import { Subcription } from '@/types'
import PricingCard from './pricing-card'

interface PricingListProps{
    title: string,
    items: Subcription[],
}



const PricingList: React.FC<PricingListProps> = ({
    title,
    items
}) => {

  return (
    <section className="bg-gradient-to-tr from-sky-950 via-slate-800 to-sky-950 pt-20"> 
        <h2 className='text-white text-5xl font-extrabold tracking-tight leading-none text-center'>
            {title}
        </h2>
        {items.length === 0 && "no result"}
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-4 mt-20 pt-10 ">
            {items.map((item) => (
                <PricingCard key={item.title} data={item}/>
            ))}
        </div>

    </section>
  )
}

export default PricingList