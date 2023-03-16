// pages/_app.js

import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Section from '../components/Section';
import Footer from '../components/Footer';
import ContactUs from './contact-us';
import '../styles/global.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#f4c150',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
