/**
 * Format a price into something like "23.90 CHF"
 * @param {number|string} amount
 * @param {string} currency - e.g. "CHF"
 */
export const formatPrice = (amount, currency = 'CHF') => {
    if (!amount) return '';

    let raw = typeof amount === 'number' ? amount.toString() : amount;

    // Replace comma with dot (for 34,90 → 34.90), remove spaces/symbols
    raw = raw.replace(',', '.').replace(/[^\d.]/g, '');

    const num = parseFloat(raw);
    if (isNaN(num)) return '';

    return `${num.toFixed(2)} ${currency}`;
};

/**
 * Calculate discount percentage
 * @param {number|string} original
 * @param {number|string} current
 * @returns {number|null} discount percentage (e.g. 31)
 */
export const getDiscountPercent = (original, current) => {
    // Normalize inputs using formatPrice (but don't include currency symbol)
    const parsePrice = (price) => {
        if (!price) return NaN; // or return null if you prefer
        let cleanedPrice = price.replace(/[^\d.,]/g, '');
        cleanedPrice = cleanedPrice.replace(',', '.');
        return parseFloat(cleanedPrice);
    };

    const oldNum = parsePrice(original);
    const newNum = parsePrice(current);

    if (isNaN(oldNum) || isNaN(newNum) || oldNum <= newNum) return null;

    return Math.round(((oldNum - newNum) / oldNum) * 100);
};
