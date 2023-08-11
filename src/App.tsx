import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import SignIn from './pages/SignIn/SignIn';
import theme from './theme';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box data-testid="app" className="App">
        <RegistrationPage />
        <SignIn />
      </Box>
    </ThemeProvider>
  );
}

export default App;
