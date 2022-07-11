import React from 'react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'

const ContactContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
  padding-top: 100px;
`

const Contact = () => {
  const refForm = useRef()

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_vmkji3x',
        'contact_form',
        e.currentTarget,
        'dse7K1sfMFWyR3c9d'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload()
        },
        () => {
          alert('Failed to send the message, please try again!')
        }
      )
  }

  return (
    <ContactContainer id="Contact-Container">
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Contact Me
      </Typography>
      <Box
        component="form"
        ref={refForm.current}
        onSubmit={sendEmail}
        sx={{
          '& .MuiTextField-root': { m: 1 },
          display: "flex",
          justifyContent: "center"
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          columnSpacing={1}
          justifyContent="flex-end"
          alignItems="center"
          id="Contact-Form-Grid"
          sx={{ maxWidth: 800 }}
        >
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              type="text"
              id="form-name"
              name="name"
              label="Name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              type="email"
              name="email"
              id="form-email"
              label="Email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="text"
              name="subject"
              id="form-subject"
              label="Subject"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="text"
              name="message"
              id="form-message"
              label="Message"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item sx={{ justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit">
              Send
            </Button>
          </Grid>
        </Grid>
      </Box>
    </ContactContainer>
  )
}

export default Contact
