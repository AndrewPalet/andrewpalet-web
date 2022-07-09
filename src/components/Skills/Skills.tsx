import React from 'react';
import styled from '@emotion/styled';
import SkillCard from './SkillCard/SkillCard';
import { Container } from '@mui/system';
import { Stack, Typography } from '@mui/material';

const SkillsContainer = styled(Container)`
	text-align: center;
	margin: 50px 0 50px 0;
`;

const Skills = () => {
  return (
    <SkillsContainer>
			<Typography variant="h2">
				Skills
			</Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
      >
        <SkillCard />
        <SkillCard />
        <SkillCard />
      </Stack>
    </SkillsContainer>
  )
}

export default Skills;
