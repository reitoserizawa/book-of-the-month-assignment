import React from 'react';
import type { ConfirmationBannerProps } from './types';
import formatDate from '../../../utils/formatDate';

const ConfirmationBanner: React.FC<ConfirmationBannerProps> = ({ data }) => {
    return (
        <div className='bg-emerald-50 border border-emerald-300 rounded-2xl p-6 text-center space-y-1'>
            <div className='text-4xl mb-3'>✦</div>
            <p className='text-lg font-bold text-emerald-800'>Order Confirmed</p>
            <p className='text-sm text-emerald-700'>
                Order <span className='font-semibold'>{data.orderId}</span>
            </p>
            <p className='text-sm text-stone-500 mt-1'>
                Estimated delivery by{' '}
                <span className='font-medium text-stone-700'>{formatDate(data.estimatedShipDate)}</span>
            </p>
        </div>
    );
};

export default ConfirmationBanner;
