import React from 'react';
import LoaderIcon from '../../../assets/LoaderIcon';

const FullScreenLoader: React.FC = () => (
    <div className='min-h-screen bg-stone-50 flex items-center justify-center'>
        <div className='flex flex-col items-center gap-3 text-stone-400'>
            <LoaderIcon className='animate-spin h-6 w-6' />
            <p className='text-sm'>Loading your order...</p>
        </div>
    </div>
);

export default FullScreenLoader;
