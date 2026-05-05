````markdown
# Checkout Page

A React + TypeScript checkout page built with Vite for Book of the Month assignment.

## Tech Stack

- React + TypeScript
- Vite
- TanStack Query
- Tailwind CSS

## APIs Used

- [Open Library](https://openlibrary.org/dev/docs/api) — books (no API key required)
- [TestingBot Random Address](https://testingbot.com) — shipping address (no API key required)
- `POST /api/checkout` — place order (please update the endpoint)

## Getting Started

```bash
npm install
npm run dev
```
````

## Project Structure

```
src/
├── api/                 # API functions
├── assets/              # Google Icons
├── components/
│   ├── common/          # BookRow, AddressCard, ErrorBanner, etc.
│   ├── ErrorBoundary/   # page crush error handler
│   └── pages/           # CheckoutPage
├── hooks/               # useBooks, useAddress, useCheckout
└── utils/               # formatCurrency etc.
```

## Assumptions & Trade-offs

- Book prices are randomly generated ($9.99–$24.99) since Open Library is a library catalog with no pricing data
- 1–4 books are randomly picked from the daily trending list on each load
- Address is fetched from a free random address API and parsed from a single string into structured fields
- `retry: false` on the checkout mutation — avoids placing duplicate orders on network hiccups
- Error boundary at the app root catches any unexpected render crashes

```

```
