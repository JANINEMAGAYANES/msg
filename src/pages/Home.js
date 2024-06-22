import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <Box sx={{ p: 3 }}>
                <Typography variant="subtitle1" gutterBottom>
                Rezept #103
            </Typography>
            <Divider />
            <Typography variant="h2" component="h1" gutterBottom>
            
                Ibuprofen
            </Typography>
            
            <Card sx={{ mt: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontSize: '1.5rem', mb: 2 }}>
                        Name
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        Einahme: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        Menge: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        Nebenwirkungen: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        Diagnose: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                        Dauer: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Arzt: [Value]
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button variant="contained" color="primary">
                    Teilen
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
