import React from 'react';
import Qr from '../components/Qr';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Share = () => {
    return (
     
        <Card sx={{ maxWidth: 500, height: 500 ,margin: 'auto', mt: 10 }}>
        <CardContent>
            <Typography  sx={{fontSize: '2.2rem'}}variant="h5" component="div" gutterBottom>
                Scan Me
            </Typography>
            <Qr value="https://www.example.com" />
        </CardContent>
    </Card>
    );
};

export default Share;