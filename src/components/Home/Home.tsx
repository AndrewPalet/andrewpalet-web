import React from 'react';
import styled from '@emotion/styled';
import ProfilePic from '../../assets/images/about-me-profile-pic.png';
import { Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const HomeStackStyled = styled(Stack)`
  align-items: center;
  justify-content: center;
  min-width: 200px;
  //overflow: auto;
  margin: 50px 0 50px 0;
`;

const ProfilePicStyled = styled('img')`
  width: 400px;
  overflow: auto;
`;

const IconStyled = styled('a')`
  font-size: 30px;

  &:hover svg {
    color: #ffd700;
  }

`;

const Home = () => (
    <HomeStackStyled direction="row" spacing={2} id="HomeStack">
      <ProfilePicStyled src={ ProfilePic } alt="profile-pic" />
      <Stack>
        <Typography variant="h2">
          Hi, I'm Andrew
        </Typography>
        <Typography variant="h3">
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
        <Container>
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