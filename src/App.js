import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import theme from './styles/theme';
import ProductDetails from './views/ProductDetails';
import { ThemeProvider } from '@mui/material';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <h1>My Basic Site</h1>
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route
                            path="/productDetails"
                            element={<ProductDetails />}
                        />
                    </Routes>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
