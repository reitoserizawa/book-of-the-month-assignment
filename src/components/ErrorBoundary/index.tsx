import React from 'react';
import type { ErrorBoundaryProps } from './type';
import ErrorIcon from '../../assets/ErrorIcon';

class ErrorBoundary extends React.Component<ErrorBoundaryProps, { hasError: boolean }> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='min-h-screen bg-stone-50 flex flex-col items-center justify-center gap-3'>
                    <ErrorIcon className='h-10 w-10 text-red-600' />
                    <p className='text-sm text-red-600'>Something went wrong. Please refresh and try again.</p>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
