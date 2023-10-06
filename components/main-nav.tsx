import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MainNav({className, ...props}:React.HTMLAttributes<HTMLElement> ){
	const pathName = usePathname();
	
	const navigation = [
		{ 
			slug: "Contact",
			href: "/contact",
			active: pathName == `/contact`
		},
		{ 
			slug: "About",
			href: "/about",
			active: pathName == '/about'
		},
		{ 
			slug: "Pricing",
			href: "/price",
			active: pathName == '/price'
		},
		{ 
			slug: "Create",
			href: "https://store.mybranches.net",
			active: pathName == 'https:/store.mybranches.net'
		},
	];

	return (
		<nav 
			className={cn("flex items-center space-x-4", className)}
		>
			<ul className="flex items-center  justify-items-end gap-4">
			{navigation.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className={cn("text-md font-semibold duration-500 text-zinc-800 hover:text-zinc-300", item.active ? "text-black font-bold dark:text-white": "text-muted-foreground")}
				>
					{item.slug}
				</Link>
			))}
		</ul>
		</nav>
	);
};


