export function toUSD(number) {
    const destringPrice = parseInt(number);
    return destringPrice.toLocaleString ('en-US', { style: 'currency', currency: 'USD' });
}