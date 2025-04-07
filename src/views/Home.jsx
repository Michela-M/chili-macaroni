import React from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router';
import {
    CardContent,
    CardMedia,
    Typography,
    Card,
    Chip,
    CardActions,
    Button,
    Stack,
    Box,
    Grid,
} from '@mui/material';

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

    return (
        <>
            <Stack sx={{ alignItems: 'center' }}>
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
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                title="Mini Orchid"
                                src="https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"
                            />
                            <CardContent>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h6">
                                        Mini Orchid
                                    </Typography>
                                    <Chip label="-31%" color="primary" />
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Typography
                                        variant="body"
                                        sx={{ textDecoration: 'line-through' }}
                                    >
                                        34.90 CHF
                                    </Typography>
                                    <Typography variant="body">
                                        23.90 CHF
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button variant="contained">Buy now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                title="Mini Orchid"
                                src="https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"
                            />
                            <CardContent>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h6">
                                        Mini Orchid
                                    </Typography>
                                    <Chip label="-31%" color="primary" />
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Typography
                                        variant="body"
                                        sx={{ textDecoration: 'line-through' }}
                                    >
                                        34.90 CHF
                                    </Typography>
                                    <Typography variant="body">
                                        23.90 CHF
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button variant="contained">Buy now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                title="Mini Orchid"
                                src="https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"
                            />
                            <CardContent>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h6">
                                        Mini Orchid
                                    </Typography>
                                    <Chip label="-31%" color="primary" />
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Typography
                                        variant="body"
                                        sx={{ textDecoration: 'line-through' }}
                                    >
                                        34.90 CHF
                                    </Typography>
                                    <Typography variant="body">
                                        23.90 CHF
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button variant="contained">Buy now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid size={{ xs: 6, md: 3 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                title="Mini Orchid"
                                src="https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"
                            />
                            <CardContent>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h6">
                                        Mini Orchid
                                    </Typography>
                                    <Chip label="-31%" color="primary" />
                                </Stack>
                                <Stack direction="row" spacing={2}>
                                    <Typography
                                        variant="body"
                                        sx={{ textDecoration: 'line-through' }}
                                    >
                                        34.90 CHF
                                    </Typography>
                                    <Typography variant="body">
                                        23.90 CHF
                                    </Typography>
                                </Stack>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button variant="contained">Buy now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Stack>
        </>
    );
};

export default Home;
