import React from 'react';
import type { AddressCardProps } from './types';

import LocationIcon from '../../../assets/LocationIcon';

const AddressCard: React.FC<AddressCardProps> = ({ address }) => {
    return (
        <div className='bg-amber-50 border border-amber-200 rounded-xl p-4'>
            <div className='flex items-center gap-2 mb-2'>
                <LocationIcon className='text-amber-600' />
                <span className='text-xs font-semibold text-amber-700 uppercase'>Shipping To</span>
            </div>
            <p className='text-sm text-stone-600 mt-0.5'>{address.street}</p>
            {address.street2 && <p className='text-sm text-stone-700'>{address.street2}</p>}
            <p className='text-sm text-stone-600'>
                {address.city}, {address.state} {address.zip}
            </p>
            <p className='text-sm text-stone-500'>{address.country}</p>
        </div>
    );
};

export default AddressCard;
