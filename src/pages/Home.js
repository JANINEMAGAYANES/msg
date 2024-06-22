import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Box sx={{ p: 3 }}>
                <Typography variant="subtitle1" gutterBottom sx={{  fontSize: '1.5rem',mb: 1 }}>
                Rezept #103
            </Typography>
            <Divider />
            <Typography variant="h2" component="h1" gutterBottom>
            
                Ibuprofen
            </Typography>
            
            <Card sx={{ mt: 3 }}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ fontSize: '2.5rem', mb: 2 }}>
                        Name: Ibuprofen
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{  fontSize: '2.5rem',mb: 1 }}>
                        Einahme: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '2.5rem', mb: 1 }}>
                        Menge: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '2.5rem', mb: 1 }}>
                        Nebenwirkungen: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{  fontSize: '2.5rem',mb: 1 }}>
                        Diagnose: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{  fontSize: '2.5rem',mb: 1 }}>
                        Dauer: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{  fontSize: '2.5rem',mb: 1 }}>
                        Arzt: [Value]
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Button component={Link} to="/share" sx={{  fontSize: '2.5rem',mb: 1 }} variant="contained" color="primary">
                    Teilen
                </Button>
            </Box>
        </Box>
    );
};

export default Home;
