
import { Box, Button, Container, createTheme, ThemeProvider } from '@mui/material';
import './style.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function BarterIt() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Container className="DarkOverlayContainer" maxWidth="100%"></Container>
            <Box className='Box'>
                <Button
                    className='Button'
                    type="submit"
                    fullWidth
                    variant="contained"
                    target="_blank"
                    href={"https://twitter.com/PuzzleBites"}
                >
                    {"option.name"}
                </Button>
            </Box>
        </ThemeProvider>
    );
}