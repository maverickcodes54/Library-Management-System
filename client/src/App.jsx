import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';
import Dashboard from './pages/Dashboard/Dashboard';
import Members from './pages/Members/Members';
import Staff from './pages/Staff/Staff';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navbar />}>
                <Route path="home" element={<Home />} />
                <Route path="books" element={<Books />} />
                <Route path="members" element={<Members />} />
                <Route path="staff" element={<Staff />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default App;
