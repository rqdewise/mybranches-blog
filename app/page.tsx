
import React from "react";

import Features from "@/components/features";
import MainBanner from "@/components/main-banner";
import PricingList from "@/components/pricing-list";


export default function Home() {
	const prices = [
        {
            title: 'Joiner',
            price: '0',
            features: ['Free Sub Domain', 'One ECommerce Store', '5 Products','Free Payment Gateway Setup', 'limited bandwidth','SSL','Serverless Function', 'Ultra Fast'],
            isRecommended: false,
        },
        {
            title: 'Start up',
            price: '989',
            features: ['Everything in Joiner', '2 ECommerce Store', '20 Products','Personalize Payment Gateway Setup', 'moderate bandwidth','Customers Data Analytic'],
            isRecommended: true,
        },
        {
            title: 'Tycoon',
            price: '1979',
            features: ['Everything in Start up', '10 ECommerce Store', '100 Products','Personalize Payment Gateway Setup', 'unlimited bandwidth','Customers Data Analytic', 'AI Functions','Business Email', 'Prioritize Support'],
            isRecommended: false,
        },
    ];

	return (
		<>

			<MainBanner />
			<main className="container">
				<div className="w-full flex-col items-center overflow-hidden mt-40">
					<h3 className="flex text-5xl items-center justify-center mb-10">
						Take your business online!
					</h3>
					<p className="text-xl">
						By offering a strong e-commerce web app, we empower business owners in any sector of entrepreneur,  to own and build their future in online commerce and to satisfy their consumers with simplicity and security. To help their business to expand and reach more leads through our build-in data analytic features
					</p>
				</div>
			</main>
			<Features className="mt-20 mb-40"/>
			<PricingList title="Branch your business with us." items={prices} />
		</>
	);
}
