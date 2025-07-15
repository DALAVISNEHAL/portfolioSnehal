import { Box, Typography, Button } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';


function Home() {
  return (
    <>
        <Box
            id="home"
            sx={{
                scrollMarginTop: '80px',
                height: '100vh',
                backgroundImage: `url('./img/banner-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: { xs: 4, md: 12 },
                color: 'white',
            }}
        >
            <Typography variant="h5" sx={{ mb: 1 }}>
                Hello, my name is
            </Typography>

            <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
                Snehal Bhanje
            </Typography>

            <Typography variant="h5" sx={{ mb: 3 }}>
                And I'm a{' '}
                <span style={{ color: '#f50057', fontWeight: 'bold' }}>
                <Typewriter
                    words={['UI Developer', 'Fullstack Developer', 'Senior Software Engineer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={60}
                    delaySpeed={1500}
                />
                </span>
            </Typography>

            <a
                href={`${process.env.PUBLIC_URL}/Snehal_Bhanje_CV.pdf`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Button
                    variant="contained"
                    sx={{
                    width: '150px',
                    backgroundColor: '#f50057',
                    color: '#fff',
                    fontWeight: 'bold',
                    '&:hover': {
                        backgroundColor: '#c51162',
                    },
                    }}
                >
                    Hire Me
                </Button>
            </a>
        </Box>
    </>
  );
}

export default Home;
