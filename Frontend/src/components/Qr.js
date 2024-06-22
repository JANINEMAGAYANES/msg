import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Qr = ({ value }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 3 }}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    QR Code
                </Typography>
                <QRCodeCanvas value={value} size={200} />
            </Paper>
        </Box>
    );
};

export default Qr;
