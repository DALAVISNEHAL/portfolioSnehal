import React from 'react';
import { Box } from '@mui/material';
import './Services.css';

function Services() {
  return (
    <Box
      id="services"
      sx={{
        scrollMarginTop: '80px',
        minHeight: '100vh',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('./img/banner-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: { xs: 2, md: 4 },
        paddingRight: { xs: 2, md: 4 },
        paddingTop: 8,
        paddingBottom: 8,
        color: 'white',
    }}
    >
      <section className="services-page">
        <h2>MY SERVICES</h2>
        <p>-- WHAT I PROVIDE --</p>
        <div className="services-container">
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Proficient in crafting elegant UIs using HTML, CSS, JavaScript, React, Angular, and Bootstrap — focused on performance, accessibility, and design consistency.
            </p>
          </div>
          <div className="service-card">
            <h3>Full-Stack Development</h3>
            <p>
              Comfortable working across the stack with technologies like Node.js, Java (Spring Boot), and databases such as MongoDB and MySQL. I enjoy architecting scalable APIs and integrating front-end with back-end systems seamlessly.
            </p>
          </div>
          <div className="service-card">
            <h3>Writing Testcases & Deployments</h3>
            <p>
              I follow a test-driven approach using tools like Playwright, Jest, and JUnit to ensure code quality, reduce bugs, and maintain long-term stability. Experienced in deploying applications on AWS and platforms like Netlify and Vercel with CI/CD pipelines.
            </p>
          </div>
        </div>
      </section>
    </Box>
  );
}

export default Services;
