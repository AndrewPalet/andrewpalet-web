import React from 'react'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Container } from '@mui/system'

const FooterContainer = styled(Container)`
    text-align: center;
    margin: 100px 0 5px 0;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant='body2'>created by Andrew Palet</Typography>
      <Typography variant='body2'>© 2022</Typography>
    </FooterContainer>
  )
}

export default Footer
