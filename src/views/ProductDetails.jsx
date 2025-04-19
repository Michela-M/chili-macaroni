import React from 'react';
import { useLocation } from 'react-router';
import ProductImages from '../components/ProductImages';

const tempProduct = {
    images: [
        'https://www.lego.com/cdn/cs/set/assets/blte25a9ccc4d363ee2/21349.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2',
        'https://www.lego.com/cdn/cs/set/assets/blteeaa0fc690139b7d/21349_boxprod_v39_sha.jpg?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2',
    ],
    name: 'Sample Product',
    price: '$19.99',
    description: 'This is a sample product description.',
};

const ProductPage = () => {
    const { state } = useLocation();

    if (!state) return <div>No product data found.</div>;

    console.log('state:', state);

    return (
        <div>
            <ProductImages images={tempProduct.images} />
            <h2>{state.set.name}</h2>
            <p>ID: {state.set.id}</p>
            <p>price: {state.set.price}</p>
        </div>
    );
};

export default ProductPage;
