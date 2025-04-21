import React from 'react';
import { useLocation } from 'react-router';
import ProductImages from '../components/ProductImages';
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';
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
                <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                    {state.set.name}
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: '20px' }}>
                    Prices:
                </Typography>
                <List>
                    {state.set.price.map((store, index) => (
                        <ListItem key={index}>
                            <ListItemText
                                primary={`${store.storeName}: ${formatPrice(store.price)}`}
                                secondary={
                                    <Link
                                        href={store.link}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Visit Store
                                    </Link>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="body1" sx={{ marginTop: '20px' }}>
                    {state.set.description}
                </Typography>
            </Grid>
        </Grid>
    );
};

export default ProductPage;
