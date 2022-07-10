import React from 'react'
import styled from '@emotion/styled'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

export interface ProjectProps {
    title: string,
    subtitle: string,
    description: string, 
    image: string,
    link: string,
}

/* TODO 
    Take out paddingLeft
*/

const ProjectCard = ({ title, subtitle, description, image, link}: ProjectProps) => {
  return (
    <Card sx={{ maxWidth: 345, minWidth: 150 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={image}
          alt="project image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ProjectCard;
