import React from 'react';
import { Box } from '@mui/material';
import logo from '../assets/logo.png';  

const Header = () => {
  return (
    <Box textAlign="center" bgcolor="#000" color="#fff" sx={{ paddingTop: 0 }}>
      <img src={logo} alt="Logo" style={{ width: "100%", height: "auto", display: 'block' }} />
    </Box>
  );
};

export default Header;