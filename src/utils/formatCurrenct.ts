const formatCurrency = (n: number): string => n.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

export default formatCurrency;
