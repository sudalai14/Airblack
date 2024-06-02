import React from 'react';
import { Box, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';

const professions = [
  { value: 'softwareDeveloper', label: 'Software Developer' },
  { value: 'dataAnalyst', label: 'Data Analyst' },
  { value: 'projectManager', label: 'Project Manager' },
  
];

const goals = [
  { value: 'webDevelopment', label: 'To learn web development' },
  { value: 'dataScience', label: 'To learn data science' },
  { value: 'projectManagement', label: 'To improve project management skills' },
  
];

const cities = [
  { value: 'mumbai', label: 'Mumbai' },
  { value: 'delhi', label: 'Delhi' },
  { value: 'bangalore', label: 'Bangalore' },
  // Add more options as needed
];

const Form = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 3, borderRadius: 2, mt: 3 }}>
      <Box
        sx={{
          bgcolor: '#E84D84', // Consistent color for "GET STARTED TODAY" button
          p: 1,
          borderRadius: 1,
          mb: 2,
          mx: -3, // Extend to the edges of the form container
          mt: -3, // Remove the top margin to make it touch the top of the container
        }}
      >
        <Typography variant="h6" align="center" style={{ color: '#fff' }}>
          FILL THE FORM BELOW TO ENQUIRE
        </Typography>
      </Box>
      <Typography variant="subtitle2" style={{ color: '#000' }}>
        * Enter your name
      </Typography>
      <TextField
        fullWidth
        label="e.g., Aneesha Mehra"
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: '#000' } }}
        inputProps={{ style: { color: '#000' } }}
      />
      <Typography variant="subtitle2" style={{ color: '#000' }}>
        * Enter your WhatsApp Number
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Country Code"
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: '#000' } }}
            inputProps={{ style: { color: '#000' } }}
            defaultValue="+00" // Default country code example
          />
        </Grid>
        <Grid item xs={9}>
          <TextField
            fullWidth
            label="0000000000" // Phone number example
            variant="outlined"
            margin="normal"
            InputLabelProps={{ style: { color: '#000' } }}
            inputProps={{ style: { color: '#000' } }}
          />
        </Grid>
      </Grid>
      <Typography variant="subtitle2" style={{ color: '#000' }}>
        * Select your profession
      </Typography>
      <TextField
        select
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: '#000' } }}
        inputProps={{ style: { color: '#000' } }}
      >
        {professions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="subtitle2" style={{ color: '#000' }}>
        * Select your goal
      </Typography>
      <TextField
        select
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: '#000' } }}
        inputProps={{ style: { color: '#000' } }}
      >
        {goals.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Typography variant="subtitle2" style={{ color: '#000' }}>
        * Select your city
      </Typography>
      <TextField
        select
        fullWidth
        variant="outlined"
        margin="normal"
        InputLabelProps={{ style: { color: '#000' } }}
        inputProps={{ style: { color: '#000' } }}
      >
        {cities.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2, backgroundColor: '#E84D84' }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
