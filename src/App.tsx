import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import SignIn from './pages/SignIn/SignIn';
import theme from './theme';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box data-testid="app" className="App">
        <SignIn />
      </Box>
    </ThemeProvider>
  );
}

export default App;
