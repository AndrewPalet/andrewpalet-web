import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import styled from '@emotion/styled'
import { theme } from './Theme'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Container from '@mui/material/Container'
import NavBar from './components/NavBar/NavBar'


const AppContainer = styled(Container)`
  background-color: #fdf6ec;
  overflow: hidden;
`
const ContentContainer = styled(Container)`
  //background-color: #fdf6ec;
`

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppContainer maxWidth={false} disableGutters id="App-Container">
          <ContentContainer id="Content-Container">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </ContentContainer>
        </AppContainer>
      </ThemeProvider>
    </Router>
  )
}

export default App
