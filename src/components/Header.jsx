import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logoImg from '../assets/img3.png'
import { Link } from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { Stack } from '@mui/material';


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor:'black'}} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
         <img style={{width:'40px'}} src={logoImg} alt="logo img" />
          </IconButton>
          <Typography variant="h6" component={Link} to={'/'} sx={{ flexGrow: 1,textDecoration:'none',color:'white' }}>
            Resume Builder
          </Typography>
          <Stack direction={'row'} sx={{gap:6}}>
            <Typography sx={{textDecoration:'none',color:'white'}} variant='h6' component={Link} to={'/all-resumes'}> All Resumes</Typography>
            <Typography sx={{textDecoration:'none',color:'white'}} variant='h6' component={Link} to={'/all-downloads'}> All Downloads</Typography>
            <Tooltip sx={{textDecoration:'none',color:'white'}} title="An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes. Users can select templates, edit content, preview their resume, and download it in formats such as PDF." placement="bottom-start">
              <Button>About Us</Button>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
