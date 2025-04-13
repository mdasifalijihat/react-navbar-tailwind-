import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricengFeature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2'> <FaCheckCircle className='text-green-500' /> {feature} </p>
        </div>
    );
};

export default PricengFeature;