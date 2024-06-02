import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faStar, faUsers } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from '../assets/background-image.png'; 

const WhyJoin = () => {
  return (
    <Box
      py={3}
      color="#fff"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Typography variant="h5" textAlign="center" mb={4}>
        Why Should You Join Airblack?
      </Typography>
      <Box 
        display="flex" 
        justifyContent="space-between" 
        mx={4} // Adjust margin from the sides
      >
        <Box textAlign="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#E84D84"
            width="60px"
            height="60px"
            borderRadius="50%"
            mb={1} // Adjust margin-bottom for spacing
          >
            <FontAwesomeIcon icon={faVideo} size="2x" color="#fff" />
          </Box>
          <Typography variant="body2">Do-it-together, live on zoom</Typography>
        </Box>
        <Box textAlign="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#E84D84"
            width="60px"
            height="60px"
            borderRadius="50%"
            mb={1} // Adjust margin-bottom for spacing
          >
            <FontAwesomeIcon icon={faStar} size="2x" color="#fff" />
          </Box>
          <Typography variant="body2">4.8 / 5 Rated Classes</Typography>
        </Box>
        <Box textAlign="center">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            bgcolor="#E84D84"
            width="60px"
            height="60px"
            borderRadius="50%"
            mb={1} // Adjust margin-bottom for spacing
          >
            <FontAwesomeIcon icon={faUsers} size="2x" color="#fff" />
          </Box>
          <Typography variant="body2">35000+ Members</Typography>
        </Box>
      </Box>
      <Box mx={4} mt={3}>
        <Button
          fullWidth
          variant="contained"
          sx={{ bgcolor: '#E84D84', '&:hover': { bgcolor: '#d43b6e' } }}
        >
          Apply Now
        </Button>
      </Box>
    </Box>
  );
};

export default WhyJoin;