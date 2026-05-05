import { type CheckoutSuccess } from './types';

export const postCheckout = async (bookIds: string[]): Promise<CheckoutSuccess> => {
    // in a real application, this would be a call to the backend API which would handle payment processing, order creation, etc.
    const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookIds }),
    });

    if (!res.ok) {
        const text = await res.text();
        const message = text ? JSON.parse(text).error : 'An unexpected error occurred.';
        throw new Error(message);
    }

    const json = await res.json();
    return json as CheckoutSuccess;
};
