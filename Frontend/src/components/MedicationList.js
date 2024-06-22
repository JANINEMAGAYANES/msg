import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';


export function PrescriptionList(medications) {
  medications = [
    'Diuretica',
    'Renin Inhibitoren',
    'Calciumkanalblocker',
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (time) => {
    setCheckedItems({
      ...checkedItems,
      [time]: !checkedItems[time]
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Medikamente Überblick
      </Typography>
      {medications.map((time, index) => (
        <Paper
          key={index}
          sx={{
            p: 2,
            my: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', // Align items and place icon at the end
          }}
          elevation={1}
        >
          <IconButton aria-label="info" color="primary">
            <InfoIcon />
          </IconButton>
        </Paper>
      ))}
    </Box>
  );
};

export default PrescriptionList;
