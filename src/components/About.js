import { Box, Grid, Typography, Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import profileImage from '../img/about.jpg'; // adjust this path if needed

function About() {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: 3, md: 10 },
        py: 10,
        backgroundColor: '#fff',
        maxWidth: '1200px',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: 'bold', textAlign: 'center', mb: 1 }}
      >
        ABOUT ME
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: '#d32f2f',
          textAlign: 'center',
          mb: 6,
          textTransform: 'uppercase',
        }}
      >
        -- WHO I AM --
      </Typography>

      {/* IMAGE + TEXT ROW */}
      <Grid container spacing={4} alignItems="center">
        {/* IMAGE */}
        <Grid item xs={12} md={5}>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src={profileImage}
              alt="Snehal"
              style={{
                width: '100%',
                maxWidth: '320px',
                borderRadius: '15px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              }}
            />
          </Box>
        </Grid>

        {/* TEXT */}
        <Grid item xs={12} md={7} >
          <div style={{marginLeft: '400px', marginTop: '-500px'}}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              I'm Snehal and I'm a{' '}
              <span style={{ color: '#d32f2f' }}>
                <Typewriter
                  words={['Fullstack Developer', 'React Engineer', 'UI Developer']}
                  loop
                  cursor
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </Typography>

            <Typography variant="body1" sx={{ mb: 4 }}>
              I’m a Front-End Developer with 4+ years of experience in designing, developing,
              and deploying modern responsive applications. My skillset includes React, Angular,
              HTML, CSS, JavaScript, Typescript, AWS, Java full-stack, playwright and Bootstrap.
              I specialize in building fast, accessible UIs and delivering great user experiences.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#d32f2f',
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#b71c1c' },
              }}
              href="/Snehal_Bhanje_CV.pdf"
              download
            >
              Download CV
            </Button>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
