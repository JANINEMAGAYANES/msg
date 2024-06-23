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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import fetchPrescriptions from '../helpers/fetchPrescription';

const initialTimeSlots = [
  { time: '9:00', medicine: 'Ibuprofen' },
  { time: '9:00', medicine: 'Nystatin' },
  { time: '18:00', medicine: 'Dexpanthenol' }
];

const TimeSlots = () => {
  const [timeSlots, setTimeSlots] = useState([]);
  const [newTimeSlot, setNewTimeSlot] = useState('');
  const [newMedicine, setNewMedicine] = useState('');
  const [open, setOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptionsData = async () => {
      try {
        const data = await fetchPrescriptions();
        setPrescriptions(data); // Update state with fetched prescriptions

        // After fetching prescriptions, update the time slots
        const storedTimeSlots = JSON.parse(localStorage.getItem('timeSlots'));
        if (storedTimeSlots) {
          setTimeSlots(storedTimeSlots);
        } else {
          setTimeSlots(initialTimeSlots);
        }
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      }
    };

    fetchPrescriptionsData();
  }, []);

  const handleTimeChange = (index, newValue) => {
    const updatedTimes = [...timeSlots];
    updatedTimes[index].time = newValue;
    setTimeSlots(updatedTimes);
    localStorage.setItem('timeSlots', JSON.stringify(updatedTimes));
  };

  console.log(prescriptions)
  const handleMedicineChange = (index, newValue) => {
    const updatedTimes = [...timeSlots];
    updatedTimes[index].medicine = newValue;
    setTimeSlots(updatedTimes);
    localStorage.setItem('timeSlots', JSON.stringify(updatedTimes));
  };

  const handleCheckboxChange = (index) => {
    const updatedCheckedItems = {
      ...checkedItems,
      [index]: !checkedItems[index],
    };
    setCheckedItems(updatedCheckedItems);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTimeSlot = () => {
    if (newTimeSlot && newMedicine) {
      const updatedTimes = [
        ...timeSlots,
        { time: newTimeSlot, medicine: newMedicine },
      ];
      setTimeSlots(updatedTimes);
      localStorage.setItem('timeSlots', JSON.stringify(updatedTimes));
      setNewTimeSlot('');
      setNewMedicine('');
      handleClose();
    }
  };

  const getPrescriptionName = (drugId) => {
    const prescription = prescriptions.find((pres) => pres.drug_id === drugId);
    return prescription ? prescription.name : '';
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Einahmeplan
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
          <FormControlLabel
            control={
              <Checkbox
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
                color='primary'
              />
            }
            label=''
          />
          <TextField
            variant='standard'
            fullWidth
            value={slot.time}
            onChange={(e) => handleTimeChange(index, e.target.value)}
            InputProps={{
              style: { fontSize: '1rem' },
              disableUnderline: true, // Remove bottom border line
            }}
          />
          <TextField
            variant='standard'
            fullWidth
            value={slot.medicine}
            onChange={(e) => handleMedicineChange(index, e.target.value)}
            InputProps={{
              style: { fontSize: '1rem' },
              disableUnderline: true, // Remove bottom border line
              sx: {
                width: 'calc(100% + 20px)',
                minWidth: '150px',
                marginLeft: '-10px',
              },
            }}
          />
        </Paper>
      ))}
      <Box sx={{ mt: 3, textAlign: 'center', mb: 3 }}>
        <Button
          sx={{ fontSize: '1rem', mb: 1 }}
          variant='contained'
          color='primary'
          style={{ backgroundColor: '#00000' }}
          onClick={handleClickOpen}
        >
          Medikament Hinzufügen
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Neuen Zeitplatz hinzufügen</DialogTitle>
        <DialogContent>
          <TextField
            label='Neuer Zeitplatz'
            variant='outlined'
            fullWidth
            value={newTimeSlot}
            onChange={(e) => setNewTimeSlot(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label='Neues Medikament'
            variant='outlined'
            fullWidth
            value={newMedicine}
            onChange={(e) => setNewMedicine(e.target.value)}
            sx={{ mb: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Abbrechen
          </Button>
          <Button onClick={handleAddTimeSlot} color='primary'>
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TimeSlots;
