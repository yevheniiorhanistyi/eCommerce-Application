import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ModalProvider } from './components/ModalProvider/ModalProvider';
import { CategoryDataProvider } from './components/CategoryDataProvider/CategoryDataProvider';
import { CartProvider } from './components/CartProvider/CartProvider';
import theme from './theme';

import router from './routes/router';

const App: React.FC = () => (
  <SnackbarProvider maxSnack={3}>
    <AuthProvider>
      <CartProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ModalProvider>
            <CategoryDataProvider>
              <Box data-testid="app" className="App">
                <RouterProvider router={router} />
              </Box>
            </CategoryDataProvider>
          </ModalProvider>
        </ThemeProvider>
      </CartProvider>
    </AuthProvider>
  </SnackbarProvider>
);

export default App;
