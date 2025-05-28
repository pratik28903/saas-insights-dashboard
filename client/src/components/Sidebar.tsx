import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  IconButton,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button component={Link as React.ElementType} to="/">
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link as React.ElementType} to="/login">
          <ListItemIcon><LoginIcon /></ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        color="inherit"
        edge="start"
        sx={{ ml: 2, mt: 1 }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ '& .MuiDrawer-paper': { width: drawerWidth } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
