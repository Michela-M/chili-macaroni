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
            <div>
                <Typography variant="h2">Find your next LEGO set</Typography>
                <SearchBar onSearch={handleSearch} />
                <Typography>Search by set name or number</Typography>
            </div>
            <div>
                <h3>Trending Sets</h3>
                <Card>
                    <CardMedia
                        component="img"
                        title="Mini Orchid"
                        src="https://www.lego.com/cdn/cs/set/assets/bltade30768c791af76/10343_Prod.png?format=webply&fit=bounds&quality=60&width=800&height=800&dpr=2"
                    />
                    <CardContent>
                        <Typography variant="body">Mini Orchid</Typography>
                        <Chip label="-31%" color="primary" />
                        <Typography variant="body">34.90 CHF</Typography>
                        <Typography variant="body">23.90 CHF</Typography>
                    </CardContent>
                    <CardActions>
                        <Button>Buy now</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    );
};

export default Home;
