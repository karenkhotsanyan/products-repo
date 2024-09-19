import { Container, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
   return (
      <Container maxWidth="100%" sx={{ backgroundColor: 'black', color: 'white',height: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <Typography>
            © 2024 Copyright:
         </Typography>
      </Container>
   )
}
