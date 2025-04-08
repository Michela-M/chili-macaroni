import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        common: {
            black: '#151515',
            white: '#F4F4F4',
        },
        primary: {
            main: '#00BED3',
        },
        secondary: {
            main: '#FFCD03',
        },
        error: {
            main: '#DD1A21',
        },
        warning: {
            main: '#F57D20',
        },
        info: {
            main: '#9675B4',
        },
        success: {
            main: '#9ACA3A',
        },
        text: {
            primary: '#151515',
            secondary: '#42423E',
        },
        divider: '#646765',
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        h6: {
            fontWeight: 600,
        },
    },
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    color: '#00BED3',
                    backgroundColor: '#F4F4F4',
                    border: '2px solid #00BED3',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    color: '#F4F4F4',
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        backgroundColor: 'white',
                    },
                },
            },
        },
    },
});

export default theme;
