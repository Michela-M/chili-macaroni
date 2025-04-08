import { formatPrice, getDiscountPercent } from './PriceUtils';
import { expect, describe, it } from 'vitest';

describe('formatPrice', () => {
    it('formats a number correctly', () => {
        expect(formatPrice(34.9)).toBe('34.90 CHF');
        expect(formatPrice(99)).toBe('99.00 CHF');
    });

    it('formats a number with a comma correctly', () => {
        expect(formatPrice('34,90')).toBe('34.90 CHF');
        expect(formatPrice('99,99')).toBe('99.99 CHF');
    });

    it('removes non-numeric characters', () => {
        expect(formatPrice('34.90 CHF')).toBe('34.90 CHF');
        expect(formatPrice('99 $')).toBe('99.00 CHF');
        expect(formatPrice('€ 54.60')).toBe('54.60 CHF');
    });

    it('returns an empty string for invalid input', () => {
        expect(formatPrice('not a number')).toBe('');
        expect(formatPrice(null)).toBe('');
        expect(formatPrice(undefined)).toBe('');
        expect(formatPrice('')).toBe('');
        expect(formatPrice(' ')).toBe('');
    });

    it('returns an empty string for NaN', () => {
        expect(formatPrice('NaN')).toBe('');
    });

    it('correctly formats with a custom currency', () => {
        expect(formatPrice(34.9, 'USD')).toBe('34.90 USD');
        expect(formatPrice('99,99', 'EUR')).toBe('99.99 EUR');
    });
});

describe('getDiscountPercent', () => {
    it('calculates the discount percentage correctly', () => {
        expect(getDiscountPercent('100 CHF', '80 CHF')).toBe(20); // 20% off
        expect(getDiscountPercent('200', '150')).toBe(25); // 25% off
        expect(getDiscountPercent('34.90 CHF', '30 CHF')).toBe(14); // ~14% off
    });

    it('returns null if the new price is greater than or equal to the original price', () => {
        expect(getDiscountPercent('100', '150')).toBeNull(); // New price is higher
        expect(getDiscountPercent('50', '50')).toBeNull(); // No discount
    });

    it('returns null if the input is invalid (NaN or non-numeric)', () => {
        expect(getDiscountPercent('100', 'abc')).toBeNull(); // Invalid current price
        expect(getDiscountPercent('abc', 'abc')).toBeNull(); // Both are invalid
        expect(getDiscountPercent('100', '')).toBeNull(); // Empty current price
        expect(getDiscountPercent('', '80')).toBeNull(); // Empty original price
    });

    it('ignores currency symbols and handles commas properly', () => {
        expect(getDiscountPercent('$100', '80')).toBe(20); // USD sign should be ignored
        expect(getDiscountPercent('€100,50', '90,00 EUR')).toBe(10); // Comma handling for EUR
        expect(getDiscountPercent('100 CHF', '80 CHF')).toBe(20); // CHF handling
    });

    it('returns null when original price is less than or equal to the new price after parsing', () => {
        expect(getDiscountPercent('0', '0')).toBeNull(); // No discount for 0
        expect(getDiscountPercent('0', '10')).toBeNull(); // No discount for zero original price
    });
});
