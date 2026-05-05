import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../api/books';

export function useBooks() {
    return useQuery({
        queryKey: ['books'],
        queryFn: getBooks,
    });
}
