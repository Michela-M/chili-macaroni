import React from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router';
import { Typography, Stack, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

const Home = () => {
    const navigate = useNavigate();

    const handleSearch = async (query) => {
        // temporary return data
        const data = {
            id: 21342,
            name: 'The Insect Collection',
            price: 99.9,
            img: 'https://www.lego.com/cdn/cs/set/assets/blte32d946cf23b2e5c/21342.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2',
        };

        navigate(`/sets/${data.id}`, {
            state: {
                set: data,
            },
        });
    };

    const products = [
        {
            name: 'Mini Orchid',
            image: 'https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2',
            oldPrice: 'CHF34.90',
            newPrice: '23.90 CHF',
        },
        {
            name: 'Lucky Bamboo',
            image: 'https://www.lego.com/cdn/cs/set/assets/blt5186ea8ea23f07aa/10344_Prod.png?format=webply&fit=bounds&quality=60&width=640&height=640&dpr=2',
            oldPrice: '34.90',
            newPrice: '21.70 CHF',
        },
        {
            name: 'Plum Blossom',
            image: 'https://www.lego.com/cdn/cs/set/assets/bltd6f8360aaf62c494/10369_Prod.png?format=webply&fit=bounds&quality=60&width=640&height=640&dpr=2',
            oldPrice: '36.90 CHF',
            newPrice: '20',
        },
        {
            name: 'Chrysanthemum',
            image: 'https://www.lego.com/cdn/cs/set/assets/bltdbc3129b50f61480/10368_Prod.png?format=webply&fit=bounds&quality=60&width=640&height=640&dpr=2',
            oldPrice: '36.90 CHF',
            newPrice: '23.70 CHF',
        },
    ];

    return (
        <>
            <Stack
                sx={{
                    alignItems: 'center',
                    backgroundImage: 'url("/images/bg.jpg")', // or use a full URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    color: 'white',
                    p: 6,
                }}
            >
                <Typography variant="h3" sx={{ pb: 2 }}>
                    Find your next LEGO set
                </Typography>
                <SearchBar onSearch={handleSearch} />
                <Typography fontStyle="italic">
                    Search by set name or number
                </Typography>
            </Stack>
            <Stack sx={{ p: 2 }}>
                <Typography variant="h5">Trending Sets</Typography>
                <Grid container spacing={2}>
                    {products.map((product, i) => (
                        <Grid size={{ xs: 6, md: 3 }}>
                            <ProductCard
                                name={product.name}
                                image={product.image}
                                oldPrice={product.oldPrice}
                                newPrice={product.newPrice}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </>
    );
};

export default Home;
