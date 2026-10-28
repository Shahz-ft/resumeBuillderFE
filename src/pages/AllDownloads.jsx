import React, { useEffect, useState } from 'react'
import { getResume } from '../services/AllAPIs'
import { Box, Button, Grid, Typography } from '@mui/material'
import Preview from '../components/Preview'
import { Link } from 'react-router-dom'



const AllDownloads = () => {

const [resumeDatas,setResumeDatas] = useState([])


useEffect(()=>{
  getData()
},[])

  const getData = async()=>{
    try {
      let apiResponse = await getResume()

      if(apiResponse.status == 200)
        setResumeDatas(apiResponse.data)
      else{
        toast.error('Api call Failed')
      }

    } catch (error) {
      console.log(error)
      toast.error('Api call Failed')
    }
  }

  return (
    <Box>
      {
        resumeDatas?.length > 0 ? <Box>
          
          <Typography variant='h3' sx={{textAlign:'center',p:4}}>
            All Downloads 
          </Typography>
          <Grid sx={{p:5}} spacing={5} container>
            {
            resumeDatas.map((eachResume, index)=>(
             <Grid size={6}> <Button as={Link} to={`/resumes/${eachResume.id}`}> View Details</Button> <Preview key = {index} resumeData={eachResume}/></Grid>
            ))
          }

          </Grid>
          
          
           </Box> : <Typography> No Resumes Available</Typography>

        
      }
    </Box>
  )
}

export default AllDownloads
