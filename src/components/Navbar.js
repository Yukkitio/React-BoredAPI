import React from 'react';
import { useTheme, AppBar, Toolbar, Tabs, Tab, alpha } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
];

const Navbar = () => {
  const theme = useTheme();
  const location = useLocation();

  const currentTab = links.findIndex(link => link.href === location.pathname);

  return (
    <AppBar position="static" sx={{
      backgroundColor: alpha(theme.palette.background.default, 0.2),
      backdropFilter: 'blur(2px)',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 40,
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      width: "98%",
      mx: "auto",
    }}>
      <Toolbar variant="dense">
        <Tabs 
          value={currentTab} 
          variant="fullWidth"
          sx={{ 
            margin: '0 auto',
            '& .MuiTabs-indicator': {
              backgroundColor: alpha(theme.palette.secondary.dark, 0.8),
              height: '20%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20
            }
          }}
          >
          {links.map((link) => (
            <Tab 
              key={link.label} 
              label={link.label} 
              component={Link} 
              to={link.href} 
              sx={{
                color: theme.palette.secondary.dark,
                margin: '0 8vh',
                borderRadius: "26% 74% 49% 51% / 37% 40% 60% 63%",
                '&:hover': {
                  textDecoration: 'underline',
                  fontWeight: 'bolder'
                }
              }}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
