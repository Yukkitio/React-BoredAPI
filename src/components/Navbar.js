import React from 'react';
import { AppBar, Toolbar, Tabs, Tab} from '@mui/material';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research' },
];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs>
          {links.map((link) => (
            <Tab key={link.label} label={link.label} href={link.href} />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;