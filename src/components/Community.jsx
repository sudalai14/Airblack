import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import backgroundImage from '../assets/background-image.png'; 

const Community = () => {
  return (
    <Box
      py={3}
      textAlign="center"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        width: '100%', // Ensure the background image covers the full width
        color: '#fff',
        padding: '20px', // Add some padding to avoid text touching the edges
      }}
    >
      <Typography variant="h4" mb={2}>
        Join Our Growing Community of 35000+ Alumni
      </Typography>
      <Button
        variant="contained"
        sx={{ 
          bgcolor: '#E84D84', 
          color: '#fff',
          '&:hover': { bgcolor: '#d43b6e' },
          mb: 2 
        }}
      >
        Apply Now
      </Button>
      <Box display="flex" gap={2}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            bgcolor: '#E1306C', // Instagram's color
          }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            bgcolor: '#1877F2', // Facebook's color
          }}
        >
          <FontAwesomeIcon icon={faFacebookF} size="2x" color="#fff" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            bgcolor: '#0A66C2', // LinkedIn's color
          }}
        >
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            bgcolor: '#1DA1F2', // Twitter's color
          }}
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" color="#fff" />
        </Box>
      </Box>
    </Box>
  );
};

export default Community;
