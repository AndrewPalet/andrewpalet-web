import React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface SkillProp {
  skill: string
}

const CardContentStyled = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
/* TODO 
    Take out paddingLeft
*/

const SkillCard = (props: SkillProp) => {
  return (
    <Card sx={{ width: 350, minWidth: 250 }}>
      <CardContentStyled>
        <CheckCircleIcon sx={{ fontSize: 25, paddingRight: 2 }} />
        <Typography variant="h4" component="span">
          {props.skill}
        </Typography>
      </CardContentStyled>
    </Card>
  )
}

export default SkillCard
