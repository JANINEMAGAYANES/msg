import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';
import fetchPrescriptions from "../helpers/fetchPrescription";
import fetchDrugInfo from "../helpers/fetchDrugInfo";
import Medication from "../pages/Medication";
import MedicineInfo from "./MedicineInfo";
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';



export function MedicationList({medications, drugIDs}) {
  // medications = [
  //   'Diuretica',
  //   'Renin Inhibitoren',
  //   'Calciumkanalblocker',
  // ];
    const combinedArray = medications.map((name, index) => ({
        name: name,
        drug_id: drugIDs[index]
    }))

    const [drugSideEffects, setDrugSideEffects] = useState([])
    const [price, setPrice] = useState(0);
    const [drugAlternatives, setDrugAlternatives] = useState([])
    const [openStates, setOpenStates] = useState({});

    const handleToggle = (key) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };
    const fetchDrugData = async (drugID) => {
        try {
            const data = await fetchDrugInfo(drugID);
            // setPrice(data.price);
            setPrice(94);
            setDrugAlternatives(data.alternatives);
            setDrugSideEffects(data.side_effects);
        } catch (error) {
            // Handle error
            console.error('Error handling drugs:', error);
        }
    };



  return (
    <Box sx={{ p: 3 }}>
      <Typography variant='h4' gutterBottom>
        Medikamente Überblick
      </Typography>
      {combinedArray.map((med, index) => (
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
            <Typography variant={'body1'}>{med.name}</Typography>
            <IconButton
                aria-label="info" color="primary"
                onClick={async () => {
                    await fetchDrugData(med.drug_id, med.name);
                    handleToggle(index);
                }}
            >
                <InfoIcon />
                {openStates[index] ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
            <Collapse in={openStates[index]} timeout="auto" unmountOnExit>
                {console.log(typeof(drugSideEffects))};
                <MedicineInfo
                    name={med.name}
                    price={94}
                    sideEffects={med.side_effects}
                    alternativeDrugs={Paracetamol}
                />
            </Collapse>

        </Paper>
      ))}
    </Box>
  );
};

export default MedicationList;