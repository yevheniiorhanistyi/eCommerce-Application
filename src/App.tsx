import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ModalProvider } from './components/ModalProvider/ModalProvider';
import theme from './theme';

import { CategoryDataProvider } from './components/CategoryDataProvider/CategoryDataProvider';
import router from './routes/router';

const App: React.FC = () => (
  <SnackbarProvider maxSnack={3}>
    <AuthProvider>
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
    </AuthProvider>
  </SnackbarProvider>
);

export default App;
