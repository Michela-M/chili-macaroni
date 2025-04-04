import React from 'react';
import { useLocation } from 'react-router';

const ProductPage = () => {
    const { state } = useLocation();

    if (!state) return <div>No product data found.</div>;

    console.log('state:', state);

    return (
        <div>
            <h2>{state.set.name}</h2>
            <p>ID: {state.set.id}</p>
            <p>price: {state.set.price}</p>
        </div>
    );
};

export default ProductPage;
