import Container from "@/components/container";
import React from "react";
import { Card } from "@/components/card";

const AboutPage = () => {
	return (
		<Container>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<Card>
						<p className="px-12 pt-12 text-white text-xl md:px-32 md:pt-32">
							We enable retailers to sell anything, whenever and wherever they
							choose, we provide a modern ecommerce platform that will make your
							online business venture fast and easy. The best part is you can
							start right now for FREE. We are mybranches, and with an
							e-commerce website coupled with an Internet Payment Gateway, we
							help business owners successfully expand their operations online.
						</p>

						<h3 className="px-12  pt-10 text-2xl font-bold md:px-32 text-white md:pt-20 pb-32">
							Take your business online, the right way!
						</h3>
					</Card>
				</div>
			</div>
		</Container>
	);
};

export default AboutPage;
