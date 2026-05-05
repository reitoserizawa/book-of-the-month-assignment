import { useQuery } from '@tanstack/react-query';
import { getAddress } from '../api/address';

export function useAddress() {
    return useQuery({
        queryKey: ['saved-address'],
        queryFn: getAddress,
        staleTime: Infinity, // saved address won't change during checkout
    });
}
