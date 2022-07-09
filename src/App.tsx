import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import styled from '@emotion/styled';
import { theme } from './Theme';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Container from '@mui/material/Container';

// CSS
import './App.scss';
import NavBar from './components/NavBar/NavBar';

const MainContainer = styled(Container)`
  //height: 100vh;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainContainer id='MainContainer'>
          <NavBar />
          <Home />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </MainContainer>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
