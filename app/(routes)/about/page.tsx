import Container from "@/components/container";
import React from "react";
import { Card } from "@/components/card";

const AboutPage = () => {
	return (
		<Container>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="flex w-full gap-8 mx-auto mt-32 sm:mt-0 lg:gap-16">
					<Card>
						<p className="text-white text-xl px-32 pt-32">
							We enable retailers to sell anything, whenever and wherever they
							choose, we provide a modern ecommerce platform that will make your
							online business venture fast and easy. The best part is you can
							start right now for FREE. We are mybranches, and with an
							e-commerce website coupled with an Internet Payment Gateway, we
							help business owners successfully expand their operations online.
						</p>

						<h3 className="text-2xl font-bold px-32 text-white pt-20 pb-32">
							Take your business online, the right way!
						</h3>
					</Card>
				</div>
			</div>
		</Container>
	);
};

export default AboutPage;
