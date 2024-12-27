import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<JobList />} />
            <Route path="/job/:id" element={<JobDetails />} />
        </Routes>
    </Router>
);

export default App;
