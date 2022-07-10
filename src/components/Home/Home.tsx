import React from 'react';
import styled from '@emotion/styled';
import ProfilePic from '../../assets/images/about-me-profile-pic.png';
import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomeStackStyled = styled(Stack)`
  align-items: center;
  justify-content: center;
  min-width: 200px;
  margin: 50px 0 50px 0;
  overflow: auto;
`;

const ProfilePicStyled = styled('img')`
  width: 100%;
  max-width: 400px;
  height: auto;
`;

const IconStyled = styled('a')`
  font-size: 30px;

  &:hover svg {
    color: #ffd700;
  }

`;

const Home = () => (
    <HomeStackStyled direction={{ xs: 'column', md: 'row' }} spacing={2} id="HomeStack" minHeight={'100vh'}>
      <ProfilePicStyled src={ ProfilePic } alt="profile-pic" />
      <Stack sx={{ paddingLeft: 1 }}>
        <Typography variant="h1">
          Howdy, I'm Andrew
        </Typography>
        <Typography variant="h2">
          I'm a Frontend Developer
        </Typography>
        <Typography variant="subtitle1">
          ☕️ Fueled by coffee
        </Typography>
        <Typography variant="subtitle1">
          📍 Dallas, TX
        </Typography>
        <Typography variant="subtitle1">
          💻 Frontend Developer for McKesson
        </Typography>
        <Container sx={{ display: 'flex', justifyContent: 'space-evenly', paddingTop: 1}}>
          <IconStyled 
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/andrew-palet/">
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </IconStyled>
          <IconStyled 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AndrewPalet">
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </IconStyled>
        </Container>
      </Stack>
    </HomeStackStyled>
)

export default Home;