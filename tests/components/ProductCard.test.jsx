import { render, screen } from '@testing-library/react';
import ProductCard from '../../src/components/ProductCard';
import { expect, describe, it } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';

describe('ProductCard', () => {
    it('renders product info correctly with discount', () => {
        render(
            <ProductCard
                name="Mini Orchid"
                image="orchid.png"
                oldPrice="34.90"
                newPrice="23.90"
            />
        );

        expect(screen.getByText('Mini Orchid')).toBeInTheDocument();
        expect(screen.getByText('23.90 CHF')).toBeInTheDocument();
        expect(screen.getByText('34.90 CHF')).toBeInTheDocument();
        expect(screen.getByText('-32%')).toBeInTheDocument(); // from discount logic
        expect(screen.getByRole('img')).toHaveAttribute('src', 'orchid.png');
        expect(
            screen.getByRole('button', { name: /buy now/i })
        ).toBeInTheDocument();
    });

    it('renders without discount if no old price', () => {
        render(
            <ProductCard
                name="Mini Orchid"
                image="orchid.png"
                newPrice="23.90"
            />
        );

        expect(screen.queryByText(/CHF/)).toBeInTheDocument();
        expect(screen.queryByText(/%/)).not.toBeInTheDocument();
    });
});
