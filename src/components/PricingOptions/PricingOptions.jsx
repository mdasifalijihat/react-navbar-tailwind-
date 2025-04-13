import React, { use } from 'react';
import PricingCard from './PricingCard';

const PricingOptions = ({PricingPromise}) => {

    const pricingData = use(PricingPromise)

    
    return (
        <div className='container mx-auto pt-8'>
            <h2 className='text-5xl font-bold'> Get out MemberShip </h2>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing} ></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;