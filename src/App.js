import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './pages/Home';
import Scan from './pages/Scan';
import Calendar from './pages/Calendar';
import Share from './pages/Share';
import Medication from './pages/Medication';
import Prescription from './pages/Prescription'
import BottomNavigationBar from './components/BottomNavigationBar';
import Chat from './pages/Chat';
import './App.css';

const App = () => {
    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            MyApp
                        </Typography>
                        {/* <Button color="inherit" component={Link} to="/scan">Scan</Button> */}
                        <Button color="inherit" component={Link} to="/">Home</Button>
                    </Toolbar>
                </AppBar>

                <Routes>
                    <Route exact path="/" element={<Calendar />} />
                    {/* <Route path="/scan" element={<Scan />} /> */}
                    <Route path="/ubernehmen" element={<Home />} />
                    <Route path="/medication" element={<Medication />} />
                    <Route path="/share" element={<Share />} />
                    <Route path="/prescription" element={<Prescription />} />
                    <Route path="/contact" element={<Chat />} />
                </Routes>
                <BottomNavigationBar />
            </div>
        </Router>
    );
};

export default App;
