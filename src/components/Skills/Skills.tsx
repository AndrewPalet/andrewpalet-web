import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from '@emotion/styled'
import SkillCard from './SkillCard/SkillCard'
import { Container } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory'
import { skillsList } from '../../data/data'

const SkillsContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
	padding-top: 100px;
`

const SkillGridItem = styled(Grid)`
  display: flex;
  justify-content: center;
  align-content: center;
`

const Skills = () => {
  return (
    <SkillsContainer id="Skills-Container">
      <MemoryIcon sx={{ fontSize: 35 }} />
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Skills & Technologies
      </Typography>
      <Grid container spacing={2} id="Skills-Grid">
        {skillsList.map((skill: string) => (
          <SkillGridItem item xs={12} md={6} key={uuidv4()}>
            <SkillCard skill={skill} />
          </SkillGridItem>
        ))}
      </Grid>
    </SkillsContainer>
  )
}

export default Skills
