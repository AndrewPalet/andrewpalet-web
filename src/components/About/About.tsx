import React from 'react';
import styled from '@emotion/styled';
import { Container, Typography } from '@mui/material';

const AboutContainer = styled(Container)`
    text-align: center;
    margin: 100px 0 100px 0;
`;

const About = () => (
    <AboutContainer>
        <Typography variant="h2" sx={{ marginBottom: 2 }}>
            About
        </Typography>
        <Typography>
            I'm a Dallas based Software Engineer. Currently working as a
            Frontend Developer for McKesson. When I'm not coding I enjoy playing
            Rugby, hanging out with friends, playing with my dog, and traveling.
        </Typography>
    </AboutContainer>
)

export default About;