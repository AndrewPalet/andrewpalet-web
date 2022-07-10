import React from 'react'
import styled from '@emotion/styled'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Container } from '@mui/system'

const ContactContainer = styled(Container)`
  text-align: center;
  margin: 100px 0 100px 0;
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
      <Typography variant="h1">Contact Me</Typography>
      <Box
        component="form"
        ref={refForm.current}
        onSubmit={sendEmail}
        sx={{
          '& .MuiTextField-root': { m: 1 },
          paddingLeft: 20,
          paddingRight: 20,
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: 'flex' }}>
          <TextField
            required
            type="text"
            id="form-name"
            name="name"
            label="Name"
            style={{ flex: 1 }}
          />
          <TextField
            required
            type="email"
            name="email"
            id="form-email"
            label="Email"
            style={{ flex: 1 }}
          />
        </Box>
        <div>
          <TextField
            required
            fullWidth
            type="text"
            name="subject"
            id="form-subject"
            label="Subject"
          />
        </div>
        <div>
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
        </div>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </ContactContainer>
  )
}

export default Contact
