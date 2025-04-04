import React from 'react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router';

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
        <div>
            <h1>Find Your LEGO Set</h1>
            <SearchBar onSearch={handleSearch} />
        </div>
    );
};

export default Home;
