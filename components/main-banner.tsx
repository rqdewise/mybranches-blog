"use client"

import NextImage from 'next/image'
import { Button } from './ui/button'


function MainBanner() {
  return (
    <section className="h-screen bg-gradient-to-br from-blue-950 via-sky-950 to-blue-950">
        <div className="">
			<div className="container h-screen grid lg:grid-cols-2 gap-5 items-center w-full justify-center overflow-hidden mb-10">
				<div className="my-10 ">
					<h3 className="text-5xl sm:text-7xl mb-10 text-white">
						Robust Ecommerce, Simplified
					</h3>
					<Button variant="secondary" size="lg" className="text-2xl p-10">
							Start for Free
					</Button>
					</div>
					<div className="relative h-[650px]">
						<div className="w-full h-full">
							<NextImage
								width={650}
								height={650}
								src='/images/mainbanner.png'
								alt='mybranches'
								className="object-cover object-center"
							/>
						</div>
					</div>
				</div>
		</div>
    </section>
  )
}

export default MainBanner