"use client"
import React, { MouseEventHandler }from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from './ui/button'
import { ArrowUpRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import Currency from './ui/currency'
import UseCart from '@/hooks/use-cart'
import { Subcription } from '@/types'

interface PricingCardProps{
    data: Subcription
}

const PricingCard: React.FC<PricingCardProps> = ({
    data
}) =>
{
    const cart = UseCart();

    const addToCart: MouseEventHandler<HTMLButtonElement> = (e)=>{
        e.stopPropagation();
        cart.addItem(data)
    }

  return (
    <div>
        <Card className={cn("border-0 h-[650px]",  data.isRecommended ? `border-2`: " ")} >
                <CardHeader>
                    <h3 className=" text-center text-2xl mb-5">     
                        {data.title}
                    </h3>
                    <CardTitle className={cn("text-center font-bold text-3xl", data.isRecommended ? " text-5xl": " ")}>
                        <Currency value={data.price}/>                        
                        <span className="text-sm text-foreground/60 ml-2">
                            /month
                        </span>
                    </CardTitle>
                    <CardDescription className="text-center">                        
                        Billed Yearly
                    </CardDescription>
                    <Button 
                        onClick={addToCart}
                        className={cn("w-full font-bold shadow-lg", data.isRecommended ? " ": " bg-secondary text-slate-900 dark:text-white")}> 
                        Get started <ArrowUpRight className='h-4 w-4 ml-2'/>
                    </Button>
                </CardHeader>
                <CardContent>
                    <ul className="flex-col">
                        {data.features.map((feat)=>(
                            <li key={feat} className="flex items-center justify-start text-xl my-2">
                                <Check className="h-4 w-4 mr-8"/> 
                                {feat}
                            </li>   
                        ))}
                    </ul>
                </CardContent>
            </Card>
    </div>
  )
}

export default PricingCard