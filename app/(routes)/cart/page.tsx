"use client"
import React, { MouseEventHandler } from 'react'

import { useEffect, useState } from "react";

import UseCart from '@/hooks/use-cart';
import Summary from './components/summary'
import CartItem from './components/cart-item';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';

const CartPage = () => {
  const [isMounted, setIsmounted] = useState(false);
  
  const cart = UseCart();

  useEffect(()=>{
      setIsmounted(true)
  }, []);

  const clearItems: MouseEventHandler<HTMLButtonElement> = (e) =>{
    e.stopPropagation();
    toast.success("Cart cleared")
    cart.removeAll();
  }

  if(!isMounted){ return null}

  return (
    <div className="bg-white">
      <div className="container">
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && <p className="text-neutral-500">No items added to cart.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.title} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
            <Button onClick={clearItems} size="lg">Clear</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage