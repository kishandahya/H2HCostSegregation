import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  marginRight: '1rem',
};

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Box display="flex" alignItems="center">
          <Link href="/" passHref>
            <Typography variant="h6" component="div" style={linkStyle}>
              H2H
            </Typography>
          </Link>
          <Link href="/#home-content" passHref>
            <Typography component="div" style={linkStyle}>
              Home
            </Typography>
          </Link>
        </Box>
        <Box display="flex" flexGrow={1} justifyContent="flex-end" alignItems="center">
          <Link href="/#about" passHref>
            <Typography component="div" style={linkStyle}>
              About
            </Typography>
          </Link>
          <Link href="/#work" passHref>
            <Typography component="div" style={linkStyle}>
              Work
            </Typography>
          </Link>
          <Link href="/#team" passHref>
            <Typography component="div" style={linkStyle}>
              Team
            </Typography>
          </Link>
          <Link href="/#blog" passHref>
            <Typography component="div" style={linkStyle}>
              Blog
            </Typography>
          </Link>
          <Link href="/contact-us" passHref>
            <Typography component="div" style={linkStyle}>
              Contact Us
            </Typography>
          </Link>
          <Link href="/contact-us" passHref>
            <Button
              variant="outlined"
              component="div"
            
              style={{
                textDecoration: 'none',
                backgroundColor: '#f4c150',
                color: 'black',
                borderColor: '#f4c150',
                marginRight: '1rem',
              }}
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
