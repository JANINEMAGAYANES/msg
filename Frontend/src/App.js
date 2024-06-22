import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import IconButton from '@mui/material/IconButton';



import Home from './pages/Home';
import Scan from './pages/Scan';
import Calendar from './pages/Calendar';
import Share from './pages/Share';
import Medication from './pages/Medication';
import Prescription from './pages/Prescription'
import BottomNavigationBar from './components/BottomNavigationBar';
import Chat from './pages/Chat';
import MedicineInfo from "./components/MedicineInfo";
import Doctor from "./pages/Doctor"
import './App.css';
// import { Outlet, useLoaderData, Link } from "react-router-dom";
// import { getMedication } from './pages/Medication';
//
// export async function loader() {
//     const medications = await getMedication();
//     return { medications };
// }

export default function App(){
    // const { medications } = useLoaderData();
    return (
            <div>
                <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MyApp
                        </Typography>
                        {/* <Button color="inherit" component={Link} to="/scan">Scan</Button> */}
                        <IconButton color="inherit" component={Link} to="/doctor">
      <LocalHospitalIcon />
    </IconButton>
                    </Toolbar>
                </AppBar>
                {/*<Calendar />*/}
                <Routes>
                    <Route exact path="/" element={<Calendar />} />
                    {/* <Route path="/scan" element={<Scan />} /> */}
                    <Route path="/ubernehmen" element={<Home />} />
                    <Route path="/medication" element={<Medication />} />
                    <Route path="/share" element={<Share />} />
                    <Route path="/prescription" element={<Prescription />} />
                    <Route path="/contact" element={<Chat />} />
                    <Route path='/drug-info' element={<MedicineInfo />} />
                    <Route path='/doctor' element={<Doctor />} />
                </Routes>
                {/*<Outlet />*/}
                <BottomNavigationBar />

        </Router>
            </div>
    );
};

