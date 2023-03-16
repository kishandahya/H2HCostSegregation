import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Section = ({ id, title, text, buttonText, buttonLink, imageSrc, imageAlt, reverse }) => {
  const sectionImage = (
    <Box flex="1" padding="0 2rem">
      <img src={imageSrc} alt={imageAlt} style={{ width: '100%', borderRadius: '5px' }} />
    </Box>
  );

  const sectionText = (
    <Box flex="1" padding="0 4rem">
      <Box textAlign="center">
        <Typography variant="h4" paragraph>{title}</Typography>
      </Box>
      <Typography paragraph>{text}</Typography>
      <Box textAlign="center">
        <Button variant="contained" color="secondary" component={Link} href={buttonLink}>
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
  
  
    return (
      <Box id={id} display="flex" justifyContent="space-between" alignItems="center" flexDirection={reverse ? 'row-reverse' : 'row'} marginBottom={4}>
        {sectionImage}
        {sectionText}
      </Box>
    );
  };
  
  export default Section;
  