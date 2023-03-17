import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "white",
        width: "100%",
        padding: "1rem 0",
      }}
    >
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2023 Hotel Cost Segregation Services. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
