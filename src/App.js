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
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        {/* <Button color="inherit" component={Link} to="/scan">Scan</Button> */}
                        <Button color="inherit" component={Link} to="/calendar">Calendar</Button>
                    </Toolbar>
                </AppBar>

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    {/* <Route path="/scan" element={<Scan />} /> */}
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/share" element={<Share />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
