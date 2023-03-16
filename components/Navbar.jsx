import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Hidden,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '1rem',
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setDrawerOpen(open);
  };

  const buttonStyle = {
    textDecoration: 'none',
    backgroundColor: '#f4c150',
    color: 'black',
    borderColor: '#f4c150',
    marginRight: '1rem',
  };

  const leftNavLinks = [
    { href: '/', text: 'H2H' },
    { href: '/#home-content', text: 'Home' },
  ];

  const rightNavLinks = [
    { href: '/#about', text: 'About' },
    { href: '/#work', text: 'Work' },
    { href: '/#team', text: 'Team' },
    { href: '/#blog', text: 'Blog' },
    { href: '/contact-us', text: 'Contact Us' },
  ];

  const renderNavLink = (link) => (
    <Link key={link.text} href={link.href} passHref>
      <Typography component="div" style={linkStyle}>
        {link.text}
      </Typography>
    </Link>
  );

  const renderNavList = () => (
    <List>
      {leftNavLinks.concat(rightNavLinks).map((link) => (
        <ListItem button key={link.text} onClick={toggleDrawer(false)}>
          <ListItemText primary={renderNavLink(link)} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Hidden mdDown>{leftNavLinks.map(renderNavLink)}</Hidden>
        </Box>
        <Box display="flex" flexGrow={1} justifyContent="flex-end" alignItems="center">
          <Hidden mdDown>{rightNavLinks.map(renderNavLink)}</Hidden>
          <Link href="/contact-us" passHref>
            <Button variant="outlined" component="div" style={buttonStyle}>
              Get Started
            </Button>
          </Link>
        </Box>
      </Toolbar>
      <Drawer
  anchor="left"
  open={drawerOpen}
  onClose={toggleDrawer(false)}
  sx={{
    '& .MuiDrawer-paper': {
      backgroundColor: '#3f51b5', // Same as AppBar default background color
      color: 'white', // Same as AppBar default text color
    },
  }}
>
  {renderNavList()}
</Drawer>
    </AppBar>
  );
};

export default Navbar;
