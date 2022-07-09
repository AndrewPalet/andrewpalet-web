import React from 'react'
import styled from '@emotion/styled'
import SkillCard from './SkillCard/SkillCard'
import { Container } from '@mui/system'
import { Grid, Stack, Typography } from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory'

const SkillsContainer = styled(Container)`
  text-align: center;
  margin: 50px 0 50px 0;
`

const skillsList = [
  'Javascript/Typescript',
  'React',
  'HTML & CSS',
  'Flutter/Dart',
  'Material UI',
  'Java',
]

const SkillGridItem = styled(Grid)`
	display: flex;
	justify-content: center;
	align-content: center;
`;

const Skills = () => {
  return (
    <SkillsContainer id='Skills-Container'>
      <MemoryIcon />
      <Typography variant="h2" sx={{ marginBottom: 5 }}>Skills & Technologies</Typography>
      <Grid container spacing={2} id="Skills-Grid">
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
