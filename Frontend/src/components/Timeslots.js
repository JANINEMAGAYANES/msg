import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const initialTimeSlots = [
  { time: '9:00 AM', medicine: 'Ibuprofen' },
  { time: '10:00 AM', medicine: 'Insulin' },
  { time: '11:00 AM', medicine: '' },
  { time: '12:00 PM', medicine: 'Ibuprofen' },
  { time: '1:00 PM', medicine: 'Insulin' },
  { time: '2:00 PM', medicine: '' },
];

const TimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState('');
  const [newMedicine, setNewMedicine] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const storedTimeSlots = JSON.parse(localStorage.getItem('timeSlots'));
    if (storedTimeSlots) {
      setTimeSlots(storedTimeSlots);
    } else {
      setTimeSlots(initialTimeSlots);
    }
  }, []);

  const handleTimeChange = (index, newValue) => {
    const updatedTimes = [...timeSlots];
    updatedTimes[index].time = newValue;
    setTimeSlots(updatedTimes);
    localStorage.setItem('timeSlots', JSON.stringify(updatedTimes));
  };

  const handleMedicineChange = (index, newValue) => {
    const updatedTimes = [...timeSlots];
    updatedTimes[index].medicine = newValue;
    setTimeSlots(updatedTimes);
    localStorage.setItem('timeSlots', JSON.stringify(updatedTimes));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTimeSlot = () => {
    if (newTimeSlot && newMedicine) {
      const updatedTimes = [...timeSlots, { time: newTimeSlot, medicine: newMedicine }];
      setTimeSlots(updatedTimes);
      localStorage.setItem('timeSlots', JSON.stringify(updatedTimes));
      setNewTimeSlot('');
      setNewMedicine('');
      handleClose();
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Time Slots
      </Typography>
      {timeSlots.map((slot, index) => (
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
          <TextField
            variant='standard'
            fullWidth
            value={slot.time}
            onChange={(e) => handleTimeChange(index, e.target.value)}
            InputProps={{
              style: { fontSize: '1.5rem' },
              disableUnderline: true, // Remove bottom border line
            }}
          />
          <TextField
            variant='standard'
            fullWidth
            value={slot.medicine}
            onChange={(e) => handleMedicineChange(index, e.target.value)}
            InputProps={{
              style: { fontSize: '1.2rem' },
              disableUnderline: true, // Remove bottom border line
              sx: { ml: '20px' },
            }}
          />
        </Paper>
      ))}
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Button
          sx={{ fontSize: '1.5rem', mb: 1 }}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
        >
          Medikamente Hinzufügen
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Neuen Zeitplatz hinzufügen</DialogTitle>
        <DialogContent>
          <TextField
            label="Neuer Zeitplatz"
            variant="outlined"
            fullWidth
            value={newTimeSlot}
            onChange={(e) => setNewTimeSlot(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Neues Medikament"
            variant="outlined"
            fullWidth
            value={newMedicine}
            onChange={(e) => setNewMedicine(e.target.value)}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Abbrechen
          </Button>
          <Button onClick={handleAddTimeSlot} color="primary">
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TimeSlots;
