import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import theme from './theme';
import router from './routes/router';
import { ModalProvider } from './components/ModalProvider/ModalProvider';

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <ModalProvider>
      <Box data-testid="app" className="App">
        <RouterProvider router={router} />
      </Box>
    </ModalProvider>
  </ThemeProvider>
);

export default App;
