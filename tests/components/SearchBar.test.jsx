import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../src/components/SearchBar';
import { vi, expect, describe, it } from 'vitest';

describe('SearchBar Component', () => {
    it('should call onSearch with the correct query when the Enter key is pressed', () => {
        const onSearch = vi.fn(); // Use Vitest's mock function
        render(<SearchBar onSearch={onSearch} />);

        // Get the input field by its label
        const input = screen.getByLabelText(/Search for a product.../i);

        // Simulate typing a query
        fireEvent.change(input, { target: { value: 'test query' } });

        // Simulate pressing Enter
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        // Assert that onSearch is called with the correct query
        expect(onSearch).toHaveBeenCalledWith('test query');
    });

    it('should call onSearch when the search icon is clicked', () => {
        const onSearch = vi.fn(); // Use Vitest's mock function
        render(<SearchBar onSearch={onSearch} />);

        // Get the input field by its label and simulate typing a query
        const input = screen.getByLabelText(/Search for a product.../i);
        fireEvent.change(input, { target: { value: 'test query' } });

        // Get the search icon button and simulate a click
        const searchButton = screen.getByRole('button');
        fireEvent.click(searchButton);

        // Assert that onSearch is called with the correct query
        expect(onSearch).toHaveBeenCalledWith('test query');
    });

    it('should not call onSearch if the query is empty or only spaces', () => {
        const onSearch = vi.fn(); // Use Vitest's mock function
        render(<SearchBar onSearch={onSearch} />);

        // Get the input field by its label and simulate an empty query
        const input = screen.getByLabelText(/Search for a product.../i);
        fireEvent.change(input, { target: { value: '  ' } });

        // Simulate pressing Enter
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

        // Assert that onSearch is not called
        expect(onSearch).not.toHaveBeenCalled();
    });
});
