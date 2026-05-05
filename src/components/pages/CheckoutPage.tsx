import React from 'react';

import { useBooks } from '../../hooks/useBooks';
import { useAddress } from '../../hooks/useAddess';
import { useCheckout } from '../../hooks/useCheckout';
import formatCurrency from '../../utils/formatCurrenct';

import BookRow from '../common/BookRow';
import AddressCard from '../common/AddressCard';
import ErrorBanner from '../common/ErrorBanner';
import ConfirmationBanner from '../common/ConfirmationBanner';
import FullScreenLoader from '../common/FullScreenLoader';

const CheckoutPage: React.FC = () => {
    const { data: books, isLoading: booksLoading, isError: booksError } = useBooks();
    const { data: address, isLoading: addressLoading, isError: addressError } = useAddress();
    const { mutate: placeOrder, isPending, isSuccess, data: orderData, error } = useCheckout();

    const isLoading = booksLoading || addressLoading;
    const hasLoadError = booksError || addressError;
    const total = books?.reduce((sum, b) => sum + b.price, 0) ?? 0;

    if (isLoading) {
        return <FullScreenLoader />;
    }

    if (hasLoadError) {
        return (
            <div className='min-h-screen bg-stone-50 flex items-center justify-center px-4'>
                <ErrorBanner
                    error={
                        booksError && addressError
                            ? 'Could not load your books or address. Please refresh and try again.'
                            : booksError
                              ? 'Could not load your books. Please refresh and try again.'
                              : 'Could not load your address. Please refresh and try again.'
                    }
                />
            </div>
        );
    }

    const handlePlaceOrder = () => {
        if (!books) return;
        placeOrder(books.map(b => b.id));
    };

    return (
        <div className='min-h-screen bg-stone-50 flex items-start justify-center px-4 py-12'>
            <div className='w-full max-w-md space-y-6'>
                <div className='space-y-1'>
                    <h1
                        className='text-3xl font-bold text-stone-900 tracking-tight'
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        Your Order
                    </h1>
                    <p className='text-sm text-stone-400'>Review before placing</p>
                </div>

                <section className='bg-white rounded-2xl shadow-sm border border-stone-100 px-5 pt-2 pb-1'>
                    {books?.map(book => (
                        <BookRow key={book.id} book={book} />
                    ))}
                    <div className='flex justify-between items-center py-4 mt-1'>
                        <span className='font-semibold text-stone-700'>Total</span>
                        <span className='font-bold text-xl text-stone-900'>{formatCurrency(total)}</span>
                    </div>
                </section>

                {address && <AddressCard address={address} />}

                {error && <ErrorBanner error={error.message} />}

                {isSuccess ? (
                    <ConfirmationBanner data={orderData} />
                ) : (
                    <button
                        onClick={handlePlaceOrder}
                        disabled={isPending}
                        aria-busy={isPending}
                        className={[
                            'w-full py-4 rounded-2xl font-semibold text-base tracking-wide transition-all duration-200 cursor-pointer',
                            isPending
                                ? 'bg-stone-300 text-stone-400 cursor-not-allowed'
                                : 'bg-stone-900 text-white hover:bg-stone-700 active:scale-[0.98] shadow-md',
                        ].join(' ')}
                    >
                        {isPending ? (
                            <span className='flex items-center justify-center gap-2'>
                                <svg className='animate-spin h-4 w-4' fill='none' viewBox='0 0 24 24'>
                                    <circle
                                        className='opacity-25'
                                        cx='12'
                                        cy='12'
                                        r='10'
                                        stroke='currentColor'
                                        strokeWidth='4'
                                    />
                                    <path
                                        className='opacity-75'
                                        fill='currentColor'
                                        d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z'
                                    />
                                </svg>
                                Placing Order...
                            </span>
                        ) : (
                            'Place Order'
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
