import React, { useState } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { HomeOutlined, Medication, List, Message  } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigationBar = () => {
    const [value, setValue] = useState(0); // State to track the selected navigation item
    const location = useLocation();

    // Handle navigation item change
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <BottomNavigation value={value} onChange={handleChange} showLabels    sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1000, // Adjust as needed
                backgroundColor: '#fff', // Optional: Customize background color
            }}>
            <BottomNavigationAction 
                component={Link} 
                to="/" 
                label="Home" 
                icon={<HomeOutlined />} 
            />
            <BottomNavigationAction 
                component={Link} 
                to="/medication" 
                label="Medication" 
                icon={<Medication />} 
            />
            <BottomNavigationAction 
                component={Link} 
                to="/prescription" 
                label="Prescription" 
                icon={<List />} 
            />
            <BottomNavigationAction 
                component={Link} 
                to="/contact" 
                label="Contact" 
                icon={<Message/>} 
            />
        </BottomNavigation>

    );
};

export default BottomNavigationBar;
