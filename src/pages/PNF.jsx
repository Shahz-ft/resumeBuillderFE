import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import gif from '../assets/Error 404.svg'

const PNF = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        minHeight: '80vh',
        boxSizing: 'border-box',
        px: 2, mb:6
      }}
    >
      <Box
        component="img"
        src={gif}
        alt="404 Page Not Found"
        sx={{
          width: '100%',
          maxWidth: 600,
          height: 'auto',
        }}
      />

      <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
        Oops! Page Not Found
      </Typography>

      <Typography sx={{ mt: 1, color: '#81796F' }}>
        The page you're looking for doesn't exist.
      </Typography>

      <Button
        variant="contained"
        onClick={() => navigate('/')}
        sx={{ mt: 3, backgroundColor: '#E8A00A' }}
      >
        Back to Home
      </Button>
    </Box>
  )
}

export default PNF