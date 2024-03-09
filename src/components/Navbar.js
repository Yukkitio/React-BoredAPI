import React from 'react';
import { useTheme, AppBar, Toolbar, Tabs, Tab, alpha } from '@mui/material';
import { Link } from 'react-router-dom';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
];

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{
      backgroundColor: alpha(theme.palette.background.default, 0.2),
      backdropFilter: 'blur(2px)',
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      borderBottom: `2px solid ${theme.palette.primary.light}`
    }}>
      <Toolbar>
        <Tabs sx={{ margin: '0 auto' }} variant="fullWidth">
          {links.map((link) => (
            <Tab 
              key={link.label} 
              label={link.label} 
              component={Link} 
              to={link.href} 
              sx={{
                color: theme.palette.secondary.main,
                borderRadius: 100,
                '&:hover': { backgroundColor: theme.palette.secondary.light}
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
