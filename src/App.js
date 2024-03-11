import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Research from './pages/Research';

const theme = createTheme({
  palette: {
    primary: {
      main: '#294959',
      light: '#017882',
      dark:'#202124',
    },
    secondary: {
      main: '#88D581',
      light: '#F9F871',
      dark:'#2AA98E',
    },
    tonalOffset: 0.5,
  },
  typography: {
    fontFamily: [
      'Madimi One',
      'Quicksand',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontWeightLight: 100,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="fixed-background">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
