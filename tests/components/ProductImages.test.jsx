import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ProductImages from '../../src/components/ProductImages';
import '@testing-library/jest-dom';

describe('ProductImages component', () => {
    const mockImages = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ];

    it('renders the first image as the main image', () => {
        render(<ProductImages images={mockImages} />);
        const mainImage = screen.getByAltText('Product');
        expect(mainImage).toHaveAttribute('src', mockImages[0]);
    });

    it('updates the main image when a thumbnail is clicked', () => {
        render(<ProductImages images={mockImages} />);
        const thumbnails = screen.getAllByRole('img');

        // simulate clicking on the third thumbnail
        fireEvent.click(thumbnails[2]);

        const mainImage = screen.getByAltText('Product');
        expect(mainImage).toHaveAttribute('src', mockImages[2]);
    });

    it('renders a message when no images are provided', () => {
        render(<ProductImages images={[]} />);
        expect(screen.getByText(/no images available/i)).toBeInTheDocument();
    });
});
