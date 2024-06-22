import React , { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import fetchPrescriptions from '../helpers/fetchPrescription';
import BottomNavigationBar from '../components/BottomNavigationBar';
import Accordion from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Home = () => {
    const [prescriptions, setPrescriptions] = useState([]);

    useEffect(() => {
        const fetchPrescriptionsData = async () => {
            try {
                const data = await fetchPrescriptions();
                setPrescriptions(data); // Update state with fetched prescriptions
            } catch (error) {
                // Handle error
                console.error('Error fetching prescriptions:', error);
            }
        };

        fetchPrescriptionsData();
    }, []);
    return (
        <>
        <Box sx={{ p: 4, bgcolor: '#f9f9f9' }}>
            <Typography variant="h3" component="h3" gutterBottom align="center">
                Rezept #103
            </Typography>

            <Card sx={{ mt: 2, p: 2 }}>
                <CardContent>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography variant="body1" color="primary" sx={{ fontWeight: 'bold' }}>
                                IBUPROFEN
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                                Menge: [Value]
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                                Einahme: [Value]
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                                Dauer: [Value]
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                        Diagnose: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                        Arzt: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                        Erstellungsdatum: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                        Gültig bis: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                        Eingelöst am: [Value]
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 2 }}>
                        Apotheke: [Value]
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button component={Link} to="/share" sx={{ fontSize: '1.25rem', px: 4 }} variant="contained" color="primary">
                    Teilen
                </Button>
            </Box>
        </Box>
        </>
    );
};

export default Home;
