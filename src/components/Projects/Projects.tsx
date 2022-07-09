import React from 'react'
import styled from '@emotion/styled'
import ProjectCard from './ProjectCard/ProjectCard'
import { Container } from '@mui/system'
import { Stack, Typography } from '@mui/material'

const ProjectsContainer = styled(Container)`
  text-align: center;
  margin: 50px 0 50px 0;
`

const Projects = () => {
  return (
    <ProjectsContainer>
      <Typography variant="h2">Projects</Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </Stack>
    </ProjectsContainer>
  )
}

export default Projects
