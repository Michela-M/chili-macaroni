import React from 'react';
import { useLocation } from 'react-router';
import ProductImages from '../components/ProductImages';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const ProductPage = () => {
    const { state } = useLocation();

    if (!state) return <div>No product data found.</div>;

    return (
        <Grid container spacing={2} sx={{ padding: '20px' }}>
            <ProductImages images={state.set.images} />
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                {state.set.name}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                Price: {state.set.price}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: '20px' }}>
                {state.set.description}
            </Typography>
        </Grid>
    );
};

export default ProductPage;
