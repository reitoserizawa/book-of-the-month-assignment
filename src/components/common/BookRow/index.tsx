import React from 'react';
import type { BookRowProps } from './types';
import formatCurrency from '../../../utils/formatCurrenct';

const BookRow: React.FC<BookRowProps> = ({ book }) => {
    return (
        <div className='flex items-center gap-4 py-4 border-b border-stone-100 last:border-0'>
            {book.coverImage && (
                <div className='w-14 h-20 flex-shrink-0 rounded overflow-hidden bg-stone-100 shadow-sm'>
                    <img
                        src={book.coverImage}
                        alt={`Cover of ${book.title}`}
                        className='w-full h-full object-cover'
                        onError={e => {
                            (e.currentTarget as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>
            )}
            <div className='flex-1 min-w-0'>
                <p className='font-semibold text-stone-800 truncate'>{book.title}</p>
                <p className='text-sm text-stone-500 mt-0.5'>{book.author}</p>
            </div>
            <p className='text-stone-700 text-sm font-medium ml-2'>{formatCurrency(book.price)}</p>
        </div>
    );
};

export default BookRow;
