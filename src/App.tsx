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

const MainContainer = styled(Container)`
  //background: #022c43;
  //text-align: center;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MainContainer>
          <Home />
          <About />
          <Projects />
          <Skills />
        </MainContainer>
      </ThemeProvider>
    </Router>
    
  );
}

export default App;
