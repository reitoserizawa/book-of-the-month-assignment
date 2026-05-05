import { type Address } from './types';

const ADDRESS_API_URL = 'https://api.testingbot.com/v1/free-tools/random-address';

export const getAddress = async (): Promise<Address> => {
    // using a free API to get a random address for demonstration purposes in USA
    const res = await fetch(ADDRESS_API_URL);
    if (!res.ok) throw new Error('Failed to fetch address');

    const data = await res.json();

    if (!data.address) throw new Error('No address data returned.');

    try {
        // handling the specific format from the API, which is a single string address
        const parts = data.address.split(', ');
        const [state, zip] = parts.pop().split(' ');
        const city = parts.pop();
        const fullStreet = parts.join(', ');

        // splitting street into street and street2 if it contains an apartment/suite number
        const match = fullStreet.match(/^(.*?)(\b\d+\b\s+\D+)$/);
        const street2 = match?.[1]?.trim() || undefined;
        const street = match?.[2]?.trim() ?? fullStreet;

        return { street, street2, city, state, zip, country: 'United States' };
    } catch {
        // if the format is unexpected, surface a clear error rather than crashing with a cryptic "Cannot read properties of undefined"
        throw new Error('Failed to parse address data.');
    }
};
