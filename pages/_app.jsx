// pages/_app.js

import React from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ContactUs from "./contact-us";
import "../styles/global.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#f4c150",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <div className="App">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </StyledEngineProvider>
    </ThemeProvider>
  );
}

export default MyApp;
