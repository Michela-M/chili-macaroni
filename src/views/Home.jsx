import React from 'react';
import SearchBar from '../components/SearchBar';
import axios from 'axios';

const Home = () => {
    const handleSearch = async (query) => {
        try {
            const response = await axios.get(query); // Fetch the page content
            console.log('Page HTML:', response.data);
        } catch (error) {
            console.error('Error fetching the page:', error);
        }
    };

    return (
        <div>
            <h1>Find Your LEGO Set</h1>
            <SearchBar onSearch={handleSearch} />
        </div>
    );
};

export default Home;
