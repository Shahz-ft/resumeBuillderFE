import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
  return (
    
    <Box sx={{backgroundColor: 'black',color: 'white', paddingTop: 6, paddingBottom: 3, height:350 , paddingRight:30, paddingLeft:7.5}}>
    <Stack direction='row'  sx={{justifyContent:'space-between' , gap:10}}>
    <Box sx={{ width: '35%' }}>
     <Typography variant='h6' component={Link} to={'/'} sx={{ flexGrow: 1,textDecoration:'none',color:'white', fontWeight: 'bold' }}>
       Resume Builder</Typography>
       <Typography variant='p' component={'div'} sx={{ flexGrow: 1,textDecoration:'none',color:'white' ,textAlign: 'justify', marginTop:2,lineHeight: 1.6}}>
       An AI rBuilder suggest job-specific keywords, professional summaries, and skill recommendations to make the resume more effective and ATS (Applicant Tracking System) friendly. The main goal of the AI Powered Resume Builder is to simplify the resume creation process and help job seekers build professional, well-structured resumes in a few minutes.</Typography>

    </Box>
      <Box  sx={{ width: '25%' }}>
        <Typography variant='h5' sx={{fontWeight: 'bold',marginBottom: 2}}>
            Contact Us
          </Typography>
          <Stack direction="row"  sx={{ gap: 1,alignItems: 'center' }}>
            <Typography><MdAttachEmail />  resumebuilder@gmail.com</Typography>
          </Stack>
          <Stack direction="row"  sx={{ gap: 1, marginTop: 2 }}>
            <Typography><IoCallSharp /> 9087654321</Typography>
          </Stack>
          <Typography  variant="h6"sx={{ fontWeight: 'bold', marginTop: 1, marginBottom: 2}}> Connect With Us</Typography>
          <Stack direction="row"sx={{ gap: 1, fontSize: 20}}>
            <FaInstagram />
            <FaFacebookSquare />
            <FaWhatsapp />
          </Stack>
      </Box>
     
  
    </Stack>
    <Typography sx={{textAlign:'center',marginTop:3,marginLeft:25,fontWeight: 'bold'}}>  Designed & built with ❤️ using React </Typography>
      </Box>
  )
}

export default Footer
