import { Grid, ThemeProvider, colors, createTheme } from '@mui/material';
import WeatherCard from './weatherCard';
import { blue, blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: blue,
    secondary: blueGrey,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={'center'}
        display={'flex'}
        height={'100vh'}
        alignContent={'center'}
        sx={{ backgroundColor: theme.palette.secondary.dark }}
      >
        <WeatherCard />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
