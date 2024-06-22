import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const timeSlots = [
  'Diuretica',
  'Renin Inhibitoren',
  'Calciumkanalblocker',
];

const MedicationList= () => {
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
          }}
          elevation={1}
        >
          <Typography variant='body1' sx={{  fontSize: '1.5rem' }}>{time}</Typography>
          {(time === '9:00 AM' || time === '12:00 PM') && (
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ pl: '100px', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              Namen:
            </Typography>
          )}

          {(time === '10:00 AM' || time === '13:00 PM') && (
            <Typography
              variant='body1'
              color='text.secondary'
              sx={{ pl: '100px', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              Rezept
            </Typography>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default MedicationList;
