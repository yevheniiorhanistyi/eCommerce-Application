import { ThemeProvider, CssBaseline } from '@mui/material';
import SignIn from './pages/SignIn/SignIn';
import theme from './theme';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div data-testid="app" className="App">
        <SignIn />
      </div>
    </ThemeProvider>
  );
}

export default App;
