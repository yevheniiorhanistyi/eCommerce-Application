import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './theme';
import router from './routes/router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box data-testid="app" className="App">
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
