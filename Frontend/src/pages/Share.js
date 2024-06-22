import React from 'react';
import Qr from '../components/Qr';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Share = () => {
    return (
     
        <Card sx={{ maxWidth: 500, height: 500 ,margin: 'auto', mt: 7 }}>
        <CardContent>
            <Typography  sx={{fontSize: '1.5rem'}}variant="h5" component="div" gutterBottom align="center" p={2}>
                Zeigen Sie diesen QR Code in Ihrer Apotheke vor.
            </Typography>
            <Qr value="https://www.example.com" />
        </CardContent>
    </Card>
    );
};

export default Share;