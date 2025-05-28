import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Sidebar from './components/Sidebar';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';

interface AppProps {
  toggleMode: () => void;
}

export default function App({ toggleMode }: AppProps) {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Sidebar />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
             Dashboard
          </Typography>
          <IconButton color="inherit" onClick={toggleMode}>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
