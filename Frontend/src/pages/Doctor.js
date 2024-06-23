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
import { Link } from 'react-router-dom';
import fetchPrescriptions from '../helpers/fetchPrescription';

const initialRezept = [
  {
    rezept: 'Rezept 123',
    patientId: 1,
    drugId: 2,
    annotation: 'Kopfschmerzen',
    validUntil: '14/02/2025',
    createdAt: '23/06/2024',
    amount: '5mg',
    frequency: '1 pro tag',
  },
  {
    rezept: 'Rezept 134',
    medicine: 'Pennicillin',
    patientId: 2,
    drugId: 3,
    annotation: 'Bauchshmerzen',
    validUntil: '14/02/2025',
    createdAt: '14/05/2024',
    amount: '5mg',
    frequency: '2 pro tag',
  },
  {
    rezept: ' Rezept 154',
    medicine: 'Pennicillin',
    patientId: 2,
    drugId: 3,
    annotation: 'Bauchschmerzen',
    validUntil: '14/02/2025',
    createdAt: '14/02/2024',
    amount: '5mg',
    frequency: '2 pro tag',
  },
];

const Doctor = () => {
  const [rezeptSlots, setRezeptSlots] = useState(initialRezept);
  const [newRezeptSlot, setNewRezeptSlot] = useState('');
  const [newMedicine, setNewMedicine] = useState('');
  const [newAnnotation, setNewAnnotation] = useState('');
  const [newValidUntil, setNewValidUntil] = useState('');
  const [newAmount, setNewAmount] = useState('');
  const [newFrequency, setNewFrequency] = useState('');
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
        <Link
          to="/ubernehmen"
          key={index}
          style={{ textDecoration: 'none' }}
        >
          <Paper
            sx={{
              p: 2,
              my: 1,
              display: 'flex',
              alignItems: 'center',
            }}
            elevation={1}
          >
            <TextField
              variant="standard"
              fullWidth
              value={slot.rezept}
              onChange={(e) => {
                e.stopPropagation(); // Prevents the link from being clicked when text field is edited
                handleRezeptChange(index, e.target.value);
              }}
              InputProps={{
                style: { fontSize: '1rem' },
                disableUnderline: true, // Remove bottom border line
              }}
            />
            <TextField
              variant="standard"
              fullWidth
              value={slot.createdAt}
              onChange={(e) => {
                e.stopPropagation(); // Prevents the link from being clicked when text field is edited
                handleRezeptChange(index, e.target.value);
              }}
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
        </Link>
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
        <DialogTitle>Neues Rezept hinzufügen</DialogTitle>
        <DialogContent>
          <TextField
            label='Rezept-Nr.'
            variant='outlined'
            fullWidth
            value={newRezeptSlot}
            onChange={(e) => setNewRezeptSlot(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label='Medikamente'
            variant='outlined'
            fullWidth
            value={newMedicine}
            onChange={(e) => setNewMedicine(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label='Diagnose'
            variant='outlined'
            fullWidth
            value={newAnnotation}
            onChange={(e) => setNewAnnotation(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label='Gültig bis'
            variant='outlined'
            fullWidth
            value={newValidUntil}
            onChange={(e) => setNewValidUntil(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label='Menge'
            variant='outlined'
            fullWidth
            value={newAmount}
            onChange={(e) => setNewAmount(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label='Einnahme'
            variant='outlined'
            fullWidth
            value={newFrequency}
            onChange={(e) => setNewFrequency(e.target.value)}
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
