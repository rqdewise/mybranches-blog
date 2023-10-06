import React from 'react'

import PricingList from '@/components/pricing-list'

const PricingPage = () => {
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
    <div className="">
        <PricingList title="Branch your business with us." items={prices} />
    </div>
  )
}

export default PricingPage