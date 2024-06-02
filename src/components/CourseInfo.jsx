import React from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCheck } from '@fortawesome/free-solid-svg-icons';
import certificateIcon from '../assets/certificate-icon.png'; 

const CourseInfo = () => {
  return (
    <Box py={3} bgcolor="#000" color="#fff">
      <Box display="flex" alignItems="center" mb={2}>
        <Box 
          display="flex" 
          alignItems="center" 
          bgcolor="#333" 
          color="#fff" 
          px={2} 
          py={1} 
          borderRadius={1}
          mr={2}
        >
          <Box 
            display="flex" 
            alignItems="center" 
            justifyContent="center" 
            bgcolor="#333" 
            width="24px" 
            height="24px" 
            borderRadius="4px" 
            border="1px solid #fff" 
            mr={1}
          >
            <img src={certificateIcon} alt="Certificate" style={{ width: '16px', height: '16px' }} />
          </Box>
          <Typography variant="body2">Certification Program</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <FontAwesomeIcon icon={faStar} color="#FFD700" style={{ marginRight: '8px' }} />
          <Typography variant="body2" color="#fff">Rated 4.85/5</Typography>
        </Box>
      </Box>
      <Typography 
        variant="h4" 
        className="font-roca-one" // Apply the custom font class here
      >
        Professional Online Makeup Course
      </Typography>
      <Box display="flex" alignItems="center" my={1}>
        <FontAwesomeIcon icon={faCheck} color="#fff" style={{ marginRight: '8px' }} />
        <Typography variant="body1">India’s No.1 Online Makeup Course</Typography>
      </Box>
      <Box display="flex" alignItems="center" my={1}>
        <FontAwesomeIcon icon={faCheck} color="#fff" style={{ marginRight: '8px' }} />
        <Typography variant="body1">Learn by LIVE Do-It-Together Classes</Typography>
      </Box>
      <Box display="flex" alignItems="center" my={1}>
        <FontAwesomeIcon icon={faCheck} color="#fff" style={{ marginRight: '8px' }} />
        <Typography variant="body1">Unlimited Practice Session to master skills</Typography>
      </Box>
    </Box>
  );
};

export default CourseInfo;