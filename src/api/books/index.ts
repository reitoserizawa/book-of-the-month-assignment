import { type Book } from './types';
import type { OpenLibraryResponse } from './types';

const BOOKS_API_URL = 'https://openlibrary.org/trending/daily.json?limit=10';
const BOOK_COVER_API_URL = 'https://covers.openlibrary.org/b/id/';

export const getBooks = async (): Promise<Book[]> => {
    const res = await fetch(BOOKS_API_URL);
    if (!res.ok) throw new Error('Failed to fetch books');

    const data: OpenLibraryResponse = await res.json();
    if (!data.works?.length) throw new Error('No books data returned.');

    try {
        const books = data.works.map(work => ({
            id: work.key.replace('/works/', ''),
            title: work.title,
            author: work.author_name?.[0] ?? 'Unknown Author',
            coverImage: work.cover_i ? `${BOOK_COVER_API_URL}${work.cover_i}-M.jpg` : null,
            price: randomPrice(),
        }));

        const count = Math.floor(Math.random() * 4) + 1;
        return books.sort(() => Math.random() - 0.5).slice(0, count);
    } catch {
        throw new Error('Failed to parse books data.');
    }
};

// books api doesn't provide prices, so we generate a random price between $9.99 and $24.99 for demonstration purposes
const randomPrice = (): number => {
    return parseFloat((Math.random() * (24.99 - 9.99) + 9.99).toFixed(2));
};
