import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import ProjectCard from './ProjectCard/ProjectCard'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import { projects } from '../../data/data'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'

const ProjectsContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
  padding-top: 100px;
`

const ProjectGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Projects = () => {
  return (
    <ProjectsContainer id="Projects-Container">
      <LaptopMacIcon sx={{ fontSize: 35 }}/>
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Projects
      </Typography>
      <Grid container spacing={2} id="Projects-Grid">
        {projects.map((project) => (
          <ProjectGridItem item xs={12} md={6} key={uuidv4()}>
            <ProjectCard {...project} />
          </ProjectGridItem>
        ))}
      </Grid>
    </ProjectsContainer>
  )
}

export default Projects
