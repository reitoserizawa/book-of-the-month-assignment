interface OpenLibraryWork {
    key: string;
    title: string;
    author_name?: string[];
    cover_i?: number;
}

export interface OpenLibraryResponse {
    works: OpenLibraryWork[];
}

export interface Book {
    id: string;
    title: string;
    author: string;
    coverImage: string | null;
    price: number;
}
