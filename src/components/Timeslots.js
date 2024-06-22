import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const timeSlots = [
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '13:00 PM', '14:00 PM', '15:00 PM', '16:00 PM' , 
    '17:00 PM',  '18:00 PM',  '19:00 PM',  '20:00 PM',  '21:00 PM'
];

const TimeSlots = () => {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Time Slots
            </Typography>
            {timeSlots.map((time, index) => (
                <Paper 
                    key={index} 
                    sx={{ 
                        p: 2, 
                        my: 1, 
                        display: 'flex', 
                        alignItems: 'center' 
                    }}
                    elevation={1}
                >
                    <Typography variant="body1">
                        {time}
                    </Typography>
                </Paper>
            ))}
        </Box>
    );
};

export default TimeSlots;
