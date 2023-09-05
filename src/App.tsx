import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { AuthProvider } from './components/AuthProvider/AuthProvider';
import { ModalProvider } from './components/ModalProvider/ModalProvider';
import theme from './theme';

import Main from './pages/Main/Main';
import Catalog from './pages/Catalog/Catalog';
import DetailedProductPage from './pages/DetailedProductPage/DetailedProductPage';
import NotFound404 from './pages/NotFound404/NotFound404';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import PrimaryLayout from './layouts/PrimaryLayout';
import { CategoryDataProvider } from './components/CategoryDataProvider/CategoryDataProvider';

const App: React.FC = () => (
  <SnackbarProvider maxSnack={3}>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ModalProvider>
          <CategoryDataProvider>
            <Box data-testid="app" className="App">
              <BrowserRouter>
              <Routes>
                <Route element={<PrimaryLayout />}>
                  <Route path="/" element={<Main />} />
                  <Route path="/signin" element={<SignIn />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/product/:key" element={<DetailedProductPage />} />
                  <Route path="/catalog" element={<Catalog />} />
                  <Route path="/category/:key" element={<Catalog />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/*" element={<NotFound404 />} />
                  </Route>
              </Routes>
            </BrowserRouter>
          </Box>
          </CategoryDataProvider>
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  </SnackbarProvider>
);

export default App;
