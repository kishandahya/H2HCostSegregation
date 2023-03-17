import React from "react";
import { useRouter } from "next/router";
import { Box, Container, Typography, Button } from "@mui/material";

const Landing = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/contact-us");
  };

  return (
    <Box
      component="header"
      minHeight="75vh"
      paddingTop="64px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="1rem 0"
      sx={{
        backgroundImage: "url('/assets/poolside.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        position: "relative",
        "::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(rgba(128, 128, 128, 0.6), rgba(128, 128, 128, 0.6))",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 3 }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ color: "white", textShadow: "0.5px 0.5px 0.5px black" }}
        >
          Hotel Cost Segregation Services
        </Typography>
        <Typography
          variant="h6"
          align="center"
          paragraph
          sx={{ color: "white", textShadow: "1px 1px 1px black" }}
        >
          Maximize your tax savings and improve cash flow for your hotel
        </Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleButtonClick}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Landing;
