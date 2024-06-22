import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import fetchRealPrescriptions from '../helpers/fetchRealPrescriptions';

const slots = [
  'Rezept 123',
  'Rezept 134',
  'Rezept 154',
];

const PrescriptionList = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Ihre Rezepte
      </Typography>
      {slots.map((slot, index) => (
        <Link key={index} to="/ubernehmen" style={{ textDecoration: 'none' }}>
          <Paper
            sx={{
              p: 2,
              my: 1,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer', // Optional: Add cursor style for better UX
            }}
            elevation={1}
          >
            <Typography variant='body1' sx={{ fontSize: '1.5rem' }}>{slot}</Typography>
          </Paper>
        </Link>
      ))}
    </Box>
  );
};

export default PrescriptionList;
