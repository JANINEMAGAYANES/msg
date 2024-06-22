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

const initialRezept = [
  { rezept: '1543', medicine: 'Ibuprofen' },
  { rezept: '1434', medicine: 'Insulin' },
];

const Doctor = () => {
  const [rezeptSlots, setRezeptSlots] = useState(initialRezept);
  const [newRezeptSlot, setNewRezeptSlot] = useState('');
  const [newMedicine, setNewMedicine] = useState('');
  const [open, setOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [prescriptions, setPrescriptions] = useState([]);

  
  const handleRezeptChange = (index, newValue) => {
    const updatedRezepts = [...rezeptSlots];
    updatedRezepts[index].rezept = newValue;
    setRezeptSlots(updatedRezepts);
    localStorage.setItem('rezeptSlots', JSON.stringify(updatedRezepts));
  };

  const handleMedicineChange = (index, newValue) => {
    const updatedRezepts = [...rezeptSlots];
    updatedRezepts[index].medicine = newValue;
    setRezeptSlots(updatedRezepts);
    localStorage.setItem('rezeptSlots', JSON.stringify(updatedRezepts));
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

  const handleAddRezeptSlot = () => {
    if (newRezeptSlot && newMedicine) {
      const updatedRezepts = [
        ...rezeptSlots,
        { rezept: newRezeptSlot, medicine: newMedicine },
      ];
      setRezeptSlots(updatedRezepts);
      localStorage.setItem('rezeptSlots', JSON.stringify(updatedRezepts));
      setNewRezeptSlot('');
      setNewMedicine('');
      handleClose();
    }
  };


  return (
    <Box sx={{ p: 3 }}>
           <Typography variant='h5' gutterBottom>
       Patient
      </Typography>
      <Typography variant='h4' gutterBottom>
        John Mauer
      </Typography>
      {rezeptSlots.map((slot, index) => (
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
            value={slot.rezept}
            onChange={(e) => handleRezeptChange(index, e.target.value)}
            InputProps={{
              style: { fontSize: '1rem' },
              disableUnderline: true, // Remove bottom border line
            }}
          />
          <TextField
            variant='standard'
            fullWidth
            value={slot.medicine}
            onChange={(e) => handleRezeptChange(index, e.target.value)}
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
          onClick={handleClickOpen}
        >
          Rezept Hinzufügen
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Neuen Rezept hinzufügen</DialogTitle>
        <DialogContent>
          <TextField
            label='Neuer Rezept'
            variant='outlined'
            fullWidth
            value={newRezeptSlot}
            onChange={(e) => setNewRezeptSlot(e.target.value)}
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
          <Button onClick={handleAddRezeptSlot} color='primary'>
            Hinzufügen
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Doctor;
