
import {createTheme, Grid, ThemeProvider, Toolbar} from '@mui/material';
import ContentButtons from '../content-buttons';
import DrawerAppBar from '../drawer-app-bar';
import './style.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function BarterIt() {
    return (
        <ThemeProvider theme={darkTheme}>
            <DrawerAppBar></DrawerAppBar>
            <Toolbar />
            <ContentButtons></ContentButtons>
            <Grid></Grid>
        </ThemeProvider>
    );
}