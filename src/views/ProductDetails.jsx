import React from 'react';
import { useLocation } from 'react-router';
import ProductImages from '../components/ProductImages';
import {
    Typography,
    Stack,
    Button,
    Link,
    Card,
    Tabs,
    Tab,
    Box,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { formatPrice } from '../utils/PriceUtils';
import { LineChart } from '@mui/x-charts/LineChart';
import { useState } from 'react';

const ProductPage = () => {
    const { state } = useLocation();
    const [view, setView] = useState('month');

    if (!state) return <div>No product data found.</div>;

    const handleChange = (_, newValue) => setView(newValue);

    const xDataByView = {
        day: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            scaleType: 'band',
        },
        week: {
            data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            scaleType: 'band',
        },
        month: {
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            scaleType: 'band',
        },
    };

    const seriesByView = {
        day: [
            {
                label: 'Galaxus',
                data: [19.99, 19.49, 19.99, 19.99, 19.75, 19.5, 19.99],
                curve: 'stepBefore',
                showMark: false,
                color: '#9675B4',
            },
            {
                label: 'Amazon.de',
                data: [25.99, 25.5, 26.0, 26.0, 25.75, 26.0, 26.0],
                curve: 'stepBefore',
                showMark: false,
                color: '#00BED3',
            },
            {
                label: 'Lego',
                data: [39.5, 39.99, 39.99, 39.99, 39.75, 39.99, 39.99],
                curve: 'stepBefore',
                showMark: false,
                color: '#FFCD03',
            },
        ],
        week: [
            {
                label: 'Galaxus',
                data: [19.49, 19.75, 19.99, 19.99],
                curve: 'stepBefore',
                showMark: false,
                color: '#9675B4',
            },
            {
                label: 'Amazon.de',
                data: [25.75, 25.85, 26.0, 26.0],
                curve: 'stepBefore',
                showMark: false,
                color: '#00BED3',
            },
            {
                label: 'Lego',
                data: [39.49, 39.75, 39.99, 39.99],
                curve: 'stepBefore',
                showMark: false,
                color: '#FFCD03',
            },
        ],
        month: [
            {
                label: 'Galaxus',
                data: [20.99, 19.49, 19.99, 19.99, 19.99, 19.99],
                curve: 'stepBefore',
                showMark: false,
                color: '#9675B4',
            },
            {
                label: 'Amazon.de',
                data: [24.99, 25.49, 25.99, 25.75, 26.0, 26.0],
                curve: 'stepBefore',
                showMark: false,
                color: '#00BED3',
            },
            {
                label: 'Lego',
                data: [36.99, 37.49, 38.99, 39.5, 39.99, 39.99],
                curve: 'stepBefore',
                showMark: false,
                color: '#FFCD03',
            },
        ],
    };

    return (
        <Grid container spacing={2} sx={{ padding: '20px' }}>
            <Grid size={{ xs: 12, sm: 4, md: 5, lg: 7 }}>
                <ProductImages images={state.set.images} />
            </Grid>
            <Grid size={{ xs: 12, sm: 8, md: 7, lg: 5 }}>
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
            <Grid size={8}>
                <Box>
                    <Tabs value={view} onChange={handleChange} centered>
                        <Tab value="day" label="Daily" />
                        <Tab value="week" label="Weekly" />
                        <Tab value="month" label="Monthly" />
                    </Tabs>
                    {console.log(xDataByView[view])}
                    {console.log(seriesByView[view])}

                    <LineChart
                        xAxis={[xDataByView[view]]}
                        yAxis={[{ min: 10, max: 50, tickMinStep: 10 }]}
                        sx={{
                            '& .MuiLineElement-root': {
                                strokeWidth: 3,
                            },
                            '& .MuiChartsAxis-tick': {
                                stroke: '#151515',
                            },
                            '& .MuiChartsAxis-tickLabel': {
                                fill: '#151515',
                            },
                            '& .MuiChartsAxis-line': {
                                stroke: '#151515',
                            },
                            '& .MuiChartsGrid-line': {
                                stroke: '#A0A19F',
                            },
                        }}
                        series={seriesByView[view]}
                        height={500}
                        grid={{ horizontal: true }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProductPage;
