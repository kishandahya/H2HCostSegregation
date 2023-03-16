import React from 'react';
import { Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2023 Hotel Cost Segregation Services. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;