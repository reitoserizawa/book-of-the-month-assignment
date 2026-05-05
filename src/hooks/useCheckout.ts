import { useMutation } from '@tanstack/react-query';
import { postCheckout } from '../api/checkout';

export function useCheckout() {
    return useMutation({
        mutationFn: (bookIds: string[]) => postCheckout(bookIds),
        // no retry — we don't want auto-retrying a POST that places an order
        retry: false,
    });
}
