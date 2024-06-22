import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InfoIcon from '@mui/icons-material/Info';

const timeSlots = [
  'Diuretica',
  'Renin Inhibitoren',
  'Calciumkanalblocker',
];

const MedicationList = () => {
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
      {timeSlots.map((time, index) => (
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
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedItems[time] || false}
                onChange={() => handleCheckboxChange(time)}
                color="primary"
              />
            }
            label={<Typography variant='body1' sx={{ fontSize: '1.5rem' }}>{time}</Typography>}
          />
          <InfoIcon color="primary" />
        </Paper>
      ))}
    </Box>
  );
};

export default MedicationList;
