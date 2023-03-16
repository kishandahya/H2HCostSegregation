import React from 'react';
import { useRouter } from 'next/router';
import { Box, Container, Typography, Button } from '@mui/material';

const Header = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/contact-us');
  };

  return (
    <header>
      <Box minHeight="calc(100vh - 64px)" paddingTop="64px" display="flex" flexDirection="column" alignItems="center" justifyContent="center" padding="1rem 0" style={{ backgroundImage: "url('/assets/poolside.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <Container maxWidth="md">
          <Typography variant="h2" align="center">Hotel Cost Segregation Services</Typography>
          <Typography variant="h6" align="center" paragraph>
            Maximize your tax savings and improve cash flow for your hotel
          </Typography>
          <Box textAlign="center">
            <Button variant="contained" color="secondary" onClick={handleButtonClick}>Get Started</Button>
          </Box>
        </Container>
      </Box>
    </header>
  );
};

export default Header;
