import {Stack, Box,Typography, Button } from '@mui/material'
import React from 'react'

import { FaFileAlt, FaFileDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ResumeGenerate = () => {
  return (
    <>

    <Box>
      <Typography variant='h4' sx={{textAlign:'center',marginTop:6,marginBottom:6,fontWeight:600,fontSize:'40px'}}>Create an ATS Friendly Resume in Minutes with AI</Typography>
    </Box>
    <Stack direction='row' sx={{justifyContent: "center",alignItems: "center",gap: 26,paddingtop:6,paddingBottom:4}}>
    <Box sx={{padding:'48px 58px',backgroundColor:'white',borderRadius:2,boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",textAlign:'center',alignItems:'center'}}>
      <FaFileAlt
        style={{
          fontSize: "40px",
          color: "blue",
          marginBottom: "20px",
        
        }}
      />
      <Typography variant='h5' sx={{ fontWeight: "bold",marginBottom: 1}}>Add Your Details</Typography>
      <Typography variant='p' sx={{fontSize: 18,marginBottom: 3,}}>Our AI will generate Skills & Summary</Typography>
      <Typography variant='h6' sx={{ fontWeight: "bold",marginTop: 1,}}>Step 1</Typography>
    </Box>
    <Box sx={{padding:'48px 58px',backgroundColor:'white',borderRadius:2,boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",textAlign:'center'}}>
      
      <FaFileDownload
        style={{
          fontSize: "40px",
          color: "red",
          marginBottom: "20px",
       
        }}
      /><Typography variant='h5' sx={{ fontWeight: "bold",marginBottom: 1}}>Download your Resume</Typography>
      <Typography variant='p' sx={{fontSize: 18,marginBottom: 3,}}>Download CV as PDF and start applying</Typography>
      <Typography variant='h6' sx={{ fontWeight: "bold",marginTop: 1,}}>Step 2</Typography>
    </Box>
    </Stack>
      <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      marginTop: 2,marginBottom:22
    }}
  >
    <Button
    component={Link}
    to='/resume-details'
      variant="contained"
      sx={{
        backgroundColor: "#5f341e",
        fontWeight: "bold",
        fontSize: 16,
        padding: "8px 18px",
      }}
    >
      LET'S START
    </Button>
  </Box>
    </>
  )
}

export default ResumeGenerate
