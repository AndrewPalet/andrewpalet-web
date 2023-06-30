import React from 'react'
import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import { jobInfo } from '../../data/data'

const AboutContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
  padding-top: 200px;
`

const About = () => (
  <AboutContainer id='About-Container'>
    <Typography variant="h1" sx={{ marginBottom: 2 }}>
      About
    </Typography>
    <Typography variant="h3">
      I'm a Dallas based { jobInfo.title }. I graduated with a Bachelor's in
      Computer Science from the University of Texas at Dallas. Currently working
      as a { jobInfo.title } at { jobInfo.company }. When I'm not coding I enjoy playing
      Rugby, hanging out with friends, playing with my dog, and traveling.
    </Typography>
  </AboutContainer>
)

export default About
