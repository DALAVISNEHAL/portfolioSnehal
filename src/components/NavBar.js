import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link as ScrollLink } from 'react-scroll';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const pages = ['HOME', 'ABOUT', 'SERVICES', 'SKILLS'];

function ResponsiveAppBar() {
  const [scrolledSection, setScrolledSection] = React.useState('home');

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'skills', 'resume'];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setScrolledSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLightSection = ['services', 'resume'].includes(scrolledSection);
  const textColor = isLightSection ? '#000' : '#fff';
  const bgColor = isLightSection
    ? 'rgba(255, 255, 255, 0.9)'
    : 'linear-gradient(to bottom, rgba(0,0,0,0.7), transparent)';

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: bgColor,
        backdropFilter: 'blur(8px)',
        boxShadow: 'none',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          {/* LinkedIn Icon (Right-Aligned) */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/dalavisnehal/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: textColor }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: textColor,
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          {/* Mobile logo (still shown if desired) */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: textColor,
              textDecoration: 'none',
            }}
          >
            PORTFOLIO
          </Typography>

          {/* Desktop Menu Options only */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <ScrollLink
                key={page}
                to={page.toLowerCase()}
                smooth={true}
                duration={500}
                offset={-70}
              >
                <Button
                  sx={{ my: 2, color: textColor, display: 'block' }}
                >
                  {page}
                </Button>
              </ScrollLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
