import React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface SkillCardProps {
    skill: string;
}

const CardContentStyled = styled(CardContent)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const SkillCard = (props:SkillCardProps) => {
  return (
    <Card sx={{ width: 350, minWidth: 250}}>
      <CardContentStyled>
        <CheckCircleIcon sx={{ fontSize: 25, paddingRight: 2 }}/>
        <Typography gutterBottom variant="h4" component="span" sx={{
            padding:0
        }}>
          {props.skill}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default SkillCard;
