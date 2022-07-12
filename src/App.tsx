import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import styled from '@emotion/styled'
import './App.scss'
import { theme } from './Theme'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Container from '@mui/material/Container'
import NavBar from './components/NavBar/NavBar'
import { Box } from '@mui/material'
import Footer from './components/Footer/Footer'

const AppBox = styled(Box)`
  background-color: #fdf6ec;
  overflow: auto;
  overflow-wrap: break-word;
`
const ContentContainer = styled(Container)`

`

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppBox id="App-Box">
          <ContentContainer id="Content-Container">
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </ContentContainer>
        </AppBox>
      </ThemeProvider>
    </Router>
  )
}

export default App
