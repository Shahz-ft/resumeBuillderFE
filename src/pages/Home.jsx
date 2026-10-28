import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import heroImg from "../assets/landing.png";
import aboutImg from "../assets/resume.png"
import teamImg from "../assets/team.png";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.avif";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.avif";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.png";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.avif";
import p12 from "../assets/p12.jpg";
const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            textAlign: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            alignItems: "center",
            padding: 5,
            width: "50%",
            borderRadius: 3,
            color: "white",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: 37, lineHeight: 1.2 }}
          >
            Designed To Get Hired. Your <br /> Skills, Your Story, Your Next Job{" "}
            <br /> - All In One.
          </Typography>
          <Button

            variant="contained"
            component={Link} to='/resume-gen'
            sx={{
              marginTop: 3,
              backgroundColor: "#8b5e47",
              fontWeight: "bold",
              fontSize: 12,
              padding: "10px 18px",
            }}
          >
            Make your resume with AI
          </Button>
        </Stack>
      </Box>

      {/* section2 */}
      <Box sx={{ paddingTop: 8,paddingRight:14,paddingLeft:28 ,marginBottom:3}}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 6,
          }}
        >
          What's AI rBuilder
        </Typography>
        <Stack
          direction="row"
          sx={{
            
            justifyContent: "space-between",
            alignItems: "center",
            gap: 14,
          }}
        >
          <Box sx={{width:'50%'}}>
              <Typography
        sx={{
          fontSize: 16,
          lineHeight: 1.5,
          textAlign: 'justify',
          marginBottom: 2
        }}
      >
        An AI rBuilder is a web application that helps users create
        professional resumes quickly and efficiently using artificial
        intelligence. Traditional resume creation can be time-consuming
        and difficult, especially for freshers who may not know the correct
        format or keywords required for modern recruitment systems.
      </Typography>


      <Typography
        sx={{
          fontSize: 16,
          fontWeight:400,
          lineHeight: 1.5,
          textAlign: 'justify',
          marginBottom: 2
        }}
      >
        The system can suggest job-specific keywords, professional
        summaries, and skill recommendations to make the resume more
        effective and ATS (Applicant Tracking System) friendly.
      </Typography>


      <Typography
        sx={{
          fontSize: 16,
          fontWeight:400,
          lineHeight: 1.5,
          textAlign: 'justify',
          marginBottom: 2
        }}
      >
        The main goal of the AI rBuilder is to simplify the resume creation
        process and help job seekers build professional, well-structured
        resumes in a few minutes. Users can edit content, preview their
        resume, and download it in formats such as PDF.
      </Typography>


      <Typography
        sx={{
          fontSize: 16,
          fontWeight:400,
          lineHeight: 1.6,
          textAlign: 'justify'
        }}
      >
        This type of system is especially useful for students & fresh
        graduates, who want to create high-quality resumes that increase
        their chances of getting shortlisted for job interviews.
      </Typography>

          </Box>
           <Box
          component="img"
          src={aboutImg}
          alt="AI Resume Builder"
          sx={{
            width: '45%',
            height: 630,
             
           
      }}
    />
        </Stack>
      </Box>
      
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `url(${teamImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
              backgroundAttachment: "fixed"
        }}
      />

      {/* testimony */}
      <Box
  sx={{
    backgroundColor: "white",
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 8,
    paddingLeft: 8
  }}
>
  <Typography
    variant="h3"
    sx={{
      textAlign: "center",
      fontWeight: "bold",
      marginBottom: 8,
      marginleft: 30
    }}
  >
    Testimony
  </Typography>

  <Stack
    direction="row"
    sx={{
      paddingRight: 8,
      paddingLeft: 20,
      justifyContent: "space-between",
      alignItems: "center",
      gap: 18
    }}
  >


    <Box sx={{ width: "50%" }}>

      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          marginBottom: 1
        }}
      >
        Trusted by professionals worldwide.
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          lineHeight: 1.5,
          textAlign: "justify",
          marginBottom: 2
        }}
      >
        At rBuilder, we don't just help you create résumés - we help you
        land the job. Whether you're a seasoned professional or just
        starting out, our tools are designed to get results.
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          lineHeight: 1.5,
          textAlign: "justify",
          marginBottom: 2
        }}
      >
        In fact, users who used rBuilder reported getting hired an average
        of 48 days faster.
      </Typography>

      <Typography
        sx={{
          fontSize: 16,
          lineHeight: 1.5,
          textAlign: "justify"
        }}
      >
        Join thousands of job-seekers who've fast-tracked their careers
        with a résumé that truly stands out.
      </Typography>

    </Box>


   
    <Box
      sx={{
        width: "45%",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        columnGap: 5,
        rowGap: 2
      }}
    >
 <Box
        component="img"
        src={p1}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p2}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p3}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p4}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p5}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p6}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p7}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p8}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p9}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p10}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p11}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />

      <Box
        component="img"
        src={p12}
        sx={{ width: "100%", height: 100, objectFit: "cover" }}
      />


    </Box>

  </Stack>
</Box>

    </>
  );
};

export default Home;
