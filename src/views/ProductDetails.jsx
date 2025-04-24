import React from 'react';
import { useLocation } from 'react-router';
import ProductImages from '../components/ProductImages';
import { Typography, Stack, Button, Link, Card } from '@mui/material';
import Grid from '@mui/material/Grid';
import { formatPrice } from '../utils/PriceUtils';

const ProductPage = () => {
    const { state } = useLocation();

    if (!state) return <div>No product data found.</div>;

    return (
        <Grid container spacing={2} sx={{ padding: '20px' }}>
            <Grid size={5}>
                <ProductImages images={state.set.images} />
            </Grid>
            <Grid size={7}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>
                    {state.set.name}
                </Typography>
                <Card
                    sx={{
                        backgroundColor: '#EFEFEE',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Stack spacing={1}>
                        {state.set.price.map((store, index) => (
                            <Stack
                                key={index}
                                direction="row"
                                alignItems="center"
                                sx={{ columnGap: '20px' }}
                            >
                                <Typography fontWeight="bold">
                                    {formatPrice(store.price)}
                                </Typography>
                                <Typography sx={{ flex: 1, textAlign: 'left' }}>
                                    {store.storeName}
                                </Typography>
                                <Button
                                    variant={
                                        index === 0 ? 'contained' : 'outlined'
                                    }
                                    component={Link}
                                    href={store.link}
                                    target="_blank"
                                    rel="noopener"
                                >
                                    Visit Store
                                </Button>
                            </Stack>
                        ))}
                    </Stack>
                </Card>

                <Typography variant="body1" sx={{ marginTop: '20px' }}>
                    {state.set.description}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ProductPage;
