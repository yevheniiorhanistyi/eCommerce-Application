import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ModalProvider } from './components/ModalProvider/ModalProvider';
import theme from './theme';
import router from './routes/router';

const App: React.FC = () => (
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModalProvider>
        <Box data-testid="app" className="App">
          <RouterProvider router={router} />
        </Box>
      </ModalProvider>
    </ThemeProvider>
  </AuthProvider>
);

export default App;
