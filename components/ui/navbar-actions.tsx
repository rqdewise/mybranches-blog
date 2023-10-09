"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

import { Button } from './button'
import { ShoppingBag } from 'lucide-react'
import UseCart from '@/hooks/use-cart'

const NavbarAction = () => {
	const [isMounted,setIsMounted] = React.useState(false)

	React.useEffect(()=> {
		setIsMounted(true)
	}, []);

	const cart= UseCart();
	const router = useRouter();	;

	if(!isMounted){ return null }
	
	return (
		<div className="ml-auto flex items-center gap-x-4">
			<Button onClick={()=> router.push("/cart")}>
				<ShoppingBag 
					size={15}
				/>
			<span className="ml-2 text-sm font-medium text-white">
				{cart.items.length}
			</span>
			</Button>
		</div>
	)
}

export default NavbarAction