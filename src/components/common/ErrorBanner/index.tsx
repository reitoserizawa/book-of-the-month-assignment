import React from 'react';
import type { ErrorBannerProps } from './types';
import ErrorIcon from '../../../assets/ErrorIcon';

const ErrorBanner: React.FC<ErrorBannerProps> = ({ error }) => {
    return (
        <div
            role='alert'
            className='bg-red-50 border border-red-300 rounded-xl px-4 py-3 text-sm text-red-700 flex items-center gap-2'
        >
            <ErrorIcon />
            <span>{error}</span>
        </div>
    );
};

export default ErrorBanner;
