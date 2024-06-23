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
        <Box sx={{ p: 3, bgcolor: '#f9f9f9' }}>
            <Typography variant="h4" component="h4" gutterBottom align="center">
                Rezept #134
            </Typography>
            <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ paddingLeft: '23px' }}
                    >
                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            Ibuprofen
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ paddingLeft: '23px', paddingTop: '0px', paddingBottom: '4px' }}>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                            Menge: 30mg
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                            Einahme: 1x wöchentlich
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        sx={{ paddingLeft: '23px' }}
                    >
                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            Nystatin
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ paddingLeft: '23px', paddingTop: '0px', paddingBottom: '4px' }}>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                            Menge: 15mg
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                            Einahme: täglich
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            <Card sx={{ mt: 2, p: 1.5 }}>
                <CardContent>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                        Diagnose: Pilzinfektion
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                        Arzt: Dr. Oppenheimer
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                        Erstellt am: 2024-06-13
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                        Gültig bis: 2024-07-13
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                        Eingelöst am: 2024-06-15
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.25rem', mb: 1 }}>
                        Apotheke: Rosenapotheke
                    </Typography>
                </CardContent>
            </Card>

            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Button component={Link} to="/share" sx={{ fontSize: '1.25rem', px: 4, marginBottom: 7}} variant="contained" color="primary">
                    Teilen
                </Button>
            </Box>
        </Box>
        </>
    );
};

export default Home;
