import React from 'react'
import styled from '@emotion/styled'
import SkillCard from './SkillCard/SkillCard'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory'
import { skillsList } from '../../data/data'

const SkillsContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
`

const SkillGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Skills = () => {
  return (
    <SkillsContainer id="Skills-Container">
      <MemoryIcon />
      <Typography variant="h2" sx={{ marginBottom: 2 }}>
        Skills & Technologies
      </Typography>
      <Grid
        container
        spacing={2}
        id="Skills-Grid"
      >
        {skillsList.map((skill: string) => (
          <SkillGridItem item xs={12} md={6}>
            <SkillCard skill={skill} />
          </SkillGridItem>
        ))}
      </Grid>
    </SkillsContainer>
  )
}

export default Skills
