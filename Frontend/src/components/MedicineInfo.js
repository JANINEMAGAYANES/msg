import React, { useState, useEffect } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import Box from '@mui/material/Box';
import ExpandMore from '@mui/icons-material/ExpandMore';



export default function MedicineInfo({name, sideEffects, alternativeDrugs, price}) {
    // dummy item
    name = 'Paracetamol';
    alternativeDrugs = ['Heroin', 'Kokain']
    sideEffects = ['Übelkeit', 'Kopfschmerzen'];
    price = 94;

    // data formatting
    price = price.toFixed(2)


    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const [openStates, setOpenStates] = useState({
        alternativeDrug: false,
        sideEffect: false
    });

    const handleToggle = (key) => {
        setOpenStates((prevState) => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const handleOpenDrug = (event, index) => {
        handleListItemClick(event, index);
        handleToggle('alternativeDrug');
    };

    const handleOpenEffect = (event, index) => {
        handleListItemClick(event, index);
        handleToggle('sideEffect');
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItemButton
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemText primary={`Name: ${name}`} />
                </ListItemButton>

                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleOpenEffect(event, 1)}
                >
                    <ListItemText primary={`Nebenwirkungen`} />
                    {openStates.sideEffect ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStates.sideEffect} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {sideEffects.map((effect, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={effect}/>
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
               <ListItemButton
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemText primary={`Preis: ${price} EUR`} />

               </ListItemButton>
                <ListItemButton
                    onClick={(event) => handleOpenDrug(event, 3)}
                    selected={selectedIndex === 3}
                >
                    <ListItemText primary={`Alternative Medikamente`} />
                    {openStates.alternativeDrug ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openStates.alternativeDrug} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {alternativeDrugs.map((drugName, index) => (
                            <ListItemButton key={index} sx={{ pl: 4 }}>
                                <ListItemText primary={drugName} />
                            </ListItemButton>
                        ))}
                    </List>
                </Collapse>
            </List>
        </Box>
    );
}