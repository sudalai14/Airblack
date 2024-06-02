import React from 'react';
import { Box, Typography, CardMedia } from '@mui/material';
import certificate from '../assets/certificate.png'; 
import beforeImage from '../assets/before-image.png'; 
import afterImage from '../assets/after-image.png'; 

const Certification = () => {
  return (
    <Box
      py={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{
        width: '375px',
        height: '416px',
        padding: '30px 24px',
        gap: '14px',
      }}
    >
      <Box 
        display="flex" 
        alignItems="center" 
        sx={{
          opacity: 1,
          color: '#fff',
        }}
      >
        <img src={beforeImage} alt="Before" style={{ width: '20px', height: '20px', marginRight: '8px' }} />
        <Typography
          variant="h6"
          align="center"
        >
          Get Certified From India’s Biggest Beauty Platform
        </Typography>
        <img src={afterImage} alt="After" style={{ width: '20px', height: '20px', marginLeft: '8px' }} />
      </Box>
      <CardMedia
        component="img"
        image={certificate}
        alt="Certificate"
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default Certification;